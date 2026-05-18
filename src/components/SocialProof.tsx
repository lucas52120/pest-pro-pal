const clients = [
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

const SocialProof = () => {
  const loop = [...clients, ...clients];

  return (
    <section className="border-y border-border bg-secondary/30 py-12 md:py-16">
      <div className="container-narrow px-4">
        <h2 className="mb-8 text-center font-heading text-xl font-semibold tracking-wide text-muted-foreground md:text-2xl">
          Ils nous ont fait confiance
        </h2>
      </div>

      <div
        className="group relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-12 md:gap-16">
          {loop.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-12 shrink-0 items-center justify-center px-4 font-heading text-lg font-bold uppercase tracking-wider text-primary opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-14 md:text-xl"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;