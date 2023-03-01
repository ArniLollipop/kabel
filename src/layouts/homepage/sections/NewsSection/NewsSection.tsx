import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./NewsSection.module.scss";
import { Title } from "@/UI/Title/Title";
import { NewsCard } from "@/components/newsCard/NewsCard";
import ImageMockNewsCard from "@/assets/images/ImageMockNewsCard.png";

const cn = classNames.bind(cls);

interface NewsSectionProps {
  className?: string;
}

export const NewsSection: FC<NewsSectionProps> = (props) => {
  const { className } = props;

  return (
    <section className={cn(cls.NewsSection)}>
      <Title className={cls.NewsSection_title}>Новости</Title>

      <div className={cls.NewsSection_newsList}>
        <NewsCard
          thumbnailImg={ImageMockNewsCard}
          headTitle="Инновация года: возобновляемая энергия"
          descrText="Несмотря на энергетический кризис, интерес инвесторов к возобновляемым источникам энергии (ВИЭ) в 2022 году продолжил расти. По данным Международного энергетического…"
        />
        <NewsCard
          thumbnailImg={ImageMockNewsCard}
          headTitle="Завершено строительство первой очереди новой магистральной линии"
          descrText="Компания 'Атлас' завершила строительство первой очереди магистральной волоконно-оптической линии связи (ВОЛС) 'Транзит Европа - Азия нового поколения' (TEA NEXT), соединившей…"
        />
        <NewsCard
          thumbnailImg={ImageMockNewsCard}
          headTitle="Ученые улучшили способ переработки низкосортного алюминиевого сырья"
          descrText="Метод, который позволит избавиться от примесей железа и других металлов в низкосортном сырье и получить продукт, соответствующий промышленным требованиям…"
        />
      </div>
    </section>
  );
};
