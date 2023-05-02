import cls from "./index.module.scss";

import {
  ActiveCabinetPageEnum,
  CabinetLayout,
} from "@/layouts/CabinetLayot/CabinetLayout";
import Image from "next/image";
import ImageCabinetBonus from "@/assets/images/ImageCabinetBonus.png";
import { useHttp } from "@/hooks/useHttp";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

export default function bonusesPage() {
  const { t } = useTranslation();

  const [bonus, setBonus] = useState<any>();

  async function getBonus() {
    try {
      const res = await useHttp().get("users/users/my_bonus_card/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      console.log("====================================");
      console.log(res);
      console.log("====================================");
      setBonus(res.data);
    } catch (err) {}
  }

  useEffect(() => {
    getBonus();
  }, []);

  return (
    <CabinetLayout
      activePage={ActiveCabinetPageEnum.BONUSES}
      className={cls.bonuses}
    >
      <h3>{t("bonuses")}</h3>

      <div className={cls.bonuses_info}>
        <span>
          {t("cardNumber")} {bonus ? bonus.id : ""}
        </span>
        <span>
          {t("personalSale")}{" "}
          {bonus
            ? bonus.bonus_percentage
              ? bonus.bonus_percentage
              : "0"
            : "0"}
          %
        </span>
        <span>
          {t("balance")}: {bonus ? bonus.balance : "0"}
        </span>
      </div>

      <Image
        className={cls.bonuses_img}
        src={ImageCabinetBonus}
        alt="bonus image"
      />
    </CabinetLayout>
  );
}
