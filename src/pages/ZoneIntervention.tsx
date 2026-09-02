import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Clock, Phone, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { CITIES } from "@/data/cities";

const SITE_URL = "https://gf-nuisibles.fr";
const PHONE = "07.65.25.67.92";

const SECTEURS = [
  {
    titre: "Haute-Marne (52) — notre département de base",
    texte:
      "Basés à Semoutiers-Montsaon, à 5 minutes de Chaumont, nous couvrons l'intégralité de la Haute-Marne : Chaumont, Langres, Saint-Dizier, Joinville, Nogent, Wassy, Bologne, Froncles, Châteauvillain, Arc-en-Barrois, Chalindrey, Montier-en-Der et Bourbonne-les-Bains. Sur ce secteur, nous intervenons généralement dans la journée, et en moins de 2 h pour les urgences guêpes et frelons.",
  },
  {
    titre: "Aube (10) et Marne (51)",
    texte:
      "Troyes, Bar-sur-Aube, Vitry-le-François et Châlons-en-Champagne font partie de notre zone étendue. Nous y assurons principalement la dératisation, la désinsectisation et les chantiers de dépigeonnisation pour les copropriétés, industries et collectivités.",
  },
  {
    titre: "Côte-d'Or (21) et Vosges (88)",
    texte:
      "Dijon, Beaune, Châtillon-sur-Seine, Vittel et Neufchâteau sont desservis pour les contrats professionnels et les interventions programmées : dératisation de sites industriels, protection anti-pigeons de bâtiments, plans de lutte HACCP.",
  },
  {
    titre: "Meurthe-et-Moselle (54)",
    texte:
      "Nancy et son agglomération complètent notre zone d'intervention, essentiellement pour les prestations B2B : bailleurs sociaux, syndics, sites logistiques et établissements recevant du public.",
  },
];

const DELAIS = [
  { zone: "Chaumont et 20 km alentour", delai: "Sous 2 h en urgence, sinon le jour même" },
  { zone: "Haute-Marne (52)", delai: "Sous 24 h, souvent le jour même" },
  { zone: "Aube, Marne, Côte-d'Or, Vosges", delai: "Sous 24 à 48 h" },
  { zone: "Meurthe-et-Moselle (54)", delai: "Sur rendez-vous, sous 48 à 72 h" },
];

const FAQ = [
  {
    q: "Intervenez-vous en dehors de la Haute-Marne ?",
    a: "Oui. Au-delà du département 52, nous intervenons dans l'Aube, la Marne, la Côte-d'Or, les Vosges et la Meurthe-et-Moselle, jusqu'à environ 150 km de Chaumont. Les déplacements sont annoncés à l'avance dans le devis, sans surprise.",
  },
  {
    q: "Le déplacement est-il facturé en plus ?",
    a: "Dans un rayon de 20 km autour de Chaumont, le déplacement est inclus dans le tarif d'intervention. Au-delà, une participation kilométrique peut s'ajouter : elle est toujours annoncée avant l'intervention, dans le devis gratuit.",
  },
  {
    q: "Quel est le délai d'intervention en urgence ?",
    a: "Pour une urgence guêpes ou frelons à Chaumont et dans un rayon de 20 km, nous intervenons généralement en moins de 2 heures. Sur le reste de la Haute-Marne, l'intervention a lieu dans les 24 heures, week-end compris.",
  },
  {
    q: "Ma commune n'apparaît pas dans la liste, pouvez-vous venir ?",
    a: "Oui, la liste ci-dessus reprend les principales villes mais nous desservons également tous les villages alentours. Appelez le " +
      PHONE +
      " : nous vous confirmons immédiatement la faisabilité et le délai.",
  },
  {
    q: "Travaillez-vous avec les professionnels et les collectivités ?",
    a: "Oui. Nous accompagnons des bailleurs sociaux, syndics de copropriété, industriels, commerces alimentaires, hôtels et collectivités sur l'ensemble de la zone, avec contrats de suivi, traçabilité et plans de lutte conformes HACCP.",
  },
];

const ZoneIntervention = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PestControlService",
        name: "G&F Nuisibles",
        url: `${SITE_URL}/zone-intervention`,
        telephone: "+33765256792",
        image: `${SITE_URL}/og-image.png`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Semoutiers-Montsaon",
          postalCode: "52000",
          addressRegion: "Haute-Marne",
          addressCountry: "FR",
        },
        geo: { "@type": "GeoCoordinates", latitude: 48.0725, longitude: 5.1069 },
        openingHours: "Mo-Su 07:00-21:00",
        areaServed: CITIES.map((c) => ({ "@type": "City", name: c.name })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Zone d'intervention",
            item: `${SITE_URL}/zone-intervention`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <SEO
        title="Zone d'intervention | Dératisation & nuisibles en Haute-Marne (52)"
        description="G&F Nuisibles intervient à Chaumont, Langres, Saint-Dizier, Joinville et dans toute la Haute-Marne, l'Aube, la Marne, la Côte-d'Or et les Vosges. Urgence 7j/7."
        path="/zone-intervention"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

      <main className="bg-background">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-14 md:py-20">
          <div className="container-narrow px-4">
            <nav aria-label="Fil d'Ariane" className="mb-4 text-sm text-primary-foreground/70">
              <Link to="/" className="hover:text-accent">Accueil</Link>
              <span className="mx-2">/</span>
              <span>Zone d'intervention</span>
            </nav>
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Zone d'intervention : Haute-Marne et départements limitrophes
            </h1>
            <p className="text-lg text-primary-foreground/85 max-w-3xl">
              Entreprise de lutte contre les nuisibles basée à Semoutiers-Montsaon (52), G&F Nuisibles
              intervient chaque jour à Chaumont, Langres, Saint-Dizier, Joinville et dans plus de
              {" "}{CITIES.length} villes de Haute-Marne, d'Aube, de Marne, de Côte-d'Or, des Vosges et de
              Meurthe-et-Moselle. Dératisation, guêpes et frelons, désinsectisation, taupes et
              dépigeonnisation, 7j/7, week-ends et jours fériés compris.
            </p>
            <a
              href="tel:0765256792"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground hover:opacity-90 transition"
            >
              <Phone className="h-5 w-5" /> Urgence 7j/7 — {PHONE}
            </a>
          </div>
        </section>

        {/* Points clés */}
        <section className="py-12">
          <div className="container-narrow px-4 grid gap-6 sm:grid-cols-3">
            {[
              { icon: MapPin, t: "Rayon de 150 km", d: "Depuis Chaumont, sur 6 départements du Grand Est et de Bourgogne." },
              { icon: Clock, t: "Urgence sous 2 h", d: "Guêpes et frelons à Chaumont et dans un rayon de 20 km." },
              { icon: ShieldCheck, t: "Certibiocide", d: "Technicien certifié, produits homologués, intervention garantie." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-lg border border-border bg-card p-6">
                <Icon className="h-8 w-8 text-accent mb-3" />
                <h2 className="font-heading text-lg font-semibold text-primary mb-1">{t}</h2>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Secteurs */}
        <section className="pb-12">
          <div className="container-narrow px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">
              Les secteurs que nous desservons
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {SECTEURS.map((s) => (
                <article key={s.titre} className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">{s.titre}</h3>
                  <p className="text-sm leading-relaxed text-foreground/80">{s.texte}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Délais */}
        <section className="pb-12">
          <div className="container-narrow px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">
              Délais d'intervention selon votre commune
            </h2>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-primary">Secteur</th>
                    <th className="px-4 py-3 font-semibold text-primary">Délai constaté</th>
                  </tr>
                </thead>
                <tbody>
                  {DELAIS.map((d) => (
                    <tr key={d.zone} className="border-t border-border">
                      <td className="px-4 py-3">{d.zone}</td>
                      <td className="px-4 py-3 text-foreground/80">{d.delai}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Délais moyens constatés, hors périodes de forte affluence (pic guêpes et frelons de juillet à septembre).
            </p>
          </div>
        </section>

        {/* Villes */}
        <section className="pb-12">
          <div className="container-narrow px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">
              Toutes nos villes d'intervention
            </h2>
            <p className="mb-6 text-muted-foreground">
              Cliquez sur votre ville pour découvrir le service qui vous concerne, avec les tarifs et
              les spécificités locales.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CITIES.map((city) => (
                <div key={city.name} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="mb-3 font-heading text-lg font-semibold text-primary">
                    Nuisibles à {city.name}
                  </h3>
                  <ul className="space-y-1.5 text-sm">
                    {city.links.map((l) => (
                      <li key={l.to}>
                        <Link to={l.to} className="text-foreground/80 hover:text-accent transition-colors">
                          {l.label} {city.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-16">
          <div className="container-narrow px-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">
              Questions fréquentes sur notre zone d'intervention
            </h2>
            <div className="space-y-4">
              {FAQ.map((f) => (
                <article key={f.q} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="font-heading text-base font-semibold text-primary mb-2">{f.q}</h3>
                  <p className="text-sm leading-relaxed text-foreground/80">{f.a}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-lg bg-primary p-8 text-center text-primary-foreground">
              <h2 className="font-heading text-2xl font-bold mb-2">Votre commune est dans notre zone ?</h2>
              <p className="mb-5 text-primary-foreground/85">
                Devis gratuit et intervention rapide, 7j/7, week-ends et jours fériés compris.
              </p>
              <a
                href="tel:0765256792"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground hover:opacity-90 transition"
              >
                <Phone className="h-5 w-5" /> Appeler le {PHONE}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ZoneIntervention;
