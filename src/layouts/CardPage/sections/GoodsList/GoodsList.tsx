import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./GoodsList.module.scss";
import { GoodsListItem } from "@/layouts/CardPage/sections/GoodsList/GoodsListItem";
import MockImage from "@/assets/images/ImageMockProduct.png";
import MockImageMini from "@/assets/images/ImageMockProductMini.svg";
import MockImage2 from "@/assets/images/ImageMockProduct2.png";

const cn = classNames.bind(cls);

interface GoodsListProps {
  className?: string;
}

export const GoodsList: FC<GoodsListProps> = (props) => {
  const { className } = props;

  return (
    <ul className={cls.GoodsList}>
      <GoodsListItem
        title="Провод ПуГВнг (А)- LS"
        img={MockImage}
        imgMini={MockImageMini}
        className={cls.GoodsList_item}
      />
      <GoodsListItem
        title="Провод ПуГВнг (А)- LS"
        img={MockImage}
        imgMini={MockImageMini}
        className={cls.GoodsList_item}
      />
      <GoodsListItem
        title="Провод ПуГВнг (А)- LS"
        img={MockImage}
        imgMini={MockImageMini}
        className={cls.GoodsList_item}
      />
    </ul>
  );
};
