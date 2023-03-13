import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface CategotyI {
  name: string;
  icon: string;
}

interface CategoryAnswI {
  count: 3;
  next: null | string;
  previous: null | string;
  results: CategotyI[];
}

export const fetchProductsApi = createApi({
  reducerPath: "fetchProductsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://kazkabel-back.zoom-app.kz",
  }),

  endpoints: (build) => ({
    getProductsCategory: build.query<CategoryAnswI, string>({
      query: () => `/products/categories/`,
    }),
  }),
});

export const { useGetProductsCategoryQuery } = fetchProductsApi;
