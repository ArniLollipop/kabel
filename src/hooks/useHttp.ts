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
			if (ctx?.locale) {
				config.headers["Accept-Language"] = ctx?.locale;
			} else if (window.location.pathname.includes("kz")) {
				config.headers["Accept-Language"] = "kz";
			} else {
				config.headers["Accept-Language"] = "ru";
			}
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
					localStorage.removeItem("access_token");
					localStorage.removeItem("refresh_token");
					localStorage.removeItem("user");
					location.reload();
				}
			}

			throw error;
		}
	);

	return http;
};
