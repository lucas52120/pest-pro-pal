import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { readFileSync } from "node:fs";
import Contact from "@/pages/Contact";
import { trackPhoneClicks } from "@/lib/googleAds";

const PHONE = { send_to: "AW-18154868285/wT98CPahl98cEL2c9dBD" };
const FORM = { send_to: "AW-18154868285/K9KxCJ_QpbYdEL2c9dBD", value: 1.0, currency: "EUR" };

let gtag: ReturnType<typeof vi.fn>;
let callPrevented: boolean | undefined;

beforeAll(() => {
  trackPhoneClicks();
  // jsdom cannot follow tel: links: note whether the call was blocked, then stop the navigation.
  document.addEventListener("click", (event) => {
    callPrevented = event.defaultPrevented;
    event.preventDefault();
  });
  // The navbar scrolls to the top on mount, which jsdom does not implement.
  window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  } as unknown as typeof IntersectionObserver;
});

beforeEach(() => {
  gtag = vi.fn();
  window.gtag = gtag;
  callPrevented = undefined;
  document.body.innerHTML = "";
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Google tag", () => {
  it("is loaded once from index.html with the Google Ads id", () => {
    const html = readFileSync("index.html", "utf8");
    expect(html.match(/googletagmanager\.com\/gtag\/js\?id=AW-18154868285/g)).toHaveLength(1);
    expect(html).toContain("gtag('config', 'AW-18154868285');");
  });
});

describe("phone click conversion", () => {
  it("fires on a click inside a business tel: link added after startup, without blocking the call", () => {
    document.body.innerHTML = '<a href="tel:0765256792"><svg></svg><span>07 65 25 67 92</span></a>';
    fireEvent.click(document.querySelector("span")!);
    expect(gtag).toHaveBeenCalledTimes(1);
    expect(gtag).toHaveBeenCalledWith("event", "conversion", PHONE);
    expect(callPrevented).toBe(false);
  });

  it("ignores other numbers and other links", () => {
    document.body.innerHTML = '<a href="tel:+14156911573">Netlify</a><a href="/contact">Contact</a>';
    fireEvent.click(screen.getByText("Netlify"));
    fireEvent.click(screen.getByText("Contact"));
    expect(gtag).not.toHaveBeenCalled();
  });

  it("does nothing when the Google tag is missing", () => {
    delete window.gtag;
    document.body.innerHTML = '<a href="tel:0765256792">Appeler</a>';
    expect(() => fireEvent.click(screen.getByText("Appeler"))).not.toThrow();
  });
});

describe("contact form conversion", () => {
  const renderContact = () =>
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={["/contact"]}>
          <Contact />
        </MemoryRouter>
      </HelmetProvider>,
    );

  const fillForm = (consent = true) => {
    fireEvent.change(screen.getByLabelText("Nom *"), { target: { value: "Test" } });
    fireEvent.change(screen.getByLabelText("Téléphone *"), { target: { value: "0600000000" } });
    fireEvent.change(screen.getByLabelText("Message *"), { target: { value: "Essai" } });
    if (consent) fireEvent.click(screen.getByRole("checkbox"));
    fireEvent.submit(screen.getByRole("button", { name: /Envoyer la demande/ }).closest("form")!);
  };

  const conversions = () => gtag.mock.calls.filter((call) => call[2]?.send_to === FORM.send_to);

  it("fires once, after Formspark confirms the submission", async () => {
    vi.spyOn(window, "fetch").mockResolvedValue(new Response("{}", { status: 200 }));
    renderContact();
    fillForm();
    await screen.findByText("Merci !");
    expect(conversions()).toEqual([["event", "conversion", FORM]]);
  });

  it("does not fire when Formspark answers with an error", async () => {
    const fetch = vi.spyOn(window, "fetch").mockResolvedValue(new Response("{}", { status: 500 }));
    renderContact();
    fillForm();
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    await waitFor(() => expect(screen.getByRole("button", { name: /Envoyer la demande/ })).toBeEnabled());
    expect(conversions()).toEqual([]);
  });

  it("does not fire when the network fails", async () => {
    const fetch = vi.spyOn(window, "fetch").mockRejectedValue(new TypeError("Failed to fetch"));
    renderContact();
    fillForm();
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    await waitFor(() => expect(screen.getByRole("button", { name: /Envoyer la demande/ })).toBeEnabled());
    expect(conversions()).toEqual([]);
  });

  it("does not send nor fire without consent", () => {
    const fetch = vi.spyOn(window, "fetch");
    renderContact();
    fillForm(false);
    expect(fetch).not.toHaveBeenCalled();
    expect(conversions()).toEqual([]);
  });
});
