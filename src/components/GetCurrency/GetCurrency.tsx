import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./GetCurrency.module.scss";
import { ICurrencyResult, IMetalResponse, IMetalResult } from "@/types/GetCurrencyTypes";
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

let cn = classNames.bind(cls);

interface GetCurrencyProps {
  className?: string;
  currency: ICurrencyResult;
  metalRes: IMetalResponse;
}

export const GetCurrency: FC<GetCurrencyProps> = (props) => {
  const { className, currency, metalRes } = props;
  const currencyItems = [];
  const formattedDate = dateConverter(currency.date);

  let formattedMetalDate;
  // @ts-ignore
  const showMetal = metalRes.result.map((metal: IMetalResult) => {
    if (metal.date) {
      formattedMetalDate = dateConverter(metal.date);
    } else {
      const { name, profit, price } = metal;
      const metalIcon =
        profit === 0 ? <IconMetalMinus /> : profit > 0 ? <IconMetalUp /> : <IconMetalDown />;

      return (
        <div className={cn(cls.metalInfo)} key={metal.name}>
          {name}
          <span>
            {metalIcon}
            {price.toFixed(2)}
          </span>
          {profit}
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
            <span className={cls.currencyName}>{item}</span>
            <span className={cls.currencyValue}>{currency[item as keyof typeof currency]}</span>
          </div>
        </div>
      );
    }
  }

  return (
    <section className={cn(cls.GetCurrency)}>
      <div className={cn(cls.GetCurrency_currencyContainer, className)}>
        <div className={cn(cls.dateContainer)}>
          <p>
            Курсы валют <span>НБ РК</span>
          </p>
          <p>{formattedDate}</p>
        </div>
        <div className={cn(cls.currencyWrapper)}>{currencyItems}</div>
        <Link target={"_blank"} href={"https://www.nationalbank.kz/ru"}>
          nationalbank.kz
        </Link>
      </div>

      <div className={cn(cls.GetCurrency_currencyContainer, className)}>
        <p>
          Курс продаж цветных металлов по данным{" "}
          <Link target={"_blank"} className={cn(cls.metalLink)} href={"https://www.lme.com/en/"}>
            LME
          </Link>{" "}
          на <span>{formattedMetalDate}</span>
        </p>
        <div className={cn(cls.metalContainer)}>{showMetal}</div>
      </div>
    </section>
  );
};
