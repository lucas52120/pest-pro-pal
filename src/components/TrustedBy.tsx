const logos = [
  "Veolia",
  "SNCF",
  "GHM",
  "Vinci",
  "Transalliance",
  "Vingeanne",
  "Ville de Chaumont",
  "OPH Saint-Dizier",
  "Chaumont Habitat",
  "Ville de Saint-Dizier",
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
        <div className="flex w-max animate-marquee gap-12 md:gap-20 group-hover:[animation-play-state:paused]">
          {loop.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-16 w-32 shrink-0 items-center justify-center rounded-md border border-border bg-card px-4 text-center font-heading text-sm font-semibold text-primary opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-20 md:w-40 md:text-base"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;