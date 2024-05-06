import { useHttp } from "@/hooks/useHttp";
import { AxiosResponse } from "axios";
import { NextPageContext } from "next";
import { ICurrencyResponse, ICurrencyResult } from "@/types/GetCurrencyTypes";

enum endpoints {
	getCurrency = "/widgets/get_currency/",
	getMetal = "widgets/get_metal_currency/",
}

interface IGetCurrencyResponse {
	getCurrency: () => Promise<ICurrencyResult>;
	getMetal: () => Promise<AxiosResponse<any>>;
}

export const GetCurrencyService = (
	ctx?: NextPageContext
): IGetCurrencyResponse => {
	const getCurrency = async (): Promise<ICurrencyResult> => {
		const res = await useHttp(ctx).get<ICurrencyResponse>(
			endpoints.getCurrency,
			{
				headers: {
					"Accept-Language": ctx?.locale || "ru",
				},
			}
		);
		return res.data.result;
	};

	const getMetal = async (): Promise<AxiosResponse<any>> => {
		const res = await useHttp(ctx).get(endpoints.getMetal, {
			headers: {
				"Accept-Language": ctx?.locale || "ru",
			},
		});
		return res.data;
	};

	return { getCurrency, getMetal };
};
