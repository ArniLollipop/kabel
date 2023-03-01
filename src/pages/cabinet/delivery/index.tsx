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
import { ActivePageEnum, CabinetLayout } from '@/layouts/CabinetLayot/CabinetLayout';
import { Button, ThemeButton } from '@/UI/Button/Button';
import { AddOrEditDelivery } from '@/components/cabinet/delivery/AddOrEditDelivery';

export default function deliveryPage() {
  const [showAddOrEdit, setShowAddOrEdit] = useState(false);

  return (
    <CabinetLayout activePage={ActivePageEnum.DELIVERY}>
      {showAddOrEdit ? (
        <AddOrEditDelivery setShowAddOrEdit={setShowAddOrEdit} />
      ) : (
        <>
          <Button
            onClick={() => setShowAddOrEdit(true)}
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
                <label htmlFor="">
                  <input type="radio" name="default" />
                  По умолчанию
                </label>
                <Button
                  onClick={() => setShowAddOrEdit(true)}
                  className={cls.delivery_editBtn}
                  theme={ThemeButton.CLEAR}
                >
                  <IconCabinetEdit /> Редактировать
                </Button>
                <Button className={cls.delivery_removeBtn} theme={ThemeButton.CLEAR}>
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
                <label htmlFor="">
                  <input type="radio" name="default" />
                  По умолчанию
                </label>
                <Button
                  onClick={() => setShowAddOrEdit(true)}
                  className={cls.delivery_editBtn}
                  theme={ThemeButton.CLEAR}
                >
                  <IconCabinetEdit /> Редактировать
                </Button>
                <Button className={cls.delivery_removeBtn} theme={ThemeButton.CLEAR}>
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
