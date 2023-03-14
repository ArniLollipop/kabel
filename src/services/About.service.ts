import { useHttp } from "@/hooks/useHttp";
import { AxiosResponse } from "axios";
import { NextPageContext } from "next";
import { AboutI } from "@/types/AboutTypes";

const baseUrl = "https://kazkabel-back.zoom-app.kz";

const enum endpoints {
  getAboutInfo = "/main/about_company/1/",
}

interface AboutServiceResponseI {
  getAboutInfo: () => Promise<AxiosResponse<AboutI>>;
}

export const AboutService = (ctx?: NextPageContext): AboutServiceResponseI => {
  const getAboutInfo = async (): Promise<AxiosResponse<AboutI>> => {
    const res = await useHttp().get(endpoints.getAboutInfo);
    return res;
  };

  return { getAboutInfo };
};
