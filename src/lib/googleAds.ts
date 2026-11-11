/* Google Ads conversions. The tag itself (gtag.js) is loaded in index.html. */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const PHONE_CONVERSION = "AW-18154868285/wT98CPahl98cEL2c9dBD";
const FORM_CONVERSION = "AW-18154868285/K9KxCJ_QpbYdEL2c9dBD";

/** Digits of the business number; other tel: links (e.g. the host in the legal notice) are not leads. */
const BUSINESS_PHONE_DIGITS = "765256792";

/** Call only after the contact form service confirmed the submission. */
export function trackFormConversion() {
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: FORM_CONVERSION, value: 1.0, currency: "EUR" });
  }
}

/**
 * One document-level listener, registered once at startup: it also covers tel: links rendered later
 * and clicks on an icon or text inside the link. It never prevents the call.
 */
export function trackPhoneClicks() {
  document.addEventListener(
    "click",
    (event) => {
      const link = event.target instanceof Element ? event.target.closest('a[href^="tel:"]') : null;
      if (!link || !link.getAttribute("href")?.replace(/\D/g, "").endsWith(BUSINESS_PHONE_DIGITS)) return;
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", { send_to: PHONE_CONVERSION });
      }
    },
    true,
  );
}
