- Google reviews are fetched by the `google-reviews` edge function and cached in `google_reviews_cache` (service role only); why: keeps Google quota low and page fast.
- Each route owns its canonical URL through Helmet; do not add a canonical to index.html, because duplicate homepage and route canonicals send conflicting indexing signals.

- Keep retired-service redirects in src/data/retiredServiceRedirects.ts and mirror them in public/_redirects; mapped redirect routes stay outside the sitemap and SSG page inventory.

- The business record (name, address, phone, GPS, hours, Facebook, Google listing) lives only in src/data/business.ts; pages add LOCAL_BUSINESS to their JSON-LD and never restate it. Visible name is "GF Nuisibles", phone "07 65 25 67 92".
