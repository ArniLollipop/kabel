import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./ServicesSection.module.scss";
import { Title } from "@/UI/Title/Title";
import Image from "next/image";
import IconServicesCalc from "@/assets/icons/IconServicesCalc.svg";
import IconServicesCalcWeight from "@/assets/icons/IconServicesCalcWeight.svg";
import IconServicesDecoding from "@/assets/icons/IconServicesDecoding.svg";
import { useTranslation } from "react-i18next";

const cn = classNames.bind(cls);

interface ServicesSectionProps {
  className?: string;
}

export const ServicesSection: FC<ServicesSectionProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <section className={cn(cls.ServicesSection)}>
      <Title className={cls.ServicesSection_title}>{t("list.services")}</Title>

      <ul className={cls.ServicesSection_list}>
        <li className={cls.ServicesSection_item}>
          <div className={cls.ServicesSection_itemImg}>
            <Image src={IconServicesCalcWeight} alt="Services icon" />
          </div>
          <span className={cls.ServicesSection_itemTitle}>
            {t("tableWeight")}
          </span>
        </li>

        <li className={cls.ServicesSection_item}>
          <div className={cls.ServicesSection_itemImg}>
            <Image src={IconServicesCalc} alt="Services icon" />
          </div>
          <span className={cls.ServicesSection_itemTitle}>
            {t("raschetCabel")}
          </span>
        </li>

        <li className={cls.ServicesSection_item}>
          <div className={cls.ServicesSection_itemImg}>
            <Image src={IconServicesDecoding} alt="Services icon" />
          </div>
          <span className={cls.ServicesSection_itemTitle}>
            {t("rashifrovka")}
          </span>
        </li>
      </ul>
    </section>
  );
};
