import { ICurrencyResult } from "@/types/GetCurrencyTypes";
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
import { GetCurrency } from "@/components/GetCurrency/GetCurrency";

interface HomepageProps {
  className?: string;
  currency: ICurrencyResult;
}

export const Homepage: FC<HomepageProps> = (props) => {
  const { className, currency } = props;

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
      <GetCurrency currency={currency} />
    </>
  );
};
