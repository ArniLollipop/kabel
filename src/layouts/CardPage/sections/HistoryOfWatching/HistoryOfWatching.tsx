import { FC, useEffect, useState } from "react";
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
import { useHttp } from "@/hooks/useHttp";
import { useTranslation } from "react-i18next";

const cn = classNames.bind(cls);

interface HistoryOfWatchingProps {
  className?: string;
}

export const HistoryOfWatching: FC<HistoryOfWatchingProps> = (props) => {
  const { className } = props;

  const [recom, setRecom] = useState<any>();

  const { t } = useTranslation();

  async function getRecomendations() {
    try {
      const res = await useHttp().get(
        "products/products/recent_watched_products/"
      );
      setRecom(res.data.results);
    } catch {}
  }

  useEffect(() => {
    getRecomendations();
  }, []);

  return (
    <div className={recom ? cls.HistoryOfWatching + " " : "hidden"}>
      <h2 className={cls.HistoryOfWatching_title}>{t("youRecentlyWatch")}</h2>
      <ul className={cls.HistoryOfWatching_wrapper}>
        {recom?.map((el: any, index: number) => {
          if (index <= 4) {
            return <ProductCardItem theme={ThemeProductCard.MINI} {...el} />;
          }
        })}
      </ul>
    </div>
  );
};
