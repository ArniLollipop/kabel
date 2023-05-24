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
import { useHttp } from "@/hooks/useHttp";

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
  let products;

  if (nookies.get(ctx).queries) {
    let fromCookie;
    fromCookie = JSON.parse(nookies.get(ctx).queries);

    let subcategoryQuery = "?";
    let sectionQuery = "";
    let core_numberQuery = "";
    let orderingQuery = "";
    let availabilityQuery = "";

    if (fromCookie.subcategory.length > 0) {
      fromCookie.subcategory.forEach((el: any) => {
        subcategoryQuery += `&subcategory=${el}`;
      });
    } else {
      subcategoryQuery = "?";
    }

    if (fromCookie.section.length > 0) {
      fromCookie.section.forEach((el: any) => {
        sectionQuery += `&section=${el}`;
      });
    } else {
      sectionQuery = "";
    }

    if (fromCookie.core_number.length > 0) {
      fromCookie.core_number.forEach((el: any) => {
        core_numberQuery += `&core_number=${el}`;
      });
    } else {
      core_numberQuery = "";
    }

    if (fromCookie.ordering.length > 0) {
      orderingQuery += `&ordering=${fromCookie.ordering}`;
    } else {
      orderingQuery = "";
    }

    if (fromCookie.availability.length > 0) {
      availabilityQuery += `&availability=${fromCookie.availability}`;
    } else {
      availabilityQuery = "";
    }

    const res = await useHttp(ctx).get(
      "/products/products/" +
        subcategoryQuery +
        sectionQuery +
        core_numberQuery +
        orderingQuery +
        availabilityQuery
    );
    products = res.data;
  } else {
    const res = await useHttp(ctx).get("/products/products/");
    products = res.data;
  }

  const categories = await ProductService().getCategories();
  const cores = await ProductService().getCores();

  return {
    props: { products, categories, cores },
  };
}
