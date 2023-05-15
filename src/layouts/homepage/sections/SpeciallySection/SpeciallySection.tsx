import { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";
import cls from "./SpeciallySection.module.scss";
import { Title } from "@/UI/Title/Title";
import { Button, ThemeButton } from "@/UI/Button/ui/Button";
import { NewsCard } from "@/components/newsCard/NewsCard";
import ImageMockNewsCard from "@/assets/images/ImageMockNewsCard.png";
import {
  ProductCardItem,
  ThemeProductCard,
} from "@/components/ProductCardItem/ProductCardItem";
import { newsI } from "@/types/NewsTypes";
import { useTranslation } from "next-i18next";
import { useHttp } from "@/hooks/useHttp";

const cn = classNames.bind(cls);

interface SpeciallySectionProps {
  className?: string;
  news: newsI[];
}

export const SpeciallySection: FC<SpeciallySectionProps> = (props) => {
  const { className, news } = props;

  const { t } = useTranslation();
  const [activeSection, setAvtiveSection] = useState(0);

  const [mockAct, setMockAct] = useState<any>();

  async function getPromo() {
    try {
      const res = await useHttp().get("products/products/promo_products/");
      setMockAct(res.data.results);
    } catch {}
  }

  useEffect(() => {
    getPromo();
  }, []);

  return (
    <section className={cn(cls.SpeciallySection)}>
      <Title className={cls.SpeciallySection_title}>{t("onlyForYou")}</Title>

      <div className={cls.SpeciallySection_btns}>
        <Button
          className={cn(cls.SpeciallySection_toggleBtn, {
            active: activeSection == 0,
          })}
          theme={ThemeButton.CLEAR}
          onClick={() => setAvtiveSection(0)}
        >
          Акции
        </Button>
        <Button
          className={cn(cls.SpeciallySection_toggleBtn, {
            active: activeSection == 1,
          })}
          theme={ThemeButton.CLEAR}
          onClick={() => setAvtiveSection(1)}
        >
          {t("list.news")}
        </Button>
      </div>

      <div
        className={cn(cls.SpeciallySection_cardList, {
          hidden: activeSection == 1,
        })}
      >
        {/* @ts-ignore */}
        {mockAct &&
          mockAct?.map((el: any) => {
            return (
              <ProductCardItem
                className={cls.SpeciallySection_cardItem}
                theme={ThemeProductCard.MINI}
                {...el}
                key={el.code}
              />
            );
          })}
      </div>

      <div
        className={cn(cls.SpeciallySection_newsList, {
          hidden: activeSection == 0,
        })}
      >
        {news?.map((news) => (
          <NewsCard
            className={cls.SpeciallySection_newsCard}
            {...news}
            key={news.id}
          />
        ))}
      </div>
    </section>
  );
};
