import { useEffect, useState } from "react";
import { ActiveHeaderPage } from "@/components/header/Header";
import { CatalogPage } from "@/layouts/CatalogPage/CatalogPage";
import { MainLayout } from "@/layouts/MainLayout";
import { ProductService } from "@/services/Product.servise";
import { productAnswI } from "@/types/ProductTypes";
import { useAppDispatch } from "@/hooks/store";
import { setProducts } from "@/store/slices/ProductSlice";
import { NextPageContext } from "next/types";

export default function Card(props: productAnswI) {
  const dispatch = useAppDispatch();

  return (
    <MainLayout activePage={ActiveHeaderPage.CATALOG}>
      <CatalogPage />
    </MainLayout>
  );
}

export async function getServerSideProps(ctx: NextPageContext) {
  const res = await ProductService().getProducts();

  return {
    props: res,
  };
}
