import { useHttp } from "@/hooks/useHttp";
import { AxiosResponse } from "axios";
import { NextPageContext } from "next";

const enum endpoints {
  getCart = "/orders/carts/",
}

export interface CartI {
  id: number;
  total_amount: number;
  user: number;
  items: any;
}

export interface cartAnswI {
  count: number;
  next: string | null;
  previous: string | null;
  data: CartI;
}

interface AboutServiceResponseI {
  getCartInfo: () => Promise<CartI>;
}

export const CartService = (ctx?: NextPageContext): AboutServiceResponseI => {
  const getCartInfo = async (): Promise<CartI> => {
    const userId = JSON.parse(localStorage.getItem("user") || "");
    const res = await useHttp().get<CartI>(endpoints.getCart + userId.id + "/");
    return res.data;
  };

  return { getCartInfo };
};
