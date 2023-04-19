// @ts-nocheck
import cls from './index.module.scss';
import { ActiveCabinetPageEnum, CabinetLayout } from '@/layouts/CabinetLayot/CabinetLayout';
import Image from 'next/image';
import ImageCabinetBonus from '@/assets/images/ImageCabinetBonus.png';
import { ProfileService } from '@/services/Profile.service';
import { useEffect, useState } from 'react';

export default function bonusesPage() {
  const [bonus, setBonus] = useState({});

  const getBonus = async (token: string | null) => {
    const data = await ProfileService().getBonus(token);
    setBonus(data);
  };

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    getBonus(token);
  }, []);

  return (
    <CabinetLayout activePage={ActiveCabinetPageEnum.BONUSES} className={cls.bonuses}>
      <h3>Накопленные бонусы</h3>

      <div className={cls.bonuses_info}>
        <span>Номер карты: {bonus.user}</span>
        <span>Персональная скидка: 1%</span>
        <span>Баланс: {bonus.balance}</span>
      </div>

      <Image className={cls.bonuses_img} src={ImageCabinetBonus} alt="bonus image" />
    </CabinetLayout>
  );
}
