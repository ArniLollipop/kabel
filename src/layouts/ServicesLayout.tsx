import { FC, PropsWithChildren } from "react";
import { Title } from "@/UI/Title/Title";
import classNames from "classnames";
import cls from "../components/services/ServicesLayout.module.scss";
import { useTranslation } from "react-i18next";

let cn = classNames.bind(cls);

export const ServicesLayout: FC<PropsWithChildren> = ({ children }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={cn(cls.Services)}>
        <Title className={cn(cls.servicesTitle)}>{t("list.services")}</Title>

        <section className={cn(cls.container)}>{children}</section>
      </div>
    </>
  );
};
