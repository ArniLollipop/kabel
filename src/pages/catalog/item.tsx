import { FC } from "react";
import { CatalogItemPage } from "@/layouts/CatalogPage/sections/CatalogItemPage";
import { MainLayout } from "@/layouts/MainLayout";

export default function item() {
  return (
    <MainLayout>
      <CatalogItemPage />
    </MainLayout>
  );
}
