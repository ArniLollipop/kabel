/** @format */

import {
	productAnswI,
	categoriesAnswI,
	coresI,
	coresAnswI,
	productI,
	categoryI,
} from "@/types/ProductTypes";
import { useHttp } from "@/hooks/useHttp";
import { AxiosResponse } from "axios";
import { NextPageContext } from "next";
import nookies from "nookies";

const enum endpoints {
	getCategories = "/products/categories/",
	getCores = "/products/cores_sections/",
	getProducts = "/products/products/",
}

interface ProductServiceResponseI {
	getProducts: (queries?: string) => Promise<productAnswI>;
	getProductById: (id: string) => Promise<productI>;
	getCategories: () => Promise<categoriesAnswI>;
	getCores: () => Promise<coresI>;
}

export const ProductService = (
	ctx?: NextPageContext
): ProductServiceResponseI => {
	const getProducts = async (queries: any): Promise<productAnswI> => {
		let fromCookie;

		if (nookies.get(ctx).queries) {
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

			const res = await useHttp(ctx).get<productAnswI>(
				endpoints.getProducts +
					subcategoryQuery +
					sectionQuery +
					core_numberQuery +
					orderingQuery +
					availabilityQuery,
				{
					headers: {
						"Accept-Language": ctx?.locale || "ru",
					},
				}
			);
			console.log("первый");

			return res.data;
		} else {
			const res = await useHttp(ctx).get<productAnswI>(endpoints.getProducts, {
				headers: {
					"Accept-Language": ctx?.locale || "ru",
				},
			});
			console.log("второй", nookies.get(ctx));

			return res.data;
		}
	};

	const getProductById = async (id: string): Promise<productI> => {
		const res = await useHttp(ctx).get<productI>(
			`${endpoints.getProducts}${id}/`,
			{
				headers: {
					"Accept-Language": ctx?.locale || "ru",
				},
			}
		);
		return res.data;
	};

	const getCategories = async (): Promise<categoriesAnswI> => {
		const res = await useHttp(ctx).get<categoriesAnswI>(
			endpoints.getCategories,
			{
				headers: {
					"Accept-Language": ctx?.locale || "ru",
				},
			}
		);
		return res.data;
	};

	const getCores = async (): Promise<coresI> => {
		const res = await useHttp(ctx).get<coresAnswI>(endpoints.getCores, {
			headers: {
				"Accept-Language": ctx?.locale || "ru",
			},
		});
		return res.data.result;
	};

	return { getProducts, getCategories, getCores, getProductById };
};
