import { useHttp } from "@/hooks/useHttp";
import { AxiosResponse } from "axios";
import { NextPageContext } from "next";
import { AboutI, AboutAnswI } from "@/types/AboutTypes";

const enum endpoints {
  getAboutInfo = "main/about_company/",
}

interface AboutServiceResponseI {
  getAboutInfo: () => Promise<AboutI[]>;
}

export const AboutService = (ctx?: NextPageContext): AboutServiceResponseI => {
  const getAboutInfo = async (): Promise<AboutI[]> => {
    const res = await useHttp().get<AboutAnswI>(endpoints.getAboutInfo);
    return res.data.results[0];
  };

  return { getAboutInfo };
};
