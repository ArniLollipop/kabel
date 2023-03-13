import { Dispatch, FC, SetStateAction } from "react";
import classNames from "classnames/bind";
import cls from "./GoodsListSection.module.scss";
import { ProductCardItem, ThemeProductCard } from "@/components/ProductCardItem/ProductCardItem";
import { SortButtonsWidget } from "@/layouts/CatalogPage/widgets/SortButtonsWidget/SortButtonsWidget";
import { SortByWidget } from "@/layouts/CatalogPage/widgets/SortByWidget/SortByWidget";

import { useAppSelector } from "@/hooks/store";
const cn = classNames.bind(cls);

interface GoodsListSectionProps {
  className?: string;
  openFilters: Dispatch<SetStateAction<boolean>>;
}

export const GoodsListSection: FC<GoodsListSectionProps> = (props) => {
  const { className, openFilters } = props;

  const { products } = useAppSelector((state) => state.ProductSlice);
  console.log("log from section", products);

  return (
    <div className={cn(cls.GoodsListSection)}>
      <button className={cls.mockBtn} onClick={() => openFilters(true)}>
        Open
      </button>

      <SortByWidget />
      {products?.results.map((el) => (
        <p>{el.name}</p>
      ))}
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
