import { productAnswI } from "@/types/ProductTypes";
import { useHttp } from "@/hooks/useHttp";
import { AxiosResponse } from "axios";
import { NextPageContext } from "next";
import { newsI, NewsResponseI } from "@/types/NewsTypes";

const enum endpoints {
  getNews = "/news/news/",
}

interface NewsServiceResponseI {
  getNews: () => Promise<AxiosResponse<NewsResponseI>>;
  getNewsById: (id: string) => Promise<AxiosResponse<newsI>>;
}

export const NewsService = (ctx?: NextPageContext): NewsServiceResponseI => {
  const getNews = async (): Promise<AxiosResponse<NewsResponseI>> => {
    const res = await useHttp().get(endpoints.getNews);
    return res.data;
  };

  const getNewsById = async (id: string): Promise<AxiosResponse<newsI>> => {
    const res = await useHttp().get(`${endpoints.getNews}${id}/`);
    return res.data;
  };

  return { getNews, getNewsById };
};
