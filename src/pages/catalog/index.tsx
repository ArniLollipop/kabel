import { useEffect, useState } from "react";
import { ActiveHeaderPage } from "@/components/header/Header";
import { CatalogPage } from "@/layouts/CatalogPage/CatalogPage";
import { MainLayout } from "@/layouts/MainLayout";
import { ProductService } from "@/services/Product.servise";
import { categoriesAnswI, coresI, productAnswI } from "@/types/ProductTypes";
import { useAppDispatch } from "@/hooks/store";
import {
  setProducts,
  setCategories,
  setCores,
  setPage,
} from "@/store/slices/ProductSlice";
import { NextPageContext } from "next/types";
import nookies from "nookies";
import { parseCookies, setCookie, destroyCookie } from "nookies";

interface CardProps {
  products: productAnswI;
  categories: categoriesAnswI;
  cores: coresI;
}

export default function Card(props: CardProps) {
  const { categories, products, cores } = props;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProducts(products));
    dispatch(setPage(products.count_pages));
    dispatch(setCategories(categories));
    dispatch(setCores(cores));
  }, [products, categories, cores]);

  return (
    <MainLayout activePage={ActiveHeaderPage.CATALOG}>
      <CatalogPage />
    </MainLayout>
  );
}

export async function getServerSideProps(ctx: NextPageContext) {
  const products = await ProductService().getProducts();
  const categories = await ProductService().getCategories();
  const cores = await ProductService().getCores();

  return {
    props: { products, categories, cores },
  };
}
