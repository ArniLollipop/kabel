// packages
import { useEffect, useState } from 'react';

// assets
import cls from './index.module.scss';
import { IconCabinetPassword, IconCabinetEdit, IconCabinetChangePhoneNumber } from '@/assets/icons';

// components
import { ActiveCabinetPageEnum, CabinetLayout } from '@/layouts/CabinetLayot/CabinetLayout';
import { Button } from '@/UI/Button';
import { ThemeButton } from '@/UI/Button/ui/Button';
import { ProductCardItem, ThemeProductCard } from '@/components/ProductCardItem/ProductCardItem';
import { ShowEditProfile } from '@/components/cabinet/profile/showEditProfile';
import { EditProfilePhoto } from '@/components/cabinet/profile/editProfilePhoto';
import { Form, Formik } from 'formik';
import { useAppSelector } from '@/hooks/store';
import { ShowChangePhoneNumber } from '@/components/cabinet/profile/showChangePhoneNumber';
import { Modal } from '@/shared/modal/Modal';
import { OkModal } from '@/components/cabinet/profile/okModal';
import { ShowChangePassword } from '@/components/cabinet/profile/showChangePassword';
import { ProfileService } from '@/services/Profile.service';

export default function profilePage() {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showChangePhoneNumber, setShowChangePhoneNumber] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [numberOrEmail, setNumberOrEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(undefined);
  // DON'T FORGET TO USE GET USER ID IN ORDER TO SHOW EXACT USERS DATA INSTEAD OF USING PROFILE USER OR AUTH USER AND EVERYWHERE YOU HAVE THESE TWO IMPORTS
  const { user: authUser } = useAppSelector((state) => state.AuthSlice);
  const { user: profileUser } = useAppSelector((state) => state.ProfileSlice);

  const getUser = async () => {
    if (authUser?.id) {
      const res = await ProfileService().getExactUser(authUser?.id);
      setUser(res);
      console.log('exact user is: ', res);
      console.log('exact user avatar is: ', res.avatar);
    }
  };

  useEffect(() => {
    getUser();
  }, [authUser]);

  return (
    <CabinetLayout className={cls.content} activePage={ActiveCabinetPageEnum.PROFILE}>
      {showModal && (
        <Modal isOpen={showModal}>
          <OkModal numberOrEmail={numberOrEmail} setShowModal={setShowModal} />
        </Modal>
      )}
      {showEditProfile ? (
        <ShowEditProfile setShowEditProfile={setShowEditProfile} />
      ) : showChangePhoneNumber ? (
        <ShowChangePhoneNumber
          setNumberOrEmail={setNumberOrEmail}
          setShowChangePhoneNumber={setShowChangePhoneNumber}
          setShowModal={setShowModal}
        />
      ) : showChangePassword ? (
        <ShowChangePassword
          setNumberOrEmail={setNumberOrEmail}
          setShowModal={setShowModal}
          setShowChangePassword={setShowChangePassword}
        />
      ) : (
        <Formik
          initialValues={{
            // @ts-ignore
            avatar: user?.avatar,
          }}
          onSubmit={(values) => {
            console.log('values is: ', {
              ...values,
            });
          }}
        >
          {({ values, setFieldValue }) => {
            return (
              <Form>
                <div className={cls.userCard}>
                  <div className={cls.userCard_info}>
                    <EditProfilePhoto
                      immediately={true}
                      setFieldValue={setFieldValue}
                      avatar={values.avatar}
                    />
                    <div className={cls.userCard_datas}>
                      <p>
                        <span>Имя: </span>
                        {/* @ts-ignore */}
                        {user ? user?.first_name : authUser?.first_name}
                        {/* @ts-ignore */}
                        {user ? user?.last_name : authUser?.last_name}
                        {!user && !authUser && 'Ваше имя'}
                      </p>
                      <p>
                        <span>Email: </span>
                        {/* @ts-ignore */}
                        {user ? user?.email : authUser?.email} {!user && !authUser && 'Ваш email'}
                      </p>
                      <p>
                        <span>Номер телефона: </span>
                        {/* @ts-ignore */}
                        {user ? user?.phone_number : authUser?.phone_number}{' '}
                        {!user && !authUser && 'Ваш номер'}
                      </p>
                    </div>
                  </div>
                  <div className={cls.userCard_btns}>
                    <Button
                      onClick={() => setShowChangePassword(true)}
                      className={cls.userCard_btn}
                      theme={ThemeButton.CLEAR}
                    >
                      <IconCabinetPassword />
                      Сменить пароль
                    </Button>
                    <Button
                      onClick={() => setShowEditProfile(true)}
                      className={cls.userCard_btn}
                      theme={ThemeButton.CLEAR}
                    >
                      <IconCabinetEdit /> Редактировать профиль
                    </Button>
                    <Button
                      onClick={() => setShowChangePhoneNumber(true)}
                      className={cls.userCard_btn}
                      theme={ThemeButton.CLEAR}
                    >
                      <IconCabinetChangePhoneNumber /> Сменить телефон
                    </Button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      )}

      <div className={cls.recommended}>
        <h2 className={cls.recommended_title}>Рекомендуем к покупке</h2>
        {/* <ul>
          <ProductCardItem className={cls.recommended_item} theme={ThemeProductCard.MINI} />
          <ProductCardItem className={cls.recommended_item} theme={ThemeProductCard.MINI} />
          <ProductCardItem className={cls.recommended_item} theme={ThemeProductCard.MINI} />
        </ul> */}
      </div>
    </CabinetLayout>
  );
}
