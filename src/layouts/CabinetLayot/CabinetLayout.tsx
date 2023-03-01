import { FC, ReactNode } from 'react';
import classNames from 'classnames/bind';
import cls from './CabinetLayout.module.scss';
import { MainLayout } from '@/layouts/MainLayout';
import Link from 'next/link';

import {
  IconCabinetBonuses,
  IconCabinetCards,
  IconCabinetDelivery,
  IconCabinetLogout,
  IconCabinetOrder,
  IconCabinetProfile,
  IconCabinetSupport,
  IconCabinetArrow,
} from '@/assets/icons';
import { Button, ThemeButton } from '@/UI/Button/Button';

const cn = classNames.bind(cls);

export const enum ActivePageEnum {
  PROFILE = 'profile',
  ORDERS = 'orders',
  DELIVERY = 'delivery',
  CARDS = 'cards',
  BONUSES = 'bonuses',
  SUPPORT = 'support',
}

interface CabinetLayoutProps {
  className?: string;
  activePage: ActivePageEnum;
  children: ReactNode;
}

export const CabinetLayout: FC<CabinetLayoutProps> = (props) => {
  const { children, className, activePage } = props;

  return (
    <MainLayout>
      <div className={cn(cls.CabinetLayout)}>
        <div className={cls.CabinetLayout_wrapper}>
          <nav className={cls.nav}>
            <Link
              href="/cabinet/profile"
              className={cn(cls.nav_link, { active: activePage === ActivePageEnum.PROFILE })}
            >
              <IconCabinetProfile />
              <span>Мой профиль</span>
              <IconCabinetArrow />
            </Link>

            <Link
              href="/cabinet/orders"
              className={cn(cls.nav_link, { active: activePage === ActivePageEnum.ORDERS })}
            >
              <IconCabinetOrder />
              <span>Мои заказы</span>
              <IconCabinetArrow />
            </Link>

            <Link
              href="/cabinet/delivery"
              className={cn(cls.nav_link, { active: activePage === ActivePageEnum.DELIVERY })}
            >
              <IconCabinetDelivery />
              <span>Адреса доставки</span>
              <IconCabinetArrow />
            </Link>

            <Link
              href="/cabinet/cards"
              className={cn(cls.nav_link, { active: activePage === ActivePageEnum.CARDS })}
            >
              <IconCabinetCards />
              <span>Сохраненные карты</span>
              <IconCabinetArrow />
            </Link>

            <Link
              href="/cabinet/bonuses"
              className={cn(cls.nav_link, { active: activePage === ActivePageEnum.BONUSES })}
            >
              <IconCabinetBonuses />
              <span>Накопленные бонусы</span>
              <IconCabinetArrow />
            </Link>

            <Link
              href="/cabinet/support"
              className={cn(cls.nav_link, { active: activePage === ActivePageEnum.SUPPORT })}
            >
              <IconCabinetSupport />
              <span>Служба поддержки</span>
              <IconCabinetArrow />
            </Link>

            <div className={cn(cls.nav_logoutBtnContainer)}>
              <IconCabinetLogout fillColor="#F6BF0C" />
              <Button theme={ThemeButton.CLEAR} onClick={() => console.log('Log out button works')}>
                Выйти
              </Button>
            </div>

            <Button className={cn(cls.nav_deleteAccountBtn)} theme={ThemeButton.CLEAR}>
              Удалить аккаунт
            </Button>
          </nav>

          <div className={cn(cls.content, className)}>{children}</div>
        </div>
      </div>
    </MainLayout>
  );
};
