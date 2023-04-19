// packages
import { useState } from 'react';

// assets
import cls from './index.module.scss';
import {
  IconPhone,
  IconCardCounterPlus,
  IconCabinetDelivery,
  IconCabinetProfile,
  IconCabinetEdit,
} from '@/assets/icons';

// components
import { ActiveCabinetPageEnum, CabinetLayout } from '@/layouts/CabinetLayot/CabinetLayout';
import { Button } from '@/UI/Button';
import { ThemeButton } from '@/UI/Button/ui/Button';
import { AddOrEditDelivery } from '@/components/cabinet/delivery/AddOrEditDelivery';

// Libs
import classNames from 'classnames/bind';

const cn = classNames.bind(cls);

export default function deliveryPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CabinetLayout activePage={ActiveCabinetPageEnum.DELIVERY} className={cls.delivery}>
      {isOpen ? (
        <AddOrEditDelivery className={cls.delivery_form} setIsOpen={setIsOpen} />
      ) : (
        <>
          <Button
            onClick={() => setIsOpen(true)}
            className={cls.delivery_addBtn}
            theme={ThemeButton.CLEAR}
          >
            <IconCardCounterPlus />
            Добавить
          </Button>

          <ul className={cls.delivery_adressList}>
            <li className={cls.delivery_adressListItem}>
              <h2>Адрес доставки</h2>
              <span>
                <IconCabinetProfile fillColor="#F6BF0C" />
                Аксултан Оспанов
              </span>
              <span>
                <IconPhone textColor="#F6BF0C" />
                +7 (777) 7777777
              </span>
              <span>
                <IconCabinetDelivery fillColor="#F6BF0C" />
                NewEsentai town, apart 15, Almaty, 050001
              </span>

              <div className={cls.delivery_btns}>
                <label className={cls.delivery_btns_label} htmlFor="">
                  <input type="radio" name="default" />
                  По умолчанию
                </label>
                <Button
                  onClick={() => setIsOpen(true)}
                  className={cn(cls.delivery_editBtn, cls.delivery_btns_edit)}
                  theme={ThemeButton.CLEAR}
                >
                  <IconCabinetEdit /> Редактировать
                </Button>
                <Button
                  className={cn(cls.delivery_removeBtn, cls.delivery_btns_delete)}
                  theme={ThemeButton.CLEAR}
                >
                  Удалить
                </Button>
              </div>
            </li>
            <li className={cls.delivery_adressListItem}>
              <h2>Адрес доставки</h2>
              <span>
                <IconCabinetProfile fillColor="#F6BF0C" />
                Аксултан Оспанов
              </span>
              <span>
                <IconPhone textColor="#F6BF0C" />
                +7 (777) 7777777
              </span>
              <span>
                <IconCabinetDelivery fillColor="#F6BF0C" />
                NewEsentai town, apart 15, Almaty, 050001
              </span>

              <div className={cls.delivery_btns}>
                <label className={cls.delivery_btns_label} htmlFor="">
                  <input type="radio" name="default" />
                  По умолчанию
                </label>
                <Button
                  onClick={() => setIsOpen(true)}
                  className={cn(cls.delivery_editBtn, cls.delivery_btns_edit)}
                  theme={ThemeButton.CLEAR}
                >
                  <IconCabinetEdit /> Редактировать
                </Button>
                <Button
                  className={cn(cls.delivery_removeBtn, cls.delivery_btns_delete)}
                  theme={ThemeButton.CLEAR}
                >
                  Удалить
                </Button>
              </div>
            </li>
          </ul>
        </>
      )}
    </CabinetLayout>
  );
}
