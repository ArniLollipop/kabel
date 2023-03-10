import { FC, useState } from 'react';
import classNames from 'classnames/bind';
import cls from './GoodsListItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import { IconShare, IconTrash, IconCardCounterMinus, IconCardCounterPlus } from '@/assets/icons';
import { Button, ThemeButton } from '@/UI/Button/ui/Button';
import Link from 'next/link';

const cn = classNames.bind(cls);

interface GoodsListItemProps {
  className?: string;
  title: string;
  img: StaticImageData | string;
  imgMini: StaticImageData | string;
}

export const GoodsListItem: FC<GoodsListItemProps> = (props) => {
  const { className, title, img, imgMini } = props;

  const [amount, setAmount] = useState<number>(1);

  const plus = () => setAmount((prev) => prev + 1);
  const minus = () => amount > 1 && setAmount((prev) => prev - 1);

  return (
    <li className={cn(cls.GoodsListItem, className)}>
      <Image src={img} alt="Product image" className={cls.img} />

      <div className={cls.GoodsDescr}>
        <Link href="" className={cls.GoodsDescr_title}>
          {title}
        </Link>

        <div className={cls.GoodsDescr_counter}>
          <Button theme={ThemeButton.CLEAR} onClick={minus} disabled={amount == 0}>
            <IconCardCounterMinus className={cls.GoodsDescr_counterBtn} />
          </Button>
          <input type="еуче" readOnly value={amount} />М
          <Button theme={ThemeButton.CLEAR} onClick={plus}>
            <IconCardCounterPlus className={cls.GoodsDescr_counterBtn} />
          </Button>
        </div>

        <div className={cls.GoodsDescr_props}>
          <p className={cls.GoodsDescr_props_color}>
            <span>Цвет:</span>желто-зеленый
            <Image
              src={imgMini}
              alt="Product image miniature"
              className={cls.GoodsDescr_props_colorImg}
            />
          </p>
          <p className={cls.GoodsDescr_props_weight}>
            <span>Вес, кг:</span>0.10
          </p>
          <span className={cls.GoodsPrice_mobile}>550₸</span>
        </div>
      </div>

      <span className={cls.GoodsPrice}>550₸</span>

      <div className={cls.GoodsBtns}>
        <Button theme={ThemeButton.CLEAR} className={cls.GoodsBtns_shareBtn}>
          <IconShare className={cls.GoodsBtns_shareIcon} />
          <span>поделиться</span>
        </Button>
        <Button theme={ThemeButton.CLEAR}>
          <IconTrash />
        </Button>
      </div>
    </li>
  );
};
