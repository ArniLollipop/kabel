// packages
import Image from 'next/image';
import { useState } from 'react';

// assets
import cls from './index.module.scss';
import { IconCardCounterPlus } from '@/assets/icons';
import IconPaymentVisa from '@/assets/icons/IconPaymentVisa.svg';
import IconPaymentMC from '@/assets/icons/IconPaymentMC.svg';

// components
import { ActivePageEnum, CabinetLayout } from '@/layouts/CabinetLayot/CabinetLayout';
import { Button, ThemeButton } from '@/UI/Button/Button';
import { AddCard } from '@/components/cabinet/cards/AddCard';

export default function cardsPage() {
  const [showAddCard, setShowAddCard] = useState(false);

  return (
    <CabinetLayout activePage={ActivePageEnum.CARDS}>
      {showAddCard ? (
        <AddCard setShowAddCard={setShowAddCard} />
      ) : (
        <>
          <Button
            onClick={() => setShowAddCard(true)}
            className={cls.addBtn}
            theme={ThemeButton.CLEAR}
          >
            <IconCardCounterPlus />
            Добавить
          </Button>
          <div className={cls.cards}>
            <h2>Сохраненные карты</h2>

            <ul className={cls.cards_list}>
              <li className={cls.cards_listItem}>
                <div className={cls.cards_cardSkeleton}>
                  <h3>Номер карты</h3>

                  <span className={cls.cards_cardNumber}>**** 7777</span>

                  <div className={cls.cards_typeOfPayment}>
                    <Image src={IconPaymentVisa} alt="Visa" />
                    <Image src={IconPaymentMC} alt="MC" />
                  </div>
                </div>

                <div className={cls.cards_btns}>
                  <label htmlFor="">
                    <input type="radio" name="card" /> По умолчанию
                  </label>

                  <Button className={cls.delivery_removeBtn} theme={ThemeButton.CLEAR}>
                    Удалить
                  </Button>
                </div>
              </li>
              <li className={cls.cards_listItem}>
                <div className={cls.cards_cardSkeleton}>
                  <h3>Номер карты</h3>

                  <span className={cls.cards_cardNumber}>**** 7777</span>

                  <div className={cls.cards_typeOfPayment}>
                    <Image src={IconPaymentVisa} alt="Visa" />
                    <Image src={IconPaymentMC} alt="MC" />
                  </div>
                </div>

                <div className={cls.cards_btns}>
                  <label htmlFor="">
                    <input type="radio" name="card" /> По умолчанию
                  </label>

                  <Button className={cls.delivery_removeBtn} theme={ThemeButton.CLEAR}>
                    Удалить
                  </Button>
                </div>
              </li>
            </ul>
          </div>
        </>
      )}
    </CabinetLayout>
  );
}
