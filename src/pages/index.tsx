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

export default function Home() {
  const [items, setItems] = useState();

  async function getters() {
    const offers = await OfferService().getOffers();
    const aboutInfo = await AboutService().getAboutInfo();
    const categories = await ProductService().getCategories();
    const sertificates = await SertificateService().getSertificate();
    const adventages = await AdventagesService().getAdventages();
    const news = await NewsService().getNews();
    const currencyRes = await GetCurrencyService().getCurrency();
    const metalRes = await GetCurrencyService().getMetal();

    setItems({
      categories: categories.results,
      aboutInfo,
      sertificates,
      adventages,
      news,
      offers,
      currencyRes,
      metalRes,
    });
  }

  useEffect(() => {
    getters();
  }, []);

  return (
    <MainLayout activePage={ActiveHeaderPage.MAIN}>
      <Homepage {...items} />
    </MainLayout>
  );
}

// export async function getServerSideProps() {
//     const offers = await OfferService().getOffers();
//     const aboutInfo = await AboutService().getAboutInfo();
//     const categories = await ProductService().getCategories();
//     const sertificates = await SertificateService().getSertificate();
//     const adventages = await AdventagesService().getAdventages();
//     const news = await NewsService().getNews();
//     const currencyRes = await GetCurrencyService().getCurrency();
//     const metalRes = await GetCurrencyService().getMetal();
//   return {
//     props: {
//       categories: categories.results,
//       aboutInfo,
//       sertificates,
//       adventages,
//       news,
//       offers,
//       currencyRes,
//       metalRes,
//     },
//   };
// }
