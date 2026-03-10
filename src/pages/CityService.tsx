import { useParams } from "react-router-dom";
import CityServicePage from "@/components/CityServicePage";
import { cities, serviceDefinitions } from "@/data/cityServices";
import NotFound from "@/pages/NotFound";

const CityService = () => {
  const { city, service } = useParams<{ city: string; service: string }>();

  const cityData = cities.find((c) => c.slug === city);
  const serviceData = serviceDefinitions.find((s) => s.slug === service);

  if (!cityData || !serviceData) {
    return <NotFound />;
  }

  const content = serviceData.getContent(cityData.name);
  const IconComponent = serviceData.icon;

  return (
    <CityServicePage
      city={cityData.name}
      department="Haute-Marne (52)"
      serviceTitle={serviceData.title}
      icon={<IconComponent className="h-8 w-8" />}
      heroImage={serviceData.heroImage}
      metaDescription={content.metaDescription}
      intro={content.intro}
      expertise={content.expertise}
      method={content.method}
      cta={content.cta}
    />
  );
};

export default CityService;
