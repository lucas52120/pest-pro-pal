const SITE_URL = "https://gf-nuisibles.fr";

/** Google Business Profile listing, stated by its stable customer id. */
const GOOGLE_MAPS_URL = "https://www.google.com/maps?cid=6701569960742959761";

const FACEBOOK_URL = "https://www.facebook.com/gfnuisibles";

/** The one business record of the site: every page's JSON-LD uses it as is. */
export const LOCAL_BUSINESS = {
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "GF Nuisibles",
  alternateName: "G&F Nuisibles",
  url: SITE_URL,
  telephone: "07 65 25 67 92",
  email: "contact@gf-nuisibles.fr",
  image: `${SITE_URL}/og-image.png`,
  priceRange: "€€",
  description:
    "Expert local en Haute-Marne pour le traitement des cafards et blattes, la dératisation et le dépigeonnage. Intervention rapide 7j/7.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "27 rue Principale",
    addressLocality: "Semoutiers-Montsaon",
    postalCode: "52000",
    addressRegion: "Haute-Marne",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.0823494,
    longitude: 5.0331909,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "07:00",
      closes: "23:00",
    },
  ],
  areaServed: { "@type": "AdministrativeArea", name: "Haute-Marne (52)" },
  hasMap: GOOGLE_MAPS_URL,
  sameAs: [FACEBOOK_URL, GOOGLE_MAPS_URL],
};
