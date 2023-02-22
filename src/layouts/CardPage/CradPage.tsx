import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./CardPage.module.scss";
import { GoodsList, SideBar, HistoryOfWatching } from "./sections";

const cn = classNames.bind(cls);

interface CradPageProps {
  className?: string;
}

export const CradPage: FC<CradPageProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(cls.CradPage)}>
      <div className={cls.CradPage_wrapper}>
        <h1 className={cls.CradPageTitle}>Корзина</h1>
        <div className={cls.CardPageContent}>
          <GoodsList />
          <SideBar />
        </div>
        <HistoryOfWatching />
      </div>
    </div>
  );
};
