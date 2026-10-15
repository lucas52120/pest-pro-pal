import { useEffect, useState } from "react";
import { Star, ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Review = { id: string; author: string; photo: string | null; rating: number; text: string; date: string };
type Data = { averageRating: number; totalReviewCount: number; writeReviewUrl: string; mapsUrl: string; reviews: Review[] };

const WRITE_URL = "https://search.google.com/local/writereview?placeid=ChIJvePLJuveHmcRkTqDc1_CAF0";

const GoogleLogo = () => (
  <svg viewBox="0 0 48 48" className="h-6 w-6" aria-hidden="true">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/>
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/>
  </svg>
);

const Stars = ({ value, size = "h-4 w-4" }: { value: number; size?: string }) => (
  <div className="flex gap-0.5" aria-label={`${value} sur 5`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <Star key={i} className={`${size} ${i <= Math.round(value) ? "fill-accent text-accent" : "text-muted-foreground/30"}`} />
    ))}
  </div>
);

const GoogleReviews = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    supabase.functions.invoke("google-reviews").then(({ data, error }) => {
      if (!error && data?.reviews) setData(data as Data);
    });
  }, []);

  const reviews = (data?.reviews ?? []).filter((r) => r.text).slice(0, 6);
  const writeUrl = data?.writeReviewUrl ?? WRITE_URL;

  return (
    <section className="py-16 md:py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Avis de nos clients</h2>
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10">
            {reviews.map((r) => (
              <article key={r.id} className="bg-card rounded-xl p-6 shadow-sm border flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  {r.photo ? (
                    <img src={r.photo} alt="" className="h-10 w-10 rounded-full" loading="lazy" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">{r.author[0]}</div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate">{r.author}</p>
                    <p className="text-xs text-muted-foreground">{new Date(r.date).toLocaleDateString("fr-FR", { month: "long", year: "numeric" })}</p>
                  </div>
                  <GoogleLogo />
                </div>
                <Stars value={r.rating} />
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-6">{r.text}</p>
              </article>
            ))}
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
