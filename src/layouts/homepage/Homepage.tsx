import { FC, useEffect, useState } from 'react';
import {
  OfferSection,
  AboutSection,
  ProductsSection,
  AdvantagesSection,
  ServicesSection,
  NewsSection,
  SertificatesSection,
  SpeciallySection,
} from './sections';
import { GetCurrency } from '@/components/GetCurrency/GetCurrency';
import { HomeProps } from '@/pages';

export const Homepage: FC<HomeProps> = (props) => {
  const { metalRes, aboutInfo, categories, sertificates, adventages, news, offers, currencyRes } =
    props;

  return (
    <>
      <OfferSection offers={offers} />
      <AboutSection aboutInfo={aboutInfo} />
      <ProductsSection categories={categories} />
      <SpeciallySection news={news} />
      <AdvantagesSection adventages={adventages} />
      <ServicesSection />
      <SertificatesSection sertificates={sertificates} />
      <NewsSection news={news} />
      <GetCurrency currency={currencyRes} metalRes={metalRes} />
    </>
  );
};
