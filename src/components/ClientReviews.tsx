import { Star } from "lucide-react";
import { CLIENT_REVIEWS, ClientReviewKey } from "@/data/clientReviews";

/** A few real Google reviews, placed inside a section. */
const ClientReviews = ({ keys }: { keys: ClientReviewKey[] }) => (
  <div className="mt-14">
    <h2 className="mb-2 font-heading text-2xl font-extrabold text-primary md:text-3xl">Ce que disent mes clients</h2>
    <p className="mb-6 text-muted-foreground">Avis Google, toutes interventions confondues.</p>
    <div className="grid gap-4 md:grid-cols-3">
      {keys.map((key) => {
        const review = CLIENT_REVIEWS[key];
        return (
          <figure key={key} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <span className="mb-3 flex gap-0.5" role="img" aria-label="5 sur 5">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" aria-hidden="true" />
              ))}
            </span>
            <blockquote className="whitespace-pre-line leading-relaxed text-foreground/80">{`«\u00a0${review.text}\u00a0»`}</blockquote>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              <strong className="text-primary">{review.author}</strong>, {review.about}
            </figcaption>
          </figure>
        );
      })}
    </div>
  </div>
);

export default ClientReviews;
