// packages
import { useEffect, useState } from 'react';

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
import { ProfileService } from '@/services/Profile.service';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { setMyAddresses } from '@/store/slices/ProfileSlice';
import { EditMyAddress } from '@/components/cabinet/delivery/EditMyAddress/EditMyAddress';

const cn = classNames.bind(cls);

export default function deliveryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditAddressOpen, setIsEditAddressOpen] = useState(false);
  const [user, setUser] = useState<any>();
  const [addressToChange, setAddressToChange] = useState<any>();

  const dispatch = useAppDispatch();
  const { myAddresses } = useAppSelector((state) => state.ProfileSlice);
  console.log('addresses is: ', myAddresses);

  const getMyAddresses = async (token: string | null) => {
    // @ts-ignore
    const { results } = await ProfileService().getMyAddresses(token);
    dispatch(setMyAddresses(results));
  };

  const changeMyAddress = (id: number) => {
    // @ts-ignore
    const addressToChange = myAddresses.filter((item: any) => item.id === id);
    setAddressToChange(addressToChange);
    setIsEditAddressOpen(true);
  };

  const setDefaultAddress = async (id: number) => {
    await ProfileService().changeMyAddress({ is_default: true }, id);

    const token = localStorage.getItem('access_token');
    // @ts-ignore
    const { results } = await ProfileService().getMyAddresses(token);
    dispatch(setMyAddresses(results));
  };

  const deleteMyAddress = async (id: number) => {
    await ProfileService().deleteMyAddress(id);

    const token = localStorage.getItem('access_token');
    // @ts-ignore
    const { results } = await ProfileService().getMyAddresses(token);
    dispatch(setMyAddresses(results));
  };

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const user = JSON.parse(localStorage.getItem('user') as string);
    setUser(user);
    getMyAddresses(token);
  }, []);

  return (
    <CabinetLayout activePage={ActiveCabinetPageEnum.DELIVERY} className={cls.delivery}>
      {isEditAddressOpen ? (
        <EditMyAddress
          addressToChange={addressToChange}
          className={cls.delivery_form}
          setIsOpen={setIsEditAddressOpen}
        />
      ) : isOpen ? (
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
            {myAddresses &&
              // @ts-ignore
              myAddresses.map((item: any) => {
                const { id, address, phone_number, is_default } = item;

                return (
                  <li key={id} className={cls.delivery_adressListItem}>
                    <h2>Адрес доставки</h2>
                    <span>
                      <IconCabinetProfile fillColor="#F6BF0C" />
                      {user?.first_name}
                    </span>
                    <span>
                      <IconPhone textColor="#F6BF0C" />
                      {phone_number}
                    </span>
                    <span>
                      <IconCabinetDelivery fillColor="#F6BF0C" />
                      {address}
                    </span>

                    <div className={cls.delivery_btns}>
                      <label className={cls.delivery_btns_label} htmlFor="">
                        <Button onClick={() => setDefaultAddress(id)} theme={ThemeButton.CLEAR}>
                          <input
                            type="radio"
                            checked={is_default}
                            onChange={() => console.log('hahaha')}
                            name="default"
                          />
                          По умолчанию
                        </Button>
                      </label>
                      <Button
                        onClick={() => changeMyAddress(id)}
                        className={cn(cls.delivery_editBtn, cls.delivery_btns_edit)}
                        theme={ThemeButton.CLEAR}
                      >
                        <IconCabinetEdit /> Редактировать
                      </Button>
                      <Button
                        onClick={() => deleteMyAddress(id)}
                        className={cn(cls.delivery_removeBtn, cls.delivery_btns_delete)}
                        theme={ThemeButton.CLEAR}
                      >
                        Удалить
                      </Button>
                    </div>
                  </li>
                );
              })}
          </ul>
        </>
      )}
    </CabinetLayout>
  );
}
