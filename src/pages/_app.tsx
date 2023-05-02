import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "@/store";
import { useEffect } from "react";

import "@/i18n";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (localStorage.getItem("access_token") === undefined) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }
    const lng = document.cookie;
    if (!lng.includes("ru") && !lng.includes("kz")) {
      document.cookie = "i18next=ru";
    }
  }, []);

  return (
    <Provider store={store}>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  );
}
