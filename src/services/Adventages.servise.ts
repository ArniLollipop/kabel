/** @format */

import { useHttp } from "@/hooks/useHttp";
import { NextPageContext } from "next";
import { adventagesI, adventagesAnswI } from "@/types/AdventagesTypes";
const enum endpoints {
	getAdventages = "/main/our_advantages/",
}

interface AdventagesServiceResponseI {
	getAdventages: () => Promise<adventagesI[]>;
}

export const AdventagesService = (
	ctx?: NextPageContext
): AdventagesServiceResponseI => {
	const getAdventages = async (): Promise<adventagesI[]> => {
		const res = await useHttp(ctx).get<adventagesAnswI>(
			endpoints.getAdventages,
			{
				headers: {
					"Accept-Language": ctx?.locale || "ru",
				},
			}
		);
		return res.data.results;
	};

	return { getAdventages };
};
