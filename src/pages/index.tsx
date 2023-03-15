import { ActiveHeaderPage } from '@/components/header/Header';
import { useAppDispatch } from '@/hooks/store';
import { Homepage } from '@/layouts/homepage/Homepage';
import { MainLayout } from '@/layouts/MainLayout';
import { GetCurrencyService } from '@/services/GetCurrency';
import { ProductService } from '@/services/Product.servise';
import { ICurrencyResponse } from '@/types/GetCurrencyTypes';

export default function Home(res: ICurrencyResponse) {
  const { result: currency } = res;

  const handler = async () => {
    const res = await ProductService().getProducts();
    console.log(res);
  };
  return (
    <MainLayout activePage={ActiveHeaderPage.MAIN}>
      <Homepage currency={currency} />
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const res = await GetCurrencyService().getCurrency();
  return {
    props: res,
  };
}
