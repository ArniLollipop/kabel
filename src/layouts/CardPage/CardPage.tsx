import { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";
import cls from "./CardPage.module.scss";
import { GoodsList, SideBar, HistoryOfWatching } from "./sections";
import { Modal } from "@/shared/modal/Modal";
import { AddOrEditDelivery } from "../../components/cabinet/delivery/AddOrEditDelivery";
import { useRouter } from "next/router";
import { useAppSelector } from "@/hooks/store";

const cn = classNames.bind(cls);

interface CardPageProps {
  className?: string;
}

export const CardPage: FC<CardPageProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { className } = props;

  const { total_amount } = useAppSelector((state) => state.CartSlice);

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/auth");
    }
  }, []);

  return (
    <div className={cn(cls.CardPage)}>
      {total_amount > 0 ? (
        <div className={cls.CardPage_wrapper}>
          <h1 className={cls.CardPageTitle}>Корзина</h1>
          <div className={cls.CardPageContent}>
            <GoodsList />
            <SideBar setIsOpen={setIsOpen} />
          </div>
          <HistoryOfWatching />
        </div>
      ) : (
        <div className={cls.Empty}>
          <p className={cls.EmptyText}>У вас в корзине ничего нету...</p>
        </div>
      )}
    </div>
  );
};
