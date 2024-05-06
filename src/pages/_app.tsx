import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "@/store";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useHttp } from "@/hooks/useHttp";
import { changeLanguage } from "i18next";
import { NextPageContext } from "next";

function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		if (localStorage.getItem("access_token") === undefined) {
			localStorage.removeItem("access_token");
			localStorage.removeItem("refresh_token");
		}
		// if (router.pathname.includes("kz")) {
		// 	changeLanguage("kz");
		// 	useHttp().interceptors.request.use((config) => {
		// 		config.headers["Accept-Language"] = "kz";
		// 		return config;
		// 	});
		// } else {
		// 	changeLanguage("ru");
		// 	useHttp().interceptors.request.use((config) => {
		// 		config.headers["Accept-Language"] = "ru";
		// 		return config;
		// 	});
		// }
		if (!localStorage.getItem("user") && router.pathname.includes("cabinet")) {
			router.replace("/auth");
		}
	}, []);

	return (
		<Provider store={store}>
			<I18nextProvider i18n={i18n} defaultNS={"translation"}>
				<ToastContainer />
				<Component {...pageProps} />
			</I18nextProvider>
		</Provider>
	);
}

export default appWithTranslation(App);
