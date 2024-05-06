import { useHttp } from "@/hooks/useHttp";
import { NextPageContext } from "next";
import { sertificateAnswsI, sertificateI } from "@/types/SertificateTypes";

const enum endpoints {
	getSertificate = "/main/certificate/",
}

interface SertificateServiceResponseI {
	getSertificate: () => Promise<sertificateI[]>;
}

export const SertificateService = (
	ctx?: NextPageContext
): SertificateServiceResponseI => {
	const getSertificate = async (): Promise<sertificateI[]> => {
		const res = await useHttp(ctx).get<sertificateAnswsI>(
			endpoints.getSertificate,
			{
				headers: {
					"Accept-Language": ctx?.locale || "ru",
				},
			}
		);
		return res.data.results;
	};

	return { getSertificate };
};
