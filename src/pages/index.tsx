import { ActiveHeaderPage } from "@/components/header/Header";
import { useAppDispatch } from "@/hooks/store";
import { Homepage } from "@/layouts/homepage/Homepage";
import { MainLayout } from "@/layouts/MainLayout";
import { ProductService } from "@/services/Product.servise";

export default function Home() {
  const handler = async () => {
    const res = await ProductService().getProducts();
    console.log(res);
  };
  return (
    <MainLayout activePage={ActiveHeaderPage.MAIN}>
      <Homepage />
    </MainLayout>
  );
}
