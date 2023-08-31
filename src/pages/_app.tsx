/** @format */

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

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("access_token") === undefined) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }
    const lng = document.cookie;
    if (!lng.includes("ru") && !lng.includes("kz")) {
      document.cookie = "i18next=ru";
    }
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
