import { productAnswI, categoriesAnswI } from "@/types/ProductTypes";
import { useHttp } from "@/hooks/useHttp";
import { AxiosResponse } from "axios";
import { NextPageContext } from "next";

const baseUrl = "https://kazkabel-back.zoom-app.kz";

const enum endpoints {
  getCategories = "/products/categories/",
  getCategoriesByName = "/products/categories/",
  getCoreNumbers = "/products/core_numbers/",
  getProducts = "/products/products/",
  getProductsByCode = "/products/products/",
}

interface ProductServiceResponseI {
  getProducts: () => Promise<ProductServiceResponseI>;
  getCategories: () => Promise<categoriesAnswI>;
}

export const ProductService = (ctx?: NextPageContext): ProductServiceResponseI => {
  const getProducts = async (): Promise<ProductServiceResponseI> => {
    const res = await useHttp(ctx).get(endpoints.getProducts);
    return res.data;
  };

  const getCategories = async (): Promise<categoriesAnswI> => {
    const res = await useHttp(ctx).get(endpoints.getCategories);
    return res.data;
  };

  return { getProducts, getCategories };
};
