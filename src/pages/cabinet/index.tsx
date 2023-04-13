import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./index.module.scss";
import { Navigation, ThemeNavigation } from "@/layouts/CabinetLayot/Navigation";
import { MainLayout } from "@/layouts/MainLayout";
import { ActiveHeaderPage } from "@/components/header/Header";

const cn = classNames.bind(cls);

interface indexProps {
  className?: string;
}

// this page visible only at mobile devices
export default function cabinetPage() {
  return (
    <MainLayout activePage={ActiveHeaderPage.CABINET}>
      <div className={cls.cabinet_wrapper}>
        <Navigation className={cls.cabinet} theme={ThemeNavigation.MOBILE} />
      </div>
    </MainLayout>
  );
}