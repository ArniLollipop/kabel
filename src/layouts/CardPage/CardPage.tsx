import { FC, useState } from 'react';
import classNames from 'classnames/bind';
import cls from './CardPage.module.scss';
import { GoodsList, SideBar, HistoryOfWatching } from './sections';
import { Modal } from '@/shared/modal/Modal';
import { AddOrEditDelivery } from '../../components/cabinet/delivery/AddOrEditDelivery';

const cn = classNames.bind(cls);

interface CardPageProps {
  className?: string;
}

export const CardPage: FC<CardPageProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { className } = props;

  return (
    <div className={cn(cls.CardPage)}>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AddOrEditDelivery setIsOpen={setIsOpen} />
      </Modal>
      <div className={cls.CardPage_wrapper}>
        <h1 className={cls.CardPageTitle}>Корзина</h1>
        <div className={cls.CardPageContent}>
          <GoodsList />
          <SideBar setIsOpen={setIsOpen} />
        </div>
        <HistoryOfWatching />
      </div>
    </div>
  );
};
