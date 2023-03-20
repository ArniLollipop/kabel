import { productAnswI, categoriesAnswI, coresI, coresAnswI } from "@/types/ProductTypes";
import { useHttp } from "@/hooks/useHttp";
import { AxiosResponse } from "axios";
import { NextPageContext } from "next";

const enum endpoints {
  getCategories = "/products/categories/",
  getCores = "/products/cores_sections/",
  getProducts = "/products/products/",
}

interface ProductServiceResponseI {
  getProducts: (queries?: string) => Promise<productAnswI>;
  getCategories: () => Promise<categoriesAnswI>;
  getCores: () => Promise<coresI>;
}

export const ProductService = (ctx?: NextPageContext): ProductServiceResponseI => {
  const getProducts = async (queries?: string): Promise<productAnswI> => {
    const params = queries ? queries : "";
    const res = await useHttp(ctx).get<productAnswI>(endpoints.getProducts + params);
    return res.data;
  };

  const getCategories = async (): Promise<categoriesAnswI> => {
    const res = await useHttp(ctx).get<categoriesAnswI>(endpoints.getCategories);
    return res.data;
  };

  const getCores = async (): Promise<coresI> => {
    const res = await useHttp(ctx).get<coresAnswI>(endpoints.getCores);
    return res.data.result;
  };

  return { getProducts, getCategories, getCores };
};
