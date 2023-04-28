import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./ServicesSection.module.scss";
import { Title } from "@/UI/Title/Title";
import Image from "next/image";
import IconServicesCalc from "@/assets/icons/IconServicesCalc.svg";
import IconServicesCalcWeight from "@/assets/icons/IconServicesCalcWeight.svg";
import IconServicesDecoding from "@/assets/icons/IconServicesDecoding.svg";

const cn = classNames.bind(cls);

interface ServicesSectionProps {
  className?: string;
}

export const ServicesSection: FC<ServicesSectionProps> = (props) => {
  const { className } = props;

  return (
    <section className={cn(cls.ServicesSection)}>
      <Title className={cls.ServicesSection_title}>Сервисы</Title>

      <ul className={cls.ServicesSection_list}>
        <li className={cls.ServicesSection_item}>
          <div className={cls.ServicesSection_itemImg}>
            <Image src={IconServicesCalcWeight} alt="Services icon" />
          </div>
          <span className={cls.ServicesSection_itemTitle}>
            Таблица Веса кабеля
          </span>
        </li>

        <li className={cls.ServicesSection_item}>
          <div className={cls.ServicesSection_itemImg}>
            <Image src={IconServicesCalc} alt="Services icon" />
          </div>
          <span className={cls.ServicesSection_itemTitle}>
            расчет сечения кабеля
          </span>
        </li>

        <li className={cls.ServicesSection_item}>
          <div className={cls.ServicesSection_itemImg}>
            <Image src={IconServicesDecoding} alt="Services icon" />
          </div>
          <span className={cls.ServicesSection_itemTitle}>
            Расшифровка кабеля
          </span>
        </li>
      </ul>
    </section>
  );
};
