import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./GetCurrency.module.scss";
import {
	ICurrencyResult,
	IMetalResponse,
	IMetalResult,
} from "@/types/GetCurrencyTypes";
import { dateConverter } from "@/helpers/dateConverter";
import {
	IconCurrencyEUR,
	IconCurrencyRUS,
	IconCurrencyUSA,
	IconMetalDown,
	IconMetalMinus,
	IconMetalUp,
} from "@/assets/icons";
import Link from "next/link";
import { useTranslation } from "react-i18next";

let cn = classNames.bind(cls);

interface GetCurrencyProps {
	className?: string;
	currency: ICurrencyResult;
	metalRes: IMetalResponse;
}

export const GetCurrency: FC<GetCurrencyProps> = (props) => {
	const { className, currency, metalRes } = props;
	const currencyItems = [];
	const formattedDate = dateConverter(currency?.date);

	const { t } = useTranslation();

	let formattedMetalDate;
	// @ts-ignore
	const showMetal = metalRes?.result.map((metal: IMetalResult) => {
		if (metal.date) {
			formattedMetalDate = dateConverter(metal.date);
		} else {
			const { name, profit, price } = metal;
			const metalIcon =
				profit === 0 ? (
					<IconMetalMinus />
				) : profit > 0 ? (
					<IconMetalUp />
				) : (
					<IconMetalDown />
				);

			return (
				<div className={cn(cls.metalInfo)} key={metal.name}>
					{name}
					<span>
						{metalIcon}
						{price.toFixed(2)}
					</span>
					{profit.toFixed(2)}
				</div>
			);
		}
	});

	for (const item in currency) {
		if (item !== "date") {
			currencyItems.push(
				<div key={item} className={cn(cls.currencyIntro)}>
					{item === "EUR" ? (
						<IconCurrencyEUR />
					) : item === "USD" ? (
						<IconCurrencyUSA />
					) : (
						<IconCurrencyRUS />
					)}
					<div className={cn(cls.currencyIntroData)}>
						<span itemProp='name' className={cls.currencyName}>
							{item}
						</span>
						<span itemProp='priceCurrency' className={cls.currencyValue}>
							{currency[item as keyof typeof currency]}
						</span>
					</div>
				</div>
			);
		}
	}

	return (
		<section
			itemScope
			itemType='https://schema.org/TradeAction'
			className={cn(cls.GetCurrency)}>
			<div className={cn(cls.GetCurrency_currencyContainer, className)}>
				<div className={cn(cls.dateContainer)}>
					<p>
						{t("exchangeRates")}
						<span> НБ РК </span>
					</p>
					<p>{formattedDate}</p>
				</div>
				<div className={cn(cls.currencyWrapper)}>{currencyItems}</div>
				<Link
					itemProp='url'
					target={"_blank"}
					href={"https://www.nationalbank.kz/ru"}>
					nationalbank.kz
				</Link>
			</div>

			<div className={cn(cls.GetCurrency_currencyContainer, className)}>
				<p>
					{t("exchangeRatesText")}{" "}
					<Link
						target={"_blank"}
						className={cn(cls.metalLink)}
						href={"https://www.lme.com/en/"}>
						LME
					</Link>{" "}
					на <span>{formattedMetalDate}</span>
				</p>
				<div className={cn(cls.metalContainer)}>{showMetal}</div>
			</div>
		</section>
	);
};
