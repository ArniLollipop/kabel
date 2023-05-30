import { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";
import cls from "./CatalogPage.module.scss";
import { FilterSection } from "./sections/FilterSection/FilterSection";
import { GoodsListSection } from "./sections/GoodsListSection/GoodsListSection";
import { useRouter } from "next/router";
import { useHttp } from "@/hooks/useHttp";

const cn = classNames.bind(cls);

interface CatalogPageProps {
  className?: string;
}

export const CatalogPage: FC<CatalogPageProps> = (props) => {
  const { className } = props;

  const router = useRouter();

  async function changeStatus() {
    const res = await useHttp().get(
      `/orders/orders/order_pay_status/?id=${router.query.id}`
    );
    window.location.href = "https://cable.kz/catalog";
  }

  useEffect(() => {
    if (router.query.id) {
      changeStatus();
      // console.log(router.query.order_id);
    }
  }, []);

  const [isFiltersOpened, setIsFitlersOpened] = useState(false);

  return (
    <div className={cn(cls.CatalogPage)}>
      <div className={cls.CatalogPage_wrapper}>
        <FilterSection
          isOpened={isFiltersOpened}
          closeFilters={setIsFitlersOpened}
        />
        <GoodsListSection
          isOpened={isFiltersOpened}
          openFilters={setIsFitlersOpened}
        />
      </div>
    </div>
  );
};
