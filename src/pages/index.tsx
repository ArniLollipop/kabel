import { ActiveHeaderPage } from "@/components/header/Header";
import { useAppDispatch } from "@/hooks/store";
import { Homepage } from "@/layouts/homepage/Homepage";
import { MainLayout } from "@/layouts/MainLayout";
import { AboutService } from "@/services/About.service";
import { GetCurrencyService } from "@/services/GetCurrency";
import { ProductService } from "@/services/Product.servise";
import { SertificateService } from "@/services/Sertificate.service";
import { AboutI } from "@/types/AboutTypes";
import { ICurrencyResult } from "@/types/GetCurrencyTypes";
import { categoryI } from "@/types/ProductTypes";
import { sertificateI } from "@/types/SertificateTypes";
import { AdventagesService } from "@/services/Adventages.servise";
import { adventagesI } from "@/types/AdventagesTypes";
import { NewsService } from "@/services/News.service";
import { newsI } from "@/types/NewsTypes";
import { OfferService } from "@/services/Offer.service";
import { offerI } from "@/types/OfferTypes";

export interface HomeProps {
  offers: offerI[];
  currency: ICurrencyResult;
  aboutInfo: AboutI;
  categories: categoryI[];
  sertificates: sertificateI[];
  adventages: adventagesI[];
  news: newsI[];
}

export default function Home(props: HomeProps) {
  return (
    <MainLayout activePage={ActiveHeaderPage.MAIN}>
      <Homepage {...props} />
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const offers = await OfferService().getOffers();
  const currency = await GetCurrencyService().getCurrency();
  const aboutInfo = await AboutService().getAboutInfo();
  const categories = await ProductService().getCategories();
  const sertificates = await SertificateService().getSertificate();
  const adventages = await AdventagesService().getAdventages();
  const news = await NewsService().getNews();

  return {
    props: {
      currency: currency.result,
      categories: categories.results,
      aboutInfo,
      sertificates,
      adventages,
      news,
      offers,
    },
  };
}
