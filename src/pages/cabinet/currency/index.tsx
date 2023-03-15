import classNames from "classnames";
import cls from "./index.module.scss";
import { ActiveCabinetPageEnum, CabinetLayout } from "@/layouts/CabinetLayot/CabinetLayout";
import { ICurrencyResponse } from "@/types/GetCurrencyTypes";
import { GetCurrencyService } from "@/services/GetCurrency";
import { GetCurrency } from "@/components/GetCurrency/GetCurrency";

let cn = classNames.bind(cls);

export default function index(res: ICurrencyResponse) {
  const { result: currency } = res;

  return (
    <CabinetLayout className={cn(cls.currency)} activePage={ActiveCabinetPageEnum.CURRENCY}>
      <GetCurrency currency={currency} />
    </CabinetLayout>
  );
}

export async function getServerSideProps() {
  const res = await GetCurrencyService().getCurrency();
  return {
    props: res,
  };
}
