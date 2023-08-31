/** @format */

import { ActiveHeaderPage } from "@/components/header/Header";
import { Homepage } from "@/layouts/homepage/Homepage";
import { MainLayout } from "@/layouts/MainLayout";
// Types
import { AboutI } from "@/types/AboutTypes";
import { categoryI } from "@/types/ProductTypes";
import { sertificateI } from "@/types/SertificateTypes";
import { newsI } from "@/types/NewsTypes";
import { offerI } from "@/types/OfferTypes";
import { ICurrencyResponse, IMetalResponse } from "@/types/GetCurrencyTypes";
import { ICurrencyResult } from "@/types/GetCurrencyTypes";
import { adventagesI } from "@/types/AdventagesTypes";

// Services
import { AdventagesService } from "@/services/Adventages.servise";
import { NewsService } from "@/services/News.service";
import { OfferService } from "@/services/Offer.service";
import { GetCurrencyService } from "@/services/GetCurrency";
import { SertificateService } from "@/services/Sertificate.service";
import { AboutService } from "@/services/About.service";
import { ProductService } from "@/services/Product.servise";
import { useEffect, useState } from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

export interface HomeProps {
  offers: offerI[];
  currency: ICurrencyResult;
  aboutInfo: AboutI;
  categories: categoryI[];
  sertificates: sertificateI[];
  adventages: adventagesI[];
  news: newsI[];
  currencyRes: ICurrencyResult;
  metalRes: IMetalResponse;
}

export default function Home(props: HomeProps) {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <MainLayout activePage={ActiveHeaderPage.MAIN}>
      <Head>
        <title>{t("title_index")}</title>
        <meta name='description' content={t("description_index") as string} />
        <meta property='og:title' content={t("title_index") as string} />
        <meta
          property='og:url'
          content={"https://cable.kz" + router.pathname}
        />
        {/* <meta
            property='og:image'
            content={
              "https://cable.kz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImageDelivery.675cc87e.png&w=640&q=75"
            }
          /> */}
      </Head>
      {props ? (
        <Homepage {...props} />
      ) : (
        <div className='flex items-center !justify-center w-full h-[100vh]'>
          <div className='loading'></div>
        </div>
      )}
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const offers = await OfferService().getOffers();
  const aboutInfo = await AboutService().getAboutInfo();
  const categories = await ProductService().getCategories();
  const sertificates = await SertificateService().getSertificate();
  const adventages = await AdventagesService().getAdventages();
  const news = await NewsService().getNews();
  const currencyRes = await GetCurrencyService().getCurrency();
  const metalRes = await GetCurrencyService().getMetal();
  return {
    props: {
      offers,
      aboutInfo,
      categories,
      sertificates,
      adventages,
      news,
      currencyRes,
      metalRes,
    },
  };
}
