import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { LOCAL_BUSINESS } from "@/data/business";

type Rating = { averageRating: number; totalReviewCount: number };

/** One-line link to the Google listing; the live rating is never hard-coded. */
const GoogleRating = ({ className }: { className?: string }) => {
  const [rating, setRating] = useState<Rating | null>(null);

  useEffect(() => {
    supabase.functions.invoke("google-reviews").then(({ data, error }) => {
      if (!error && data?.totalReviewCount) setRating(data as Rating);
    });
  }, []);

  return (
    <a href={LOCAL_BUSINESS.hasMap} target="_blank" rel="noopener noreferrer" className={className}>
      <Star className="h-5 w-5 shrink-0 fill-accent text-accent" aria-hidden="true" />
      {rating
        ? `${rating.averageRating.toFixed(1).replace(".", ",")}/5 sur ${rating.totalReviewCount} avis Google, tous services confondus`
        : "Voir nos avis Google"}
    </a>
  );
};

export default GoogleRating;
