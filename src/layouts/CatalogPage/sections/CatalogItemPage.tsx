import { FC } from 'react';
import classNames from 'classnames/bind';
import cls from './CatalogItemPage.module.scss';
import Image from 'next/image';
import ImageMockProduct from '@/assets/images/ImageMockProduct.png';
import { IconCardItemInStock } from '@/assets/icons';
import ImageMockProductMini from '@/assets/images/ImageMockProductMini.svg';
import { Button, ThemeButton } from '@/UI/Button/ui/Button';
import { IconShare } from '@/assets/icons';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-headless-accordion';

const cn = classNames.bind(cls);

interface CatalogItemPageProps {
  className?: string;
}

export const CatalogItemPage: FC<CatalogItemPageProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(cls.CatalogItemPage)}>
      <div className={cls.CatalogItemPage_wrapper}>
        <div className={cls.CatalogItemPage_itemCard}>
          <div className={cls.card}>
            <h1 className={cls.card_title}>Провод ПуГВнг (А)- LS</h1>

            <span className={cls.card_code}>Код товара: 1234567</span>

            <div className={cls.card_content}>
              <Image className={cls.card_img} src={ImageMockProduct} alt="Card image" />

              <div className={cls.card_contentDescr}>
                <div className={cls.inStock}>
                  <IconCardItemInStock />В наличии
                </div>

                <div className={cls.card_colors}>
                  <h3 className={cls.card_subTitle}>Цвет</h3>
                  <div className="">
                    <Image src={ImageMockProductMini} alt="image mini" />
                    <Image src={ImageMockProductMini} alt="image mini" />
                    <Image src={ImageMockProductMini} alt="image mini" />
                    <Image src={ImageMockProductMini} alt="image mini" />
                    <Image src={ImageMockProductMini} alt="image mini" />
                    <Image src={ImageMockProductMini} alt="image mini" />
                  </div>
                </div>

                <div className="">
                  <h3 className={cls.card_subTitle}>Описание</h3>
                  <ul className={cls.card_descr}>
                    <li className={cls.card_descrItem}>
                      <span className={cls.card_descrCategoryName}>Стандарт</span>
                      <span className={cls.card_descrCategoryVal}>ГОСТ 31947-2012</span>
                    </li>
                    <li className={cls.card_descrItem}>
                      <span className={cls.card_descrCategoryName}>Количество жил</span>
                      <span className={cls.card_descrCategoryVal}>1</span>
                    </li>
                    <li className={cls.card_descrItem}>
                      <span className={cls.card_descrCategoryName}>Сечение:</span>
                      <span className={cls.card_descrCategoryVal}>0,5</span>
                    </li>
                    <li className={cls.card_descrItem}>
                      <span className={cls.card_descrCategoryName}>Цвет</span>
                      <span className={cls.card_descrCategoryVal}>желто-зеленый</span>
                    </li>
                    <li className={cls.card_descrItem}>
                      <span className={cls.card_descrCategoryName}>Тип</span>
                      <span className={cls.card_descrCategoryVal}>установочный</span>
                    </li>
                    <li className={cls.card_descrItem}>
                      <span className={cls.card_descrCategoryName}>Диаметр, мм</span>
                      <span className={cls.card_descrCategoryVal}>2,01</span>
                    </li>
                    <li className={cls.card_descrItem}>
                      <span className={cls.card_descrCategoryName}>Номинальное напряжение, кВ</span>
                      <span className={cls.card_descrCategoryVal}>0,450</span>
                    </li>
                  </ul>
                  <a href="#details">Все характеристики</a>
                </div>
              </div>
            </div>
          </div>

          <div className={cls.info}>
            <div className={cls.buyActions}>
              <p className={cls.buyActions_discont}>
                <span>%</span>
                <span>Скидки при заказе от 10000 тг.</span>
              </p>

              <span className={cls.buyActions_price}>550 ₸</span>

              <Button className={cls.buyActions_btn} theme={ThemeButton.CARD}>
                В корзину
              </Button>

              <div className={cls.buyActions_secondaruBtns}>
                <Button className={cls.secondaryBtn} theme={ThemeButton.CLEAR}>
                  <IconShare />
                  Поделиться
                </Button>
              </div>
            </div>

            <div className={cls.delivery}>
              <span>Данные о доставке:</span>
              <span>Самовывоз</span>
              <span>Курьером от 500 тг.</span>
            </div>
          </div>
        </div>

        {/* <div className={cls.CatalogItemPage_more}></div> */}

        {/* <div className={cls.CatalogItemPage_details} id="details"></div> */}
      </div>
    </div>
  );
};
