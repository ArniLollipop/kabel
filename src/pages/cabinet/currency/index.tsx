import classNames from "classnames";
import cls from "./index.module.scss";
import { ActiveCabinetPageEnum, CabinetLayout } from "@/layouts/CabinetLayot/CabinetLayout";
import { ICurrencyResponse, IMetalResponse, ICurrencyResult } from "@/types/GetCurrencyTypes";
import { GetCurrencyService } from "@/services/GetCurrency";
import { GetCurrency } from "@/components/GetCurrency/GetCurrency";

let cn = classNames.bind(cls);

interface ICurrencyNMetalResponse {
  currencyRes: ICurrencyResult;
  metalRes: IMetalResponse;
}

export default function index(props: ICurrencyNMetalResponse) {
  const { currencyRes, metalRes } = props;

  return (
    <CabinetLayout className={cn(cls.currency)} activePage={ActiveCabinetPageEnum.CURRENCY}>
      <p>Валюта и Лондонская биржа металлов</p>
      <div className={cn(cls.currency_header)}>
        <span>Валюта</span>
        <span>Казахстанский тенге</span>
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
