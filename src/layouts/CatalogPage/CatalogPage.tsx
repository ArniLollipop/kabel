import { FC, useState } from "react";
import classNames from "classnames/bind";
import cls from "./CatalogPage.module.scss";
import { FilterSection } from "./sections/FilterSection/FilterSection";
import { GoodsListSection } from "./sections/GoodsListSection/GoodsListSection";

const cn = classNames.bind(cls);

interface CatalogPageProps {
  className?: string;
}

export const CatalogPage: FC<CatalogPageProps> = (props) => {
  const { className } = props;

  const [isFiltersOpened, setIsFitlersOpened] = useState(false);

  return (
    <div className={cn(cls.CatalogPage)}>
      <div className={cls.CatalogPage_wrapper}>
        <FilterSection isOpened={isFiltersOpened} closeFilters={setIsFitlersOpened} />
        <GoodsListSection openFilters={setIsFitlersOpened} />
      </div>
    </div>
  );
};
