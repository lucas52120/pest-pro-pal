import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import GoogleLogo from "@/components/GoogleLogo";
import { supabase } from "@/integrations/supabase/client";
import { LOCAL_BUSINESS } from "@/data/business";

type Rating = { averageRating: number; totalReviewCount: number };

/** Five stars filled in proportion to the live rating. */
const RatingStars = ({ value }: { value: number }) => {
  const row = (className: string) => (
    <span className="flex">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} className={`h-4 w-4 shrink-0 ${className}`} />
      ))}
    </span>
  );
  return (
    <span className="relative inline-block" aria-hidden="true">
      {row("fill-border text-border")}
      <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${(value / 5) * 100}%` }}>
        {row("fill-[#FBBC05] text-[#FBBC05]")}
      </span>
    </span>
  );
};

/** Badge linking to the Google listing; the live rating is never hard-coded. */
const GoogleRating = ({ className = "" }: { className?: string }) => {
  const [rating, setRating] = useState<Rating | null>(null);

  useEffect(() => {
    supabase.functions.invoke("google-reviews").then(({ data, error }) => {
      if (!error && data?.totalReviewCount) setRating(data as Rating);
    });
  }, []);

  return (
    <a
      href={LOCAL_BUSINESS.hasMap}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[3.75rem] items-center gap-3 rounded-xl bg-card px-4 py-2 text-primary shadow-md transition-shadow hover:shadow-lg ${className}`}
    >
      <GoogleLogo className="h-8 w-8 shrink-0" />
      {rating ? (
        <span className="flex flex-col">
          <span className="flex items-center gap-2 font-heading font-bold leading-tight">
            {rating.averageRating.toFixed(1).replace(".", ",")}/5
            <RatingStars value={rating.averageRating} />
          </span>
          <span className="text-sm text-muted-foreground">
            {rating.totalReviewCount} avis Google, tous services confondus
          </span>
        </span>
      ) : (
        <span className="text-sm font-semibold">Voir nos avis Google</span>
      )}
    </a>
  );
};

export default GoogleRating;
