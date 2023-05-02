import { FC, useState } from "react";
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
import { useTranslation } from "react-i18next";

const cn = classNames.bind(cls);

interface SpeciallySectionProps {
  className?: string;
  news: newsI[];
}

const mockAct = {
  code: 21523,
  colors_info: [
    {
      color_name: "blue",
      rgb: null,
      image:
        "https://kazkabel-back.zoom-app.kz/media/ImageDefaultAvatar_Ok9HPoe.png",
    },
  ],
  characteristics_info: [],
  name: "кабель",
  cost: 555,
  image: "https://kazkabel-back.zoom-app.kz/media/ImageMockCard_zEEuDtu.png",
  availability: "в наличии",
  is_active: true,
  description:
    "Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Жаренные, буквенных обеспечивает журчит семантика коварный встретил напоивший. Ручеек дороге коварный он. Единственное подзаголовок родного возвращайся повстречался пор оксмокс великий домах, приставка первую даль скатился ее взобравшись. Парадигматическая страна, использовало текст ему, рыбного свое его осталось предупреждал живет страну языкового назад семь продолжил. Рукописи, предупреждал большого. Живет пояс заголовок буквенных по всей вопрос! Меня его послушавшись подпоясал предупредила если большой переписали, коварный города снова раз, грамматики вскоре страну но повстречался страна составитель моей. Проектах своих эта напоивший! Переписали жизни наш которое она языкового великий своих собрал себя осталось они, не оксмокс!",
  core_number: 1,
  section: 0.75,
  subcategory: 4,
  colors: ["blue"],
};

export const SpeciallySection: FC<SpeciallySectionProps> = (props) => {
  const { className, news } = props;

  const { t } = useTranslation();
  const [activeSection, setAvtiveSection] = useState(0);

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
        <ProductCardItem
          className={cls.SpeciallySection_cardItem}
          theme={ThemeProductCard.MINI}
          {...mockAct}
        />
        {/* @ts-ignore */}
        <ProductCardItem
          className={cls.SpeciallySection_cardItem}
          theme={ThemeProductCard.MINI}
          {...mockAct}
        />
        {/* @ts-ignore */}
        <ProductCardItem
          className={cls.SpeciallySection_cardItem}
          theme={ThemeProductCard.MINI}
          {...mockAct}
        />
        {/* @ts-ignore */}
        <ProductCardItem
          className={cls.SpeciallySection_cardItem}
          theme={ThemeProductCard.MINI}
          {...mockAct}
        />
        {/* @ts-ignore */}
        <ProductCardItem
          className={cls.SpeciallySection_cardItem}
          theme={ThemeProductCard.MINI}
          {...mockAct}
        />
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
