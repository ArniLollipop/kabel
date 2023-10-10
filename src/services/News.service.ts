/** @format */

import { useHttp } from "@/hooks/useHttp";
import { NextPageContext } from "next";
import { newsI, NewsResponseI } from "@/types/NewsTypes";

const enum endpoints {
	getNews = "/news/news/",
}

interface NewsServiceResponseI {
	getNews: () => Promise<newsI[]>;
	getNewsById: (id: string) => Promise<newsI>;
}

export const NewsService = (ctx?: NextPageContext): NewsServiceResponseI => {
	const getNews = async (): Promise<newsI[]> => {
		const res = await useHttp().get<NewsResponseI>(endpoints.getNews, {
			headers: {
				"Accept-Language": ctx?.locale || "ru",
			},
		});
		return res.data.results;
	};

	const getNewsById = async (id: string): Promise<newsI> => {
		const res = await useHttp().get<newsI>(`${endpoints.getNews}${id}/`, {
			headers: {
				"Accept-Language": ctx?.locale || "ru",
			},
		});
		return res.data;
	};

	return { getNews, getNewsById };
};
