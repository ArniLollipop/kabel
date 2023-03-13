import { productAnswI } from "@/types/ProductTypes";
import { useHttp } from "@/hooks/useHttp";
import { AxiosResponse } from "axios";

const baseUrl = "https://kazkabel-back.zoom-app.kz";

const enum endpoints {
  getCategories = "/products/categories/",
  getCategoriesByName = "/products/categories/",
  getCoreNumbers = "/products/core_numbers/",
  getProducts = "/products/products/",
  getProductsByCode = "/products/products/",
}

interface ProductServiceResponseI {
  getProducts: () => Promise<AxiosResponse<ProductServiceResponseI>>;
}

export const ProductService = (): ProductServiceResponseI => {
  const getProducts = async (): Promise<AxiosResponse<ProductServiceResponseI>> => {
    const res = await useHttp().get(`${baseUrl}${endpoints.getProducts}`);
    return res;
  };

  return { getProducts };
};
