import { FC, useState } from "react";
import { CatalogItemPage } from "@/layouts/CatalogPage/sections/CatalogItemPage";
import { MainLayout } from "@/layouts/MainLayout";
import { ActiveHeaderPage } from "@/components/header/Header";
import { SeeMoreSlider } from "@/components/SeeMoreSlider/SeeMoreSlider";
import cls from "./index.module.scss";

export default function item() {
  return (
    <MainLayout activePage={ActiveHeaderPage.CATALOG}>
      <div className={cls.cardItem}>
        <div className={cls.cardItem_wrapper}>
          <CatalogItemPage />

          <div className={cls.slider}>
            <h3 className={cls.slider_title}>СМОТРИТЕ ТАКЖЕ</h3>
            <SeeMoreSlider />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
