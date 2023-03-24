import { useHttp } from "@/hooks/useHttp";
import { AxiosResponse } from "axios";
import { NextPageContext } from "next";
import { AboutI } from "@/types/AboutTypes";
import { offerAnswI, offerI } from "@/types/OfferTypes";

const enum endpoints {
  getAboutInfo = "/main/banners/",
}

interface OfferServiceResponseI {
  getOffers: () => Promise<offerI[]>;
}

export const OfferService = (ctx?: NextPageContext): OfferServiceResponseI => {
  const getOffers = async (): Promise<offerI[]> => {
    const res = await useHttp().get<offerAnswI>(endpoints.getAboutInfo);
    return res.data.results;
  };

  return { getOffers };
};
