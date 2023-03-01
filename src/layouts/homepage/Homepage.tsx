import { FC } from "react";
import {
  OfferSection,
  AboutSection,
  ProductsSection,
  AdvantagesSection,
  ServicesSection,
  NewsSection,
  SertificatesSection,
  SpeciallySection,
} from "./sections";

interface HomepageProps {
  className?: string;
}

export const Homepage: FC<HomepageProps> = (props) => {
  const { className } = props;

  return (
    <>
      <OfferSection />
      <AboutSection />
      <ProductsSection />
      <SpeciallySection />
      <AdvantagesSection />
      <ServicesSection />
      <SertificatesSection />
      <NewsSection />
    </>
  );
};
