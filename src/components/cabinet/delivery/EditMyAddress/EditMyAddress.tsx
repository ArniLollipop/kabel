// @ts-nocheck
// packages
import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Form, Formik } from 'formik';

// assets
import cls from './AddOrEditDelivery.module.scss';

// components
import { InputInstance } from '@/shared/formElements/InputInstance';
import { EInputInstanceTheme } from '@/shared/formElements/InputInstance/ui/InputInstance';
import { Button, ThemeButton } from '@/UI/Button/ui/Button';

// mask
import { maskForPhone } from '@/helpers/masks';

// validation
import { deliveryAddressSchema } from '@/helpers/validation';
import { ProfileService } from '@/services/Profile.service';
import { useAppDispatch } from '@/hooks/store';
import { setMyAddresses } from '@/store/slices/ProfileSlice';

let cn = classNames.bind(cls);

interface EditMyAddressProps {
  className?: string;
  setIsOpen?: (value: boolean) => void;
  addressToChange: any;
}

export const EditMyAddress: FC<EditMyAddressProps> = (props) => {
  const { className, setIsOpen, addressToChange } = props;
  const [user, setUser] = useState<any>();
  const [token, setToken] = useState<any>();
  const dispatch = useAppDispatch();

  const { address, apartment, floor, house, phone_number, id: addressId } = addressToChange[0];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') as string);
    const token = localStorage.getItem('access_token');
    setToken(token);
    setUser(user);
  }, []);

  return (
    <div className={cn(cls.AddOrEditDelivery, className)}>
      <Formik
        initialValues={{
          address: address,
          apartment: apartment,
          floor: floor,
          home: house,
          phoneNumber: phone_number,
        }}
        validationSchema={deliveryAddressSchema}
        onSubmit={(values) => {
          console.log('values is: ', {
            ...values,
          });
        }}
      >
        {({ values, touched, errors, handleChange, handleBlur }) => {
          const handleSaveAddOrDelivery = async () => {
            const { address, apartment, floor, home, phoneNumber } = touched;
            if (
              address &&
              apartment &&
              floor &&
              home &&
              phoneNumber &&
              !errors?.address &&
              !errors?.apartment &&
              !errors?.floor &&
              !errors?.home &&
              !errors?.phoneNumber
            ) {
              const res = await ProfileService().changeMyAddress(
                {
                  address: String(values.address),
                  apartment: Number(values.apartment),
                  floor: Number(values.floor),
                  house: Number(values.home),
                  phone_number: values.phoneNumber,
                  is_default: false,
                  user: Number(user.id),
                },
                addressId
              );
              if (res) {
                const token = localStorage.getItem('access_token');
                // @ts-ignore
                const { results } = await ProfileService().getMyAddresses(token);
                dispatch(setMyAddresses(results));
                setIsOpen!(false);
              }
            }
          };

          return (
            <div className={cls.container}>
              <p>Новый адрес</p>
              <Form>
                <InputInstance
                  theme={EInputInstanceTheme.PROFILE}
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Адрес"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  errors={errors.address}
                  touched={touched.address}
                  className={cls.addressInput}
                />

                <div className={cls.container_ApNFlNHmInputs}>
                  <InputInstance
                    theme={EInputInstanceTheme.PROFILE}
                    type="number"
                    id="apartment"
                    name="apartment"
                    placeholder="Квартира"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.apartment}
                    errors={errors.apartment}
                    touched={touched.apartment}
                    className={cls.apartmentInput}
                  />

                  <InputInstance
                    theme={EInputInstanceTheme.PROFILE}
                    type="number"
                    id="floor"
                    name="floor"
                    placeholder="Этаж"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.floor}
                    errors={errors.floor}
                    touched={touched.floor}
                    className={cls.floorInput}
                  />

                  <InputInstance
                    theme={EInputInstanceTheme.PROFILE}
                    type="number"
                    id="home"
                    name="home"
                    placeholder="Дом"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.home}
                    errors={errors.home}
                    touched={touched.home}
                    className={cls.homeInput}
                  />
                </div>

                <InputInstance
                  mask={maskForPhone}
                  theme={EInputInstanceTheme.PROFILE}
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="+7 (___) ___ __ __"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                  errors={errors.phoneNumber}
                  touched={touched.phoneNumber}
                  className={cls.phoneNumberInput}
                />

                <div className={cls.container_BtnContainer}>
                  <Button
                    theme={ThemeButton.CANCEL}
                    onClick={() => setIsOpen!(false)}
                    type="button"
                  >
                    Отменить
                  </Button>

                  <Button
                    onClick={handleSaveAddOrDelivery}
                    type="submit"
                    theme={ThemeButton.YELLOW}
                  >
                    Сохранить
                  </Button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};
