import { useHttp } from "@/hooks/useHttp";
import { AxiosResponse } from "axios";
import { NextPageContext } from "next";
import { AboutI } from "@/types/AboutTypes";
import { payDelI } from "@/types/PayDelTypes";

const enum endpoints {
  getPayment = "/main/payment/",
  getDelivery = "/main/delivery/",
}

interface PayDelServiceResponseI {
  getPayment: () => Promise<payDelI>;
  getDelivery: () => Promise<payDelI>;
}

export const PayDelService = (
  ctx?: NextPageContext
): PayDelServiceResponseI => {
  const getPayment = async (): Promise<payDelI> => {
    const res = await useHttp().get<payDelI>(endpoints.getPayment);
    return res.data;
  };

  const getDelivery = async (): Promise<payDelI> => {
    const res = await useHttp().get<payDelI>(endpoints.getDelivery);
    return res.data;
  };

  return { getPayment, getDelivery };
};
