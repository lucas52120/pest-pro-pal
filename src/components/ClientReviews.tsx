import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import { CLIENT_REVIEWS, ClientReviewKey } from "@/data/clientReviews";

const AUTOPLAY_MS = 5000;

/** A few real Google reviews: one line that scrolls by itself on phones, three columns on larger screens. */
const ClientReviews = ({ keys }: { keys: ClientReviewKey[] }) => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);

    // Phones only, and never for people who asked the system to reduce motion.
    const phone = window.matchMedia("(max-width: 767px)").matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stopped = !phone || calm;
    const stop = () => {
      stopped = true;
    };
    embla.on("pointerDown", stop);
    const timer = window.setInterval(() => {
      if (!stopped && !document.hidden) embla.scrollNext();
    }, AUTOPLAY_MS);

    return () => {
      window.clearInterval(timer);
      embla.off("select", onSelect);
      embla.off("reInit", onSelect);
      embla.off("pointerDown", stop);
    };
  }, [embla]);

  return (
    <div className="mt-14">
      <h2 className="mb-2 font-heading text-2xl font-extrabold text-primary md:text-3xl">Ce que disent mes clients</h2>
      <p className="mb-6 text-muted-foreground">Avis Google, toutes interventions confondues.</p>
      <div className="overflow-hidden" ref={viewportRef}>
        <div className="flex touch-pan-y">
          {keys.map((key) => {
            const review = CLIENT_REVIEWS[key];
            return (
              <figure key={key} className="mr-4 flex min-w-0 shrink-0 grow-0 basis-[88%] flex-col rounded-2xl border border-border bg-card p-5 shadow-sm md:basis-[calc((100%-2rem)/3)] md:last:mr-0">
                <span className="mb-3 flex gap-0.5" role="img" aria-label="5 sur 5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star key={n} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" aria-hidden="true" />
                  ))}
                </span>
                <blockquote className="whitespace-pre-line leading-relaxed text-foreground/80">{`«\u00a0${review.text}\u00a0»`}</blockquote>
                <figcaption className="mt-auto pt-3 text-sm text-muted-foreground">
                  <strong className="text-primary">{review.author}</strong>, {review.about}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-2 md:hidden">
        {keys.map((key, i) => (
          <button
            key={key}
            type="button"
            onClick={() => embla?.scrollTo(i)}
            aria-label={`Voir l'avis ${i + 1}`}
            aria-current={selected === i}
            className={`h-2.5 rounded-full transition-all ${selected === i ? "w-7 bg-accent" : "w-2.5 bg-primary/25"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientReviews;
