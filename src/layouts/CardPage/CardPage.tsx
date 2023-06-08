import { FC, useEffect, useState } from "react";
import classNames from "classnames/bind";
import cls from "./CardPage.module.scss";
import { GoodsList, SideBar, HistoryOfWatching } from "./sections";
import { Modal } from "@/shared/modal/Modal";
import { AddOrEditDelivery } from "../../components/cabinet/delivery/AddOrEditDelivery";
import { useRouter } from "next/router";
import { useAppSelector } from "@/hooks/store";
import { useTranslation } from "next-i18next";
import { useHttp } from "@/hooks/useHttp";
import Link from "next/link";

const cn = classNames.bind(cls);

interface CardPageProps {
  className?: string;
}

export const CardPage: FC<CardPageProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { className } = props;
  const { t } = useTranslation();

  const { total_amount } = useAppSelector((state) => state.CartSlice);
  const [modal, setModal] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      router.push("/auth");
    }
  }, []);

  return (
    <div className={cn(cls.CardPage)}>
      <div
        onClick={() => setModal(false)}
        className={
          modal
            ? "fixed top-0 left-0 bg-black bg-opacity-40 w-full h-[100vh] z-[1000] transition-all duration-300"
            : "fixed top-0 left-0 bg-transparent bg-opacity-40 opacity-0 h-[100vh] z-[1000] transition-all duration-300"
        }
      ></div>
      <div className={modal ? cls.modal_inner : "hidden"}>
        <p className="text-center font-semibold text-xl"> {t("korzinaText")}</p>
        <div className="flex items-center gap-[10px] !justify-center">
          <Link
            href="/cabinet/orders"
            className="bg-[#F6BF0C] py-2 px-5 rounded-[5px] border-none text-white mt-4 font-semibold text-lg cursor-pointer"
          >
            {t("pereitiButton")}
          </Link>
        </div>
      </div>
      {total_amount > 0 ? (
        <div className={cls.CardPage_wrapper}>
          <h1 className={cls.CardPageTitle}>{t("footer.cart")}</h1>
          <div className={cls.CardPageContent}>
            <GoodsList />
            <SideBar setIsOpen={setModal} />
          </div>
          <HistoryOfWatching />
        </div>
      ) : (
        <div className={cls.Empty}>
          <p className={cls.EmptyText}>{t("nothing")}</p>
        </div>
      )}
    </div>
  );
};
