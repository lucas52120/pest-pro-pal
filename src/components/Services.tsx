import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Season, seasonContent } from "@/data/seasons";

/** Service cards, the ones in season first. */
const Services = ({ season }: { season: Season }) => {
  const { services, current } = seasonContent(season);

  return (
    <section id="services" className="section-padding scroll-mt-20 bg-secondary">
      <div className="container-narrow">
        <h2 className="font-heading text-3xl font-extrabold text-primary md:text-4xl">Quel est votre problème ?</h2>
        <span className="mb-6 mt-4 block h-1 w-14 rounded-full bg-accent" aria-hidden="true" />
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Dératisation, désinsectisation, dépigeonnage ou piégeage : choisissez, et voyez tout de suite comment ça se passe.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <li key={service.path}>
              <Link
                to={service.path}
                className="group flex h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg sm:flex-col"
              >
                <div className="relative w-28 shrink-0 sm:h-48 sm:w-full">
                  <img
                    src={service.image}
                    alt={service.alt}
                    width={640}
                    height={420}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {i < current && (
                    <span className="absolute left-2 top-2 rounded-full bg-accent px-2 py-1 font-heading text-[0.6875rem] font-bold text-accent-foreground sm:left-3 sm:top-3 sm:px-3 sm:text-xs">
                      En ce moment
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h3 className="mb-1 font-heading text-lg font-bold text-primary sm:mb-2 sm:text-xl">{service.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">{service.text}</p>
                  <span className="mt-3 inline-flex items-center gap-1 font-heading text-sm font-semibold text-primary group-hover:text-accent">
                    {service.link}
                    <ArrowRight className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
