import cls from "./index.module.scss";

import {
  ActiveCabinetPageEnum,
  CabinetLayout,
} from "@/layouts/CabinetLayot/CabinetLayout";
import Image from "next/image";
import ImageCabinetBonus from "@/assets/images/ImageCabinetBonus.png";
import { useHttp } from "@/hooks/useHttp";
import { useEffect, useState } from "react";

export default function bonusesPage() {
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
      <h3>Накопленные бонусы</h3>

      <div className={cls.bonuses_info}>
        <span>Номер карты: {bonus ? bonus.id : ""}</span>
        <span>
          Персональная скидка:{" "}
          {bonus
            ? bonus.bonus_percentage
              ? bonus.bonus_percentage
              : "0"
            : "0"}
          %
        </span>
        <span>Баланс: {bonus ? bonus.balance : "0"}</span>
      </div>

      <Image
        className={cls.bonuses_img}
        src={ImageCabinetBonus}
        alt="bonus image"
      />
    </CabinetLayout>
  );
}
