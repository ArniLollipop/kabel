import nookies from "nookies";
import { userI } from "@/types/AuthTypes";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { NextPageContext } from "next";

interface MyAxiosRequestConfig extends AxiosRequestConfig {
  _isRetry?: boolean;
}

export const useHttp = (ctx?: NextPageContext) => {
  const isServrerSide = ctx === undefined;

  const http = axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || "https://api.cable.kz/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  http.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access_token") || "";

      if (token) config.headers["Authorization"] = `Bearer ${token}`;

      let b = document.cookie;

      let lang = "";

      if (b.includes("ru")) {
        lang = "ru";
      } else if (b.includes("kz")) {
        lang = "kz";
      }

      if (lang) config.headers["Accept-Language"] = lang.toLowerCase();
    }
    return config;
  });

  http.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: AxiosError) => {
      const originalRequest: MyAxiosRequestConfig | undefined = error.config;

      if (
        error.response?.status == 401 &&
        originalRequest &&
        !originalRequest._isRetry
      ) {
        originalRequest._isRetry = true;

        try {
          const response = await axios.post<userI>(
            `https://api.cable.kz/users/api/token/refresh/`,
            {
              refresh: localStorage.getItem("refresh_token"),
            }
          );

          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("refresh_token", response.data.refresh_token);
          nookies.set(ctx, "token", response.data.access_token);
          return http.request(originalRequest);
        } catch (e) {
          console.error(`Error from Http`, e);
        }
      }

      throw error;
    }
  );

  return http;
};
