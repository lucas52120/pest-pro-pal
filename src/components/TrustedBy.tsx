import veolia from "@/assets/logos/veolia.svg";
import sncf from "@/assets/logos/sncf.svg";
import ghm from "@/assets/logos/ghm.png";
import vinci from "@/assets/logos/vinci.svg";
import transalliance from "@/assets/logos/transalliance.svg";
import villeChaumont from "@/assets/logos/ville-chaumont.svg";
import ophSaintDizier from "@/assets/logos/oph-saint-dizier.png";
import villeSaintDizier from "@/assets/logos/ville-saint-dizier.svg";
import agglo from "@/assets/logos/agglo.svg";
import lisi from "@/assets/logos/lisi.svg";

const logos = [
  { name: "Veolia", src: veolia },
  { name: "SNCF", src: sncf },
  { name: "GHM", src: ghm },
  { name: "Vinci", src: vinci },
  { name: "Transalliance", src: transalliance },
  { name: "Ville de Chaumont", src: villeChaumont },
  { name: "OPH Saint-Dizier", src: ophSaintDizier },
  { name: "Ville de Saint-Dizier", src: villeSaintDizier },
  { name: "Agglomération", src: agglo },
  { name: "LISI", src: lisi },
];

const TrustedBy = () => {
  const loop = [...logos, ...logos];

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container-narrow mb-10 px-4 text-center">
        <h2 className="font-heading text-2xl font-semibold text-primary md:text-3xl">
          Ils nous ont fait confiance
        </h2>
        <div className="mx-auto mt-3 h-0.5 w-16 bg-accent" />
      </div>

      <div
        className="group relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-12 md:gap-20 group-hover:[animation-play-state:paused]">
          {loop.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex h-16 w-32 shrink-0 items-center justify-center px-2 md:h-20 md:w-40"
            >
              <img
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                className="max-h-full max-w-full object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;