import { createClient } from "npm:@supabase/supabase-js@2.95.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_business_profile";
const LOCATION_PATH = "accounts/107335046382210790005/locations/14459899188696792205";
const PLACE_ID = "ChIJvePLJuveHmcRkTqDc1_CAF0";
const CACHE_ID = "gf-nuisibles";
const CACHE_HOURS = 3;

const STARS: Record<string, number> = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 };

const cleanComment = (c?: string) =>
  (c ?? "").split(/\n*\(Translated by Google\)/)[0].replace(/^\(Original\)\s*/, "").trim();

async function fetchFromGoogle() {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const KEY = Deno.env.get("GOOGLE_BUSINESS_PROFILE_API_KEY");
  if (!LOVABLE_API_KEY || !KEY) throw new Error("Missing connector credentials");

  const all: any[] = [];
  let average = 0;
  let total = 0;
  let pageToken = "";
  for (let i = 0; i < 10; i++) {
    const url = `${GATEWAY_URL}/my_business/v4/${LOCATION_PATH}/reviews?pageSize=50${pageToken ? `&pageToken=${pageToken}` : ""}`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "X-Connection-Api-Key": KEY },
    });
    if (!res.ok) throw new Error(`Google [${res.status}]: ${await res.text()}`);
    const json = await res.json();
    all.push(...(json.reviews ?? []));
    average = json.averageRating ?? average;
    total = json.totalReviewCount ?? total;
    if (!json.nextPageToken) break;
    pageToken = encodeURIComponent(json.nextPageToken);
  }

  return {
    averageRating: average,
    totalReviewCount: total || all.length,
    writeReviewUrl: `https://search.google.com/local/writereview?placeid=${PLACE_ID}`,
    mapsUrl: `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`,
    reviews: all.map((r) => ({
      id: r.reviewId,
      author: r.reviewer?.displayName ?? "Client Google",
      photo: r.reviewer?.profilePhotoUrl ?? null,
      rating: STARS[r.starRating] ?? 5,
      text: cleanComment(r.comment),
      date: r.createTime,
      reply: r.reviewReply?.comment ?? null,
    })),
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

  const { data: cached } = await db.from("google_reviews_cache").select("data, fetched_at").eq("id", CACHE_ID).maybeSingle();
  const fresh = cached && Date.now() - new Date(cached.fetched_at).getTime() < CACHE_HOURS * 3600_000;
  if (fresh) {
    return Response.json(cached.data, { headers: corsHeaders });
  }

  try {
    const data = await fetchFromGoogle();
    await db.from("google_reviews_cache").upsert({ id: CACHE_ID, data, fetched_at: new Date().toISOString() });
    return Response.json(data, { headers: corsHeaders });
  } catch (e) {
    console.error(e);
    if (cached) return Response.json(cached.data, { headers: corsHeaders });
    return Response.json({ error: String(e) }, { status: 502, headers: corsHeaders });
  }
});
