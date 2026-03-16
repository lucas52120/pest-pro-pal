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

  if (!cityData.services.includes(serviceData.slug)) {
    return <NotFound />;
  }

  const content = serviceData.getContent(cityData.name, cityData.department, cityData.variation);
  const IconComponent = serviceData.icon;

  return (
    <CityServicePage
      city={cityData.name}
      department={cityData.department}
      serviceTitle={content.seoTitle}
      icon={<IconComponent className="h-8 w-8" />}
      heroImage={serviceData.heroImage}
      metaDescription={content.metaDescription}
      intro={content.intro}
      expertise={content.expertise}
      method={content.method}
      cta={content.cta}
      serviceCallTitle={content.serviceCallTitle}
      serviceCallSubtitle={content.serviceCallSubtitle}
    />
  );
};

export default CityService;
