import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, MapPin } from "lucide-react";
import GoogleRating from "@/components/GoogleRating";
import { ContactButtons } from "@/components/ServiceBlocks";
import { Season, seasonContent } from "@/data/seasons";

const Hero = ({ season }: { season: Season }) => {
  const { hero } = seasonContent(season);

  return (
    <section className="relative overflow-hidden bg-primary px-4 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40 lg:px-16">
      <div className="absolute inset-0 lg:left-1/4">
        <img src={hero.image} alt={hero.alt} className="h-full w-full object-cover opacity-60 lg:opacity-90" />
        <div className="absolute inset-y-0 -left-1 right-0 bg-gradient-to-t from-primary via-primary/75 to-primary/50 lg:bg-gradient-to-r lg:from-primary lg:from-10% lg:via-primary/50 lg:to-transparent" />
      </div>
      <div className="container-narrow relative z-10">
        <p className="mb-3 font-heading text-xl font-bold text-accent md:text-2xl">Un nuisible chez vous ?</p>
        <h1 className="mb-4 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Votre entreprise <span className="whitespace-nowrap">anti-nuisibles</span> partout en{" "}
          <span className="whitespace-nowrap">Haute-Marne</span>
        </h1>
        <p className="mb-6 flex max-w-2xl items-start gap-2 font-heading text-lg font-semibold text-primary-foreground md:text-xl">
          <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
          Chaumont, Langres, Saint-Dizier, Joinville et tous les villages
        </p>
        <GoogleRating className="mb-6" />
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
          Rats, guêpes, cafards, punaises de lit, taupes ou pigeons : un artisan local vient chez vous, trouve le problème et vous dit le prix avant d'intervenir.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ContactButtons callLabel="Appeler le 07 65 25 67 92" contactLabel="Devis gratuit" />
        </div>
        <ul className="mt-8 grid gap-3 text-sm text-primary-foreground/90 sm:grid-cols-2 lg:max-w-2xl">
          <li className="flex items-center gap-2">
            <Clock className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            Joignable 7j/7, de 7h à 23h
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            Artisan local, basé en Haute-Marne
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            Titulaire du Certibiocide
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            Particuliers et professionnels
          </li>
        </ul>
        <p className="mt-8 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-xl bg-primary-foreground/10 px-4 py-3 text-sm text-primary-foreground">
          {hero.text}
          <Link to={hero.path} className="inline-flex items-center gap-1 font-semibold underline underline-offset-4 hover:text-accent">
            {hero.link}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Hero;
