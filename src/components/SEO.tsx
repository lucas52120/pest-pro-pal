import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  /** Chemin de la page, ex: "/deratisation-chaumont". */
  path?: string;
  image?: string;
}

const SITE_URL = "https://gf-nuisibles.fr";

const SEO = ({ title, description, path, image = `${SITE_URL}/og-image.png` }: SEOProps) => {
  const url = path ? `${SITE_URL}${path}` : undefined;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {url && <link rel="canonical" href={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
