import { FC } from 'react';
import classNames from 'classnames';
import cls from './GetCurrency.module.scss';
import { ICurrencyResult } from '@/types/GetCurrencyTypes';
import { dateConverter } from '@/helpers/dateConverter';
import { IconCurrencyEUR, IconCurrencyRUS, IconCurrencyUSA } from '@/assets/icons';
import Link from 'next/link';

let cn = classNames.bind(cls);

interface GetCurrencyProps {
  className?: string;
  currency: ICurrencyResult;
}

export const GetCurrency: FC<GetCurrencyProps> = (props) => {
  const { className, currency } = props;
  const currencyItems = [];
  const formattedDate = dateConverter(currency.date);

  for (const item in currency) {
    if (item !== 'date') {
      currencyItems.push(
        <div key={item} className={cn(cls.currencyIntro)}>
          {item === 'EUR' ? (
            <IconCurrencyEUR />
          ) : item === 'USD' ? (
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
      <div className={cn(cls.GetCurrency_main)}>
        <div className={cn(cls.GetCurrency_dateContainer)}>
          <p>
            Курсы валют <span>НБ РК</span>
          </p>
          <p>{formattedDate}</p>
        </div>
        <div className={cn(cls.GetCurrency_currenciesContainer)}>{currencyItems}</div>
        <Link href={'https://www.nationalbank.kz/ru'}>nationalbank.kz</Link>
      </div>
    </section>
  );
};
