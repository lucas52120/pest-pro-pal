import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MapPin, Clock, Phone, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { CITIES } from "@/data/cities";
import { LOCAL_BUSINESS } from "@/data/business";

const SITE_URL = "https://gf-nuisibles.fr";
const PHONE = "07 65 25 67 92";

const SECTEURS = [
  {
    titre: "Haute-Marne (52) — notre département de base",
    texte:
      "Basés à Semoutiers-Montsaon, à 5 minutes de Chaumont, nous couvrons l'intégralité de la Haute-Marne : Chaumont, Langres, Saint-Dizier, Joinville, Nogent, Wassy, Bologne, Froncles, Châteauvillain, Arc-en-Barrois, Chalindrey, Montier-en-Der et Bourbonne-les-Bains. Quand vous appelez, je vous dis tout de suite quand je peux passer.",
  },
  {
    titre: "Aube (10) et Marne (51)",
    texte:
      "Troyes, Bar-sur-Aube, et Vitry-le-François font partie de notre zone étendue. Nous y assurons principalement la dératisation et les chantiers de dépigeonnisation pour les copropriétés, industries et collectivités.",
  },
  {
    titre: "Vosges (88) et autres départements voisins",
    texte:
      "Neufchâteau et les communes proches de la Haute-Marne sont desservies sur rendez-vous, pour la dératisation et la protection contre les pigeons. Pour un chantier professionnel plus éloigné, appelez le 07 65 25 67 92 : nous vous disons si nous pouvons intervenir.",
  },
];

const DELAIS = [
  { zone: "Chaumont et ses environs", delai: "Une date donnée dès votre appel" },
  { zone: "Reste de la Haute-Marne (52)", delai: "Une date donnée dès votre appel" },
  { zone: "Communes des départements voisins", delai: "Sur rendez-vous, fixé ensemble au téléphone" },
];

const FAQ = [
  {
    q: "Intervenez-vous en dehors de la Haute-Marne ?",
    a: "Oui, surtout dans les communes proches de la Haute-Marne, ainsi que vers Bar-sur-Aube, Troyes, Vitry-le-François et Neufchâteau. Pour un chantier professionnel plus éloigné, appelez-nous. Les déplacements sont annoncés à l'avance dans le devis, sans surprise.",
  },
  {
    q: "Le déplacement est-il facturé en plus ?",
    a: "Cela dépend de votre commune et de l'intervention. Appelez le " +
      PHONE +
      " : le prix vous est annoncé avant, sans surprise.",
  },
  {
    q: "Quel est le délai d'intervention en urgence ?",
    a: "Appelez le " +
      PHONE +
      ", 7j/7 de 7h à 23h, week-ends compris : je vous dis tout de suite quand je peux passer. Un nid de guêpes près d'un passage ou d'une personne allergique passe en priorité.",
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
      LOCAL_BUSINESS,
      {
        "@type": "Service",
        name: "Gestion des nuisibles en Haute-Marne et départements limitrophes",
        url: `${SITE_URL}/zone-intervention`,
        provider: { "@id": LOCAL_BUSINESS["@id"] },
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
        title="Zone d'intervention : Haute-Marne et alentours | GF Nuisibles"
        description="GF Nuisibles intervient à Chaumont, Langres, Saint-Dizier, Joinville et partout en Haute-Marne, ainsi que vers Bar-sur-Aube, Troyes et Neufchâteau. Urgence 7j/7."
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
              Entreprise de lutte contre les nuisibles basée à Semoutiers-Montsaon (52), GF Nuisibles
              intervient à Chaumont, Langres, Saint-Dizier, Joinville et partout en Haute-Marne, ainsi que vers
              Bar-sur-Aube, Troyes, Vitry-le-François et Neufchâteau.{" "}
              <Link to="/deratisation" className="underline underline-offset-4 hover:text-accent">Dératisation en Haute-Marne</Link>,{" "}
              <Link to="/guepes-frelons" className="underline underline-offset-4 hover:text-accent">guêpes et frelons</Link>,{" "}
              <Link to="/cafards-blattes" className="underline underline-offset-4 hover:text-accent">cafards et blattes</Link>,{" "}
              <Link to="/taupes" className="underline underline-offset-4 hover:text-accent">taupes</Link> et{" "}
              <Link to="/depigeonnage" className="underline underline-offset-4 hover:text-accent">dépigeonnage</Link>, 7j/7, week-ends et jours fériés compris.
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
              { icon: MapPin, t: "Toute la Haute-Marne", d: "Et les communes proches, dans les départements voisins." },
              { icon: Clock, t: "Une date dès l'appel", d: "Je vous dis tout de suite quand je peux passer, 7j/7 de 7h à 23h." },
              { icon: ShieldCheck, t: "Certibiocide", d: "Technicien certifié, produits professionnels homologués." },
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
                    <th className="px-4 py-3 font-semibold text-primary">Délai</th>
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
              De juillet à septembre, saison des guêpes et des frelons, les demandes sont plus nombreuses : appelez tôt.
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
