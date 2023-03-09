import { Dispatch, FC, SetStateAction } from "react";
import classNames from "classnames/bind";
import cls from "./GoodsListSection.module.scss";
import { ProductCardItem, ThemeProductCard } from "@/components/ProductCardItem/ProductCardItem";
import { SortButtonsWidget } from "@/layouts/CatalogPage/widgets/SortButtonsWidget/SortButtonsWidget";
import { SortByWidget } from "@/layouts/CatalogPage/widgets/SortByWidget/SortByWidget";

const cn = classNames.bind(cls);

interface GoodsListSectionProps {
  className?: string;
  openFilters: Dispatch<SetStateAction<boolean>>;
}

export const GoodsListSection: FC<GoodsListSectionProps> = (props) => {
  const { className, openFilters } = props;

  return (
    <div className={cn(cls.GoodsListSection)}>
      <button className={cls.mockBtn} onClick={() => openFilters(true)}>
        Open
      </button>

      {/* <SortButtonsWidget className={cls.sortButtonsWidget} /> */}

      <SortByWidget />
      <ul className={cls.goodsList}>
        <ProductCardItem theme={ThemeProductCard.CATALOG} />
        <ProductCardItem theme={ThemeProductCard.CATALOG} />
        <ProductCardItem theme={ThemeProductCard.CATALOG} />
        <ProductCardItem theme={ThemeProductCard.CATALOG} />
        <ProductCardItem theme={ThemeProductCard.CATALOG} />
        <ProductCardItem theme={ThemeProductCard.CATALOG} />
      </ul>
    </div>
  );
};
