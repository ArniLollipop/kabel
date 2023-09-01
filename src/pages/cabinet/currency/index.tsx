/** @format */

import classNames from "classnames";
import cls from "./index.module.scss";
import {
  ActiveCabinetPageEnum,
  CabinetLayout,
} from "@/layouts/CabinetLayot/CabinetLayout";
import {
  ICurrencyResponse,
  IMetalResponse,
  ICurrencyResult,
} from "@/types/GetCurrencyTypes";
import { GetCurrencyService } from "@/services/GetCurrency";
import { GetCurrency } from "@/components/GetCurrency/GetCurrency";

import { useTranslation } from "react-i18next";
import Head from "next/head";

let cn = classNames.bind(cls);

interface ICurrencyNMetalResponse {
  currencyRes: ICurrencyResult;
  metalRes: IMetalResponse;
}

export default function index(props: ICurrencyNMetalResponse) {
  const { currencyRes, metalRes } = props;

  const { t } = useTranslation();

  return (
    <CabinetLayout
      className={cn(cls.currency)}
      activePage={ActiveCabinetPageEnum.CURRENCY}>
      <Head>
        <title>{t("title_currency")}</title>
        <meta
          name='description'
          content={t("description_currency") as string}
        />
        <meta name='robots' content='noindex, noarchive' />
      </Head>
      <p>{t("london")}</p>
      <div className={cn(cls.currency_header)}>
        <span>{t("valuta")}</span>
        <span>{t("tenge")}</span>
      </div>
      <GetCurrency
        className={cn(cls.currencyContainerCabinet)}
        currency={currencyRes}
        metalRes={metalRes}
      />
    </CabinetLayout>
  );
}

export async function getServerSideProps() {
  const currencyRes = await GetCurrencyService().getCurrency();
  const metalRes = await GetCurrencyService().getMetal();
  return {
    props: { currencyRes, metalRes },
  };
}
