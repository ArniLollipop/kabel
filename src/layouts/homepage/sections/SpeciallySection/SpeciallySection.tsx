import { FC, useState } from "react";
import classNames from "classnames/bind";
import cls from "./SpeciallySection.module.scss";
import { Title } from "@/UI/Title/Title";
import { Button, ThemeButton } from "@/UI/Button/ui/Button";
import { NewsCard } from "@/components/newsCard/NewsCard";
import ImageMockNewsCard from "@/assets/images/ImageMockNewsCard.png";
import { ProductCardItem, ThemeProductCard } from "@/components/ProductCardItem/ProductCardItem";
import { newsI } from "@/types/NewsTypes";

const cn = classNames.bind(cls);

interface SpeciallySectionProps {
  className?: string;
  news: newsI[];
}

export const SpeciallySection: FC<SpeciallySectionProps> = (props) => {
  const { className, news } = props;

  const [activeSection, setAvtiveSection] = useState(0);

  return (
    <section className={cn(cls.SpeciallySection)}>
      <Title className={cls.SpeciallySection_title}>СПЕЦИАЛЬНО ДЛЯ ВАС</Title>

      <div className={cls.SpeciallySection_btns}>
        <Button
          className={cn(cls.SpeciallySection_toggleBtn, { active: activeSection == 0 })}
          theme={ThemeButton.CLEAR}
          onClick={() => setAvtiveSection(0)}
        >
          Акции
        </Button>
        <Button
          className={cn(cls.SpeciallySection_toggleBtn, { active: activeSection == 1 })}
          theme={ThemeButton.CLEAR}
          onClick={() => setAvtiveSection(1)}
        >
          Новости
        </Button>
      </div>

      <div className={cn(cls.SpeciallySection_cardList, { hidden: activeSection == 1 })}>
        <ProductCardItem className={cls.SpeciallySection_cardItem} theme={ThemeProductCard.MINI} />
        <ProductCardItem className={cls.SpeciallySection_cardItem} theme={ThemeProductCard.MINI} />
        <ProductCardItem className={cls.SpeciallySection_cardItem} theme={ThemeProductCard.MINI} />
        <ProductCardItem className={cls.SpeciallySection_cardItem} theme={ThemeProductCard.MINI} />
        <ProductCardItem className={cls.SpeciallySection_cardItem} theme={ThemeProductCard.MINI} />
      </div>

      <div className={cn(cls.SpeciallySection_newsList, { hidden: activeSection == 0 })}>
        {news.map((news) => (
          <NewsCard className={cls.SpeciallySection_newsCard} key={news.id} {...news} />
        ))}
      </div>
    </section>
  );
};
