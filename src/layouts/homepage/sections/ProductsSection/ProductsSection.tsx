import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./ProductsSection.module.scss";
import { Title } from "@/UI/Title/Title";
import Image from "next/image";
import ImageMockCard from "@/assets/images/ImageMockCard.png";
import ImageMockCard2 from "@/assets/images/ImageMockCard2.png";
import ImageMockCard3 from "@/assets/images/ImageMockCard3.png";
import Link from "next/link";

const cn = classNames.bind(cls);

interface ProductsSectionProps {
  className?: string;
}

export const ProductsSection: FC<ProductsSectionProps> = (props) => {
  const { className } = props;

  return (
    <section className={cn(cls.ProductsSection)}>
      <Title className={cls.ProductsSection_title}>Продукция</Title>

      <ul className={cls.ProductsSection_list}>
        <li className={cls.ProductsSection_item}>
          <Link href="/catalog" className={cls.ProductsSection_link}>
            <Image src={ImageMockCard} alt="Product image" className={cls.ProductsSection_img} />
            <p className={cls.ProductsSection_imgDescr}>МЕДНЫЕ КАБЕЛЯ</p>
          </Link>
        </li>

        <li className={cls.ProductsSection_item}>
          <Link href="/catalog" className={cls.ProductsSection_link}>
            <Image src={ImageMockCard2} alt="Product image" className={cls.ProductsSection_img} />
            <p className={cls.ProductsSection_imgDescr}>МЕДНЫЕ КАБЕЛЯ</p>
          </Link>
        </li>

        <li className={cls.ProductsSection_item}>
          <Link href="/catalog" className={cls.ProductsSection_link}>
            <Image src={ImageMockCard3} alt="Product image" className={cls.ProductsSection_img} />
            <p className={cls.ProductsSection_imgDescr}>МЕДНЫЕ КАБЕЛЯ</p>
          </Link>
        </li>
      </ul>
    </section>
  );
};
