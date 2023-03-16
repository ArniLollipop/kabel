import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./ProductsSection.module.scss";
import { Title } from "@/UI/Title/Title";
import Image from "next/image";
import ImageMockCard from "@/assets/images/ImageMockCard.png";
import ImageMockCard2 from "@/assets/images/ImageMockCard2.png";
import ImageMockCard3 from "@/assets/images/ImageMockCard3.png";
import Link from "next/link";
import { categoryI } from "@/types/ProductTypes";

const cn = classNames.bind(cls);
interface ProductsSectionProps {
  categories: categoryI[];
}

export const ProductsSection: FC<ProductsSectionProps> = (props) => {
  const { categories } = props;
  return (
    <section className={cn(cls.ProductsSection)}>
      <Title className={cls.ProductsSection_title}>Продукция</Title>

      <ul className={cls.ProductsSection_list}>
        {categories.map((cat) => (
          <li className={cls.ProductsSection_item} key={cat.name}>
            <Link href="/catalog" className={cls.ProductsSection_link}>
              <Image
                src={cat.image}
                alt="Product image"
                className={cls.ProductsSection_img}
                width={390}
                height={290}
              />
              <p className={cls.ProductsSection_imgDescr}>{cat.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
