import { ActiveHeaderPage } from "@/components/header/Header";
import { CradPage } from "@/layouts/CardPage/CradPage";
import { MainLayout } from "@/layouts/MainLayout";

export default function Card() {
  return (
    <MainLayout activePage={ActiveHeaderPage.CARD}>
      <CradPage />
    </MainLayout>
  );
}
