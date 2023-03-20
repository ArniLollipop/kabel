import { Dispatch, FC, SetStateAction } from "react";
import classNames from "classnames/bind";
import cls from "./GoodsListSection.module.scss";
import { ProductCardItem, ThemeProductCard } from "@/components/ProductCardItem/ProductCardItem";

import { useAppSelector } from "@/hooks/store";
const cn = classNames.bind(cls);

interface GoodsListSectionProps {
  className?: string;
  openFilters: Dispatch<SetStateAction<boolean>>;
  isOpened: boolean;
}

export const GoodsListSection: FC<GoodsListSectionProps> = (props) => {
  const { className, openFilters, isOpened } = props;
  const { products } = useAppSelector((state) => state.ProductSlice);

  return (
    <div className={cn(cls.GoodsListSection)}>
      <button
        className={cls.mockBtn}
        onClick={() => (isOpened ? openFilters(false) : openFilters(true))}
      >
        {isOpened ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#00ABC2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#00ABC2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="2" width="18" height="2" rx="1" fill="#00ABC2" />
            <rect y="8" width="18" height="2" rx="1" fill="#00ABC2" />
            <rect y="14" width="18" height="2" rx="1" fill="#00ABC2" />
            <rect x="12" y="2" width="2" height="2" fill="white" />
            <circle cx="13" cy="3" r="2" stroke="#00ABC2" strokeWidth="2" />
            <rect x="4" y="8" width="2" height="2" fill="white" />
            <circle cx="5" cy="9" r="2" stroke="#00ABC2" strokeWidth="2" />
            <rect x="12" y="14" width="2" height="2" fill="white" />
            <circle cx="13" cy="15" r="2" stroke="#00ABC2" strokeWidth="2" />
          </svg>
        )}
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
