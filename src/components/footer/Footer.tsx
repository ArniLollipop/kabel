import { FC } from "react";
import classNames from "classnames";
import cls from "./Footer.module.scss";
import { IconLogo } from "@/assets/icons";

let cn = classNames.bind(cls);

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(cls.Footer)}>
      <nav className={cls.nav}>
        <IconLogo className={cls.nav_logo} textColor="#fff" />

        <ul className={cls.nav_list}>
          <li className={cls.nav_list_item}>
            <a href="#">О компании</a>
          </li>
          <li className={cls.nav_list_item}>
            <a href="#">Продукция</a>
          </li>
          <li className={cls.nav_list_item}>
            <a href="#">Сервисы</a>
          </li>
          <li className={cls.nav_list_item}>
            <a href="#">Новости</a>
          </li>
          <li className={cls.nav_list_item}>
            <a href="#">Оплата и доставка</a>
          </li>
          <li className={cls.nav_list_item}>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
