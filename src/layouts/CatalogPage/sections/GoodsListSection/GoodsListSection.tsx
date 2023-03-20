import { Dispatch, FC, SetStateAction } from "react";
import classNames from "classnames/bind";
import cls from "./GoodsListSection.module.scss";
import { ProductCardItem, ThemeProductCard } from "@/components/ProductCardItem/ProductCardItem";

import { useAppSelector } from "@/hooks/store";
const cn = classNames.bind(cls);

interface GoodsListSectionProps {
  className?: string;
  openFilters: Dispatch<SetStateAction<boolean>>;
}

export const GoodsListSection: FC<GoodsListSectionProps> = (props) => {
  const { className, openFilters } = props;
  const { products } = useAppSelector((state) => state.ProductSlice);

  return (
    <div className={cn(cls.GoodsListSection)}>
      <button className={cls.mockBtn} onClick={() => openFilters(true)}>
        Open
      </button>

      {products?.results.length ? (
        <ul className={cls.goodsList}>
          {products?.results.map((el) => (
            <ProductCardItem theme={ThemeProductCard.CATALOG} {...el} key={el.code} />
          ))}
        </ul>
      ) : (
        <p className={cls.goodsList_notFound}>Товары не найдены</p>
      )}
    </div>
  );
};
