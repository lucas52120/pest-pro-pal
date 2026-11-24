import { useEffect, useState } from "react";
import EmblaCarousel from "embla-carousel-react";
import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import GoogleLogo from "@/components/GoogleLogo";
import { supabase } from "@/integrations/supabase/client";

type Review = { id: string; author: string; photo: string | null; rating: number; text: string; date: string };
type Data = { averageRating: number; totalReviewCount: number; writeReviewUrl: string; mapsUrl: string; reviews: Review[] };

const WRITE_URL = "https://search.google.com/local/writereview?placeid=ChIJvePLJuveHmcRkTqDc1_CAF0";

const Stars = ({ value, size = "h-4 w-4" }: { value: number; size?: string }) => (
  <div className="flex gap-0.5" aria-label={`${value} sur 5`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <Star key={i} className={`${size} ${i <= Math.round(value) ? "fill-accent text-accent" : "text-muted-foreground/30"}`} />
    ))}
  </div>
);

const fullDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

const GoogleReviews = () => {
  const [data, setData] = useState<Data | null>(null);
  const [viewportRef, embla] = EmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    skipSnaps: false,
    duration: 25,
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    supabase.functions.invoke("google-reviews").then(({ data, error }) => {
      if (!error && data?.reviews) setData(data as Data);
    });
  }, []);

  const reviews = (data?.reviews ?? []).filter((r) => r.text);
  const writeUrl = data?.writeReviewUrl ?? WRITE_URL;

  useEffect(() => {
    if (!embla) return;
    embla.reInit();
    const onSelect = () => {
      setSelected(embla.selectedScrollSnap());
      setCanPrev(embla.canScrollPrev());
      setCanNext(embla.canScrollNext());
    };
    setSnaps(embla.scrollSnapList());
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
    return () => {
      embla.off("select", onSelect);
      embla.off("reInit", onSelect);
    };
  }, [embla, reviews.length]);

  return (
    <section className="py-16 md:py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Ce que disent nos clients</h2>
          {data ? (
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-card rounded-2xl px-6 py-4 shadow-sm border">
              <GoogleLogo />
              <span className="text-4xl font-bold text-primary">{data.averageRating.toFixed(1).replace(".", ",")}</span>
              <div className="flex flex-col items-center sm:items-start">
                <Stars value={data.averageRating} size="h-5 w-5" />
                <a href={data.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-accent">
                  {data.totalReviewCount} avis Google vérifiés
                </a>
              </div>
            </div>
          ) : (
            <div className="h-20" />
          )}
        </div>

        {reviews.length > 0 && (
          <div className="relative mb-10">
            <div className="overflow-hidden touch-pan-y" ref={viewportRef}>
              <div className="flex gap-6">
                {reviews.map((r) => (
                  <article
                    key={r.id}
                    className="min-w-0 basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)] shrink-0 bg-card rounded-xl p-6 shadow-sm border flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {r.photo ? (
                        <img src={r.photo} alt="" className="h-10 w-10 rounded-full" loading="lazy" referrerPolicy="no-referrer" />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">{r.author[0]}</div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground truncate">{r.author}</p>
                        <p className="text-xs text-muted-foreground">{fullDate(r.date)}</p>
                      </div>
                      <GoogleLogo />
                    </div>
                    <Stars value={r.rating} />
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-6">{r.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => embla?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Avis précédent"
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 h-11 w-11 rounded-full bg-card border shadow-md items-center justify-center text-primary transition-opacity hover:bg-accent hover:text-accent-foreground disabled:opacity-0 disabled:pointer-events-none"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => embla?.scrollNext()}
              disabled={!canNext}
              aria-label="Avis suivant"
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 h-11 w-11 rounded-full bg-card border shadow-md items-center justify-center text-primary transition-opacity hover:bg-accent hover:text-accent-foreground disabled:opacity-0 disabled:pointer-events-none"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="flex justify-center gap-2 mt-8">
              {snaps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => embla?.scrollTo(i)}
                  aria-label={`Aller à l'avis ${i + 1}`}
                  aria-current={selected === i}
                  className={`h-2.5 rounded-full transition-all ${selected === i ? "w-7 bg-accent" : "w-2.5 bg-primary/25 hover:bg-primary/50"}`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={writeUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground hover:bg-accent/90 transition-colors">
            <Star className="h-5 w-5 fill-current" /> Laisser un avis
          </a>
          {data && (
            <a href={data.mapsUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
              Voir tous les avis <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
