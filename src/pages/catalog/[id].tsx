import { FC, useState } from "react";
import { CatalogItemPage } from "@/layouts/CatalogPage/sections/CatalogItemPage";
import { MainLayout } from "@/layouts/MainLayout";
import { ActiveHeaderPage } from "@/components/header/Header";
import { SeeMoreSlider } from "@/components/SeeMoreSlider/SeeMoreSlider";
import cls from "./index.module.scss";
import { NextPageContext } from "next";
import { ProductService } from "@/services/Product.servise";
import { productI } from "@/types/ProductTypes";

import { useTranslation } from "next-i18next";

export default function item(props: productI) {
  const { t } = useTranslation();

  return (
    <MainLayout activePage={ActiveHeaderPage.CATALOG}>
      <div className={cls.cardItem}>
        <div className={cls.cardItem_wrapper}>
          <CatalogItemPage {...props} />

          <div className={cls.slider}>
            <h3 className={cls.slider_title}>{t("watch")}</h3>
            <SeeMoreSlider slides={props.recommended_products} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps(ctx: NextPageContext) {
  const { id } = ctx.query;
  const prodId = typeof id === "string" ? id : Array.isArray(id) ? id[0] : "";
  const product = await ProductService().getProductById(prodId);

  return {
    props: product,
  };
}
