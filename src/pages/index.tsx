import { ActiveHeaderPage } from "@/components/header/Header";
import { Homepage } from "@/layouts/homepage/Homepage";
import { MainLayout } from "@/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout activePage={ActiveHeaderPage.MAIN}>
      <Homepage />
    </MainLayout>
  );
}
