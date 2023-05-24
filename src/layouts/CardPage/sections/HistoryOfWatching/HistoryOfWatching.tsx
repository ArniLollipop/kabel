import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./HistoryOfWatching.module.scss";
import Image from "next/image";
import mockImage from "@/assets/images/ImageMockProduct2.png";
import Link from "next/link";
import { IconCardItemInStock } from "@/assets/icons";
import {
  ProductCardItem,
  ThemeProductCard,
} from "@/components/ProductCardItem/ProductCardItem";

const cn = classNames.bind(cls);

interface HistoryOfWatchingProps {
  className?: string;
}

export const HistoryOfWatching: FC<HistoryOfWatchingProps> = (props) => {
  const { className } = props;

  return (
    <div className={cls.HistoryOfWatching + " hidden"}>
      <h2 className={cls.HistoryOfWatching_title}>Вы недавно смотрели</h2>
      <ul className={cls.HistoryOfWatching_wrapper}>
        {/* <ProductCardItem theme={ThemeProductCard.MINI} /> */}
      </ul>
    </div>
  );
};
