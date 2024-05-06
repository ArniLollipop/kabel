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
import { useRouter } from "next/router";
import { NextPageContext } from "next";

let cn = classNames.bind(cls);

interface ICurrencyNMetalResponse {
	currencyRes: ICurrencyResult;
	metalRes: IMetalResponse;
}

export default function index(props: ICurrencyNMetalResponse) {
	const { currencyRes, metalRes } = props;

	const { t } = useTranslation();

	const router = useRouter();

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
				<meta name='og:title' content={t("title_currency") as string} />
				<meta
					name='og:description'
					content={t("description_currency") as string}
				/>
				<meta property='og:image' content={"https://cable.kz/Logo.svg"} />

				<link rel='canonical' href={"https://cable.kz" + router.pathname} />

				<meta itemProp='name' content={t("title_currency") as string} />
				<meta
					itemProp='description'
					content={t("description_currency") as string}
				/>
				<meta itemProp='image' content='https://cable.kz/Logo.svg' />
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

export async function getServerSideProps(ctx: NextPageContext) {
	const currencyRes = await GetCurrencyService(ctx).getCurrency();
	const metalRes = await GetCurrencyService(ctx).getMetal();
	return {
		props: { currencyRes, metalRes },
	};
}
