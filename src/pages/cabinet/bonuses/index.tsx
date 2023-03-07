import cls from "./index.module.scss";

import { ActivePageEnum, CabinetLayout } from "@/layouts/CabinetLayot/CabinetLayout";
import Image from "next/image";
import ImageCabinetBonus from "@/assets/images/ImageCabinetBonus.png";

export default function bonusesPage() {
  return (
    <CabinetLayout activePage={ActivePageEnum.BONUSES} className={cls.bonuses}>
      <h3>Накопленные бонусы</h3>

      <div className={cls.bonuses_info}>
        <span>Номер карты: **7777</span>
        <span>Персональная скидка: 1%</span>
        <span>Баланс: 5000</span>
      </div>

      <Image className={cls.bonuses_img} src={ImageCabinetBonus} alt="bonus image" />
    </CabinetLayout>
  );
}
