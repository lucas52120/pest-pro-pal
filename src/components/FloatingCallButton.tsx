import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:0765256792"
      className="fixed bottom-4 right-4 z-40 flex w-max items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 shadow-lg shadow-accent/30 transition-all hover:bg-orange-hover hover:shadow-xl active:scale-95 md:bottom-6 md:right-6 md:px-6 md:py-4"
      aria-label="Appeler G&F Nuisibles Urgence 7j/7 au 07.65.25.67.92"
    >
      <Phone className="h-5 w-5 flex-shrink-0 text-accent-foreground md:h-6 md:w-6" />
      <div className="flex flex-col items-start leading-none">
        <span className="font-heading text-xs font-extrabold uppercase tracking-wide text-accent-foreground md:text-sm">
          Urgence 7j/7
        </span>
        <span className="font-heading text-base font-bold text-accent-foreground md:text-lg">
          07.65.25.67.92
        </span>
      </div>
    </a>
  );
};

export default FloatingCallButton;
