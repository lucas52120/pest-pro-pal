import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

/* ─── Prerender SEO Plugin ─── */
function prerenderSeoPlugin(): Plugin {
  return {
    name: "prerender-seo-meta",
    apply: "build",
    closeBundle: async () => {
      const distDir = path.resolve(__dirname, "dist");
      if (!fs.existsSync(path.join(distDir, "index.html"))) return;
      const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

      const deptPrep: Record<string, string> = {
        "52": "en Haute-Marne 52",
        "10": "dans l'Aube 10",
        "21": "en Côte-d'Or 21",
        "51": "dans la Marne 51",
        "88": "dans les Vosges 88",
        "54": "en Meurthe-et-Moselle 54",
      };

      const ALL = ["guepes-frelons","desinsectisation","deratisation","depigeonnisation","elimination-pigeons","taupes"];

      const cities = [
        { name: "Chaumont", slug: "chaumont", dc: "52", svcs: ALL, v: 0 },
        { name: "Langres", slug: "langres", dc: "52", svcs: ALL, v: 1 },
        { name: "Nogent", slug: "nogent", dc: "52", svcs: ALL, v: 2 },
        { name: "Bar-sur-Aube", slug: "bar-sur-aube", dc: "10", svcs: ALL, v: 3 },
        { name: "Joinville", slug: "joinville", dc: "52", svcs: ALL, v: 0 },
        { name: "Saint-Dizier", slug: "saint-dizier", dc: "52", svcs: ALL, v: 1 },
        { name: "Wassy", slug: "wassy", dc: "52", svcs: ALL, v: 2 },
        { name: "Bourbonne-les-Bains", slug: "bourbonne-les-bains", dc: "52", svcs: ALL, v: 3 },
        { name: "Bologne", slug: "bologne", dc: "52", svcs: ALL, v: 0 },
        { name: "Montier-en-Der", slug: "montier-en-der", dc: "52", svcs: ALL, v: 1 },
        { name: "Chalindrey", slug: "chalindrey", dc: "52", svcs: ALL, v: 2 },
        { name: "Froncles", slug: "froncles", dc: "52", svcs: ALL, v: 3 },
        { name: "Châteauvillain", slug: "chateauvillain", dc: "52", svcs: ALL, v: 0 },
        { name: "Vitry-le-François", slug: "vitry-le-francois", dc: "51", svcs: ["depigeonnisation","desinsectisation","elimination-pigeons"], v: 2 },
        { name: "Châlons-en-Champagne", slug: "chalons-en-champagne", dc: "51", svcs: ["depigeonnisation","elimination-pigeons","deratisation"], v: 3 },
        { name: "Vittel", slug: "vittel", dc: "88", svcs: ["depigeonnisation","desinsectisation","elimination-pigeons","deratisation"], v: 0 },
        { name: "Neufchâteau", slug: "neufchateau", dc: "88", svcs: ["depigeonnisation","desinsectisation","elimination-pigeons","deratisation"], v: 1 },
        { name: "Troyes", slug: "troyes", dc: "10", svcs: ["depigeonnisation","elimination-pigeons","deratisation"], v: 2 },
        { name: "Dijon", slug: "dijon", dc: "21", svcs: ["depigeonnisation","elimination-pigeons","deratisation"], v: 3 },
        { name: "Beaune", slug: "beaune", dc: "21", svcs: ["depigeonnisation","elimination-pigeons","deratisation"], v: 0 },
        { name: "Châtillon-sur-Seine", slug: "chatillon-sur-seine", dc: "21", svcs: ["depigeonnisation","elimination-pigeons","deratisation"], v: 1 },
        { name: "Nancy", slug: "nancy", dc: "54", svcs: ["depigeonnisation","elimination-pigeons","deratisation"], v: 2 },
      ];

      const svcTitles: Record<string, string> = {
        "guepes-frelons": "Guêpes & Frelons",
        "desinsectisation": "Désinsectisation",
        "deratisation": "Dératisation",
        "depigeonnisation": "Dépigeonnisation",
        "elimination-pigeons": "Élimination Pigeons",
        "taupes": "Taupier",
      };

      const svcDescs: Record<string, string[]> = {
        "guepes-frelons": [
          "G&F Nuisibles : intervention 7j/7, diagnostic gratuit, expertise certifiée.",
          "Votre expert en élimination de nids. Devis sans engagement, intervention sous 24h.",
          "Appelez G&F Nuisibles : expertise certifiée, solutions durables, devis gratuit.",
          "G&F Nuisibles : diagnostic gratuit, intervention sécurisée 7j/7. Solutions durables garanties.",
        ],
        "desinsectisation": [
          "G&F Nuisibles : intervention rapide 7j/7, devis gratuit, expertise certifiée.",
          "Diagnostic gratuit, discrétion totale, solutions durables.",
          "Contactez G&F Nuisibles pour une intervention rapide. Expertise certifiée, devis sans engagement.",
          "G&F Nuisibles intervient sous 24h. Devis gratuit, discrétion assurée.",
        ],
        "deratisation": [
          "G&F Nuisibles, dératiseur professionnel : intervention rapide 7j/7, diagnostic gratuit.",
          "Devis sans engagement, solutions durables.",
          "G&F Nuisibles : intervention discrète sous 24h, diagnostic gratuit. Expertise professionnelle certifiée.",
          "G&F Nuisibles élimine rats et souris. Devis gratuit, intervention rapide, résultats garantis.",
        ],
        "depigeonnisation": [
          "Contactez G&F Nuisibles : devis gratuit, expertise certifiée.",
          "G&F Nuisibles installe des systèmes de répulsion durables. Intervention rapide 7j/7, devis gratuit.",
          "G&F Nuisibles, votre expert en dépigeonnisation. Diagnostic gratuit, solutions durables.",
          "G&F Nuisibles : expertise certifiée en dépigeonnisation. Devis sans engagement, intervention rapide.",
        ],
        "elimination-pigeons": [
          "G&F Nuisibles intervient chez les particuliers. Diagnostic gratuit, intervention discrète 7j/7.",
          "Contactez G&F Nuisibles, devis sans engagement.",
          "G&F Nuisibles : intervention rapide et discrète chez les particuliers. Devis gratuit, solutions durables.",
          "G&F Nuisibles intervient sous 24h. Diagnostic gratuit, expertise professionnelle.",
        ],
        "taupes": [
          "G&F Nuisibles, taupier professionnel : intervention rapide 7j/7, devis gratuit, méthode écologique.",
          "Diagnostic gratuit, piégeage mécanique professionnel.",
          "G&F Nuisibles : piégeage écologique sans produit chimique. Expertise certifiée, intervention sous 48h.",
          "G&F Nuisibles intervient avec des pièges mécaniques professionnels. Devis gratuit, résultats garantis.",
        ],
      };

      const svcPrefixes: Record<string, string[]> = {
        "guepes-frelons": [
          "Destruction nids de guêpes et frelons à",
          "Nid de guêpes ou frelons à",
          "Élimination professionnelle de nids de guêpes à",
          "Enlèvement de nids de frelons à",
        ],
        "desinsectisation": [
          "Traitement punaises de lit et blattes à",
          "Invasion d'insectes à",
          "Extermination d'insectes rampants à",
          "Traitement professionnel punaises de lit et cafards à",
        ],
        "deratisation": [
          "Extermination de rats et souris à",
          "Problème de rats ou rongeurs à",
          "Stop aux rats à",
          "Dératiseur professionnel à",
        ],
        "depigeonnisation": [
          "Problème de pigeons à",
          "Dégâts causés par les pigeons à",
          "Installation de picots et filets anti-pigeons à",
          "Pose de filets anti-pigeons à",
        ],
        "elimination-pigeons": [
          "Besoin d'éliminer des pigeons à",
          "Dégâts causés par les pigeons chez vous à",
          "Lutte contre les pigeons à",
          "Service pour vous débarrasser des pigeons à",
        ],
        "taupes": [
          "Piégeage de taupes à",
          "Stop aux taupinières à",
          "Taupier professionnel à",
          "Régulation de taupes à",
        ],
      };

      let count = 0;
      for (const c of cities) {
        for (const svc of c.svcs) {
          const dp = deptPrep[c.dc];
          const title = `${svcTitles[svc]} à ${c.name} ${dp} | G&F Nuisibles`;
          const v = c.v % 4;
          const descParts = svcDescs[svc];
          const prefixes = svcPrefixes[svc];
          const connector = v === 1 ? " ? G&F Nuisibles, votre expert " : ` ${dp}. `;
          const desc = v === 1
            ? `${prefixes[v]} ${c.name} ? G&F Nuisibles, ${descParts[v].replace("Votre expert", "votre expert")}`
            : `${prefixes[v]} ${c.name} ${dp}. ${descParts[v]}`;

          let html = template;
          html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
          html = html.replace(
            /(<meta name="description" content=")[^"]*(")/,
            `$1${desc}$2`
          );
          html = html.replace(
            /(<meta property="og:title" content=")[^"]*(")/,
            `$1${title}$2`
          );
          html = html.replace(
            /(<meta name="twitter:title" content=")[^"]*(")/,
            `$1${title}$2`
          );
          html = html.replace(
            /(<meta property="og:description" content=")[^"]*(")/,
            `$1${desc}$2`
          );
          html = html.replace(
            /(<meta name="twitter:description" content=")[^"]*(")/,
            `$1${desc}$2`
          );

          const dir = path.join(distDir, c.slug, svc);
          fs.mkdirSync(dir, { recursive: true });
          fs.writeFileSync(path.join(dir, "index.html"), html);
          count++;
        }
      }
      console.log(`✅ SEO: prerendered ${count} city/service HTML files with static meta tags`);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    prerenderSeoPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
