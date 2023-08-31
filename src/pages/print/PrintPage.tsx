/** @format */

// packages
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Head from "next/head";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-toastify";

// assets
import { IconLogo } from "@/assets/icons";
import cls from "./PrintPage.module.scss";

// data
import { printData } from "@/data/PrintData";

import { useTranslation } from "react-i18next";

let cn = classNames.bind(cls);

export default function PrintPage() {
  const { t } = useTranslation();
  const printRef = useRef(null);
  const [isHydrated, setIsHydrated] = useState(false);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () =>
      toast("Успешно напечатано!", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "success",
      }),
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    handlePrint();
  });

  if (!isHydrated) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{t("print")}</title>
        <meta name='description' content='ТОО Almaty Kazkabel | Принт' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Roboto:wght@400;500&display=swap'
        />
      </Head>
      <div ref={printRef} className={cn(cls.PrintPage)}>
        <div className={cn(cls.iconContainer)}>
          <IconLogo width='126' height='47' />
          <p>+7 777 123 23 64</p>
        </div>
        <hr />

        <h2>{t("tableWeight")}</h2>
        <div className={cn(cls.thContainer)}>
          <thead>
            <th>{t("markCabel")}</th>
            <th>{t("lengthCabel")}</th>
            <th>{t("weight")}</th>
          </thead>
          <tbody>
            {/* replace with real data */}
            {printData.map(({ id, name, weight, length }) => {
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{weight}</td>
                  <td>{length}</td>
                </tr>
              );
            })}
          </tbody>
        </div>
        <hr />
        <div className={cn(cls.resultContainer)}>
          <div>
            {/* replace with real data */}
            <p>{t("length")}</p>
            <strong>14.000 м</strong>
          </div>
          <div>
            <p>{t("weight")}</p>
            <strong>58.310 кг</strong>
          </div>
        </div>
      </div>
    </>
  );
}
