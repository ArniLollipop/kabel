import { FC, useState } from 'react';
import classNames from 'classnames';
import cls from './ShowChangePassword.module.scss';
import { HidePassword, IconCabinetArrow, ShowPassword } from '@/assets/icons';
import { useAppSelector } from '@/hooks/store';
import { Form, Formik } from 'formik';
import { SentToEmailOrPhoneNumber } from './SentToEmailOrPhoneNumber';
import { hideEmail, hidePhoneNumber } from '@/helpers/hideEmail';
import { ErrorBorder } from '@/shared/formElements/errorBorder';
import { Button } from '@/UI/Button';
import { ThemeButton } from '@/UI/Button/ui/Button';
import { InputInstance } from '@/shared/formElements/InputInstance';
import { EInputInstanceTheme } from '@/shared/formElements/InputInstance/ui/InputInstance';
import { changePasswordsSchema } from '@/helpers/validation';
import { ProfileService } from '@/services/Profile.service';

let cn = classNames.bind(cls);

interface ShowChangePasswordProps {
  className?: string;
  setShowChangePassword: (value: boolean) => void;
  setShowModal: (value: boolean) => void;
  setNumberOrEmail: (value: string) => void;
}

export const ShowChangePassword: FC<ShowChangePasswordProps> = (props) => {
  const { className, setShowChangePassword, setShowModal, setNumberOrEmail } = props;
  const [showSentTo, setShowSentTo] = useState('');
  const [showChangePasswords, setShowChangePasswords] = useState(false);

  // DON'T FORGET TO USE GET USER ID IN ORDER TO SHOW EXACT USERS DATA INSTEAD OF USING PROFILE USER OR AUTH USER AND EVERYWHERE YOU HAVE THESE TWO IMPORTS
  const { user: authUser } = useAppSelector((state) => state.AuthSlice);
  const { user: profileUser } = useAppSelector((state) => state.ProfileSlice);

  const [changePassNew, setChangePassNew] = useState(false);
  const [changePassConfirm, setChangePassConfirm] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className={cn(cls.ShowChangePassword)}>
      <Formik
        initialValues={{
          // @ts-ignore
          email: profileUser?.email || authUser?.email || null,
          // @ts-ignore
          phone_number: profileUser?.phone_number || authUser?.phone_number || null,
          changePassNew: '',
          changePassConfirm: '',
        }}
        validationSchema={changePasswordsSchema}
        onSubmit={(values) => {
          console.log('values is: ', {
            ...values,
          });
        }}
      >
        {({ values, touched, errors, handleBlur, handleChange }) => {
          const sendSmsCodeToPhone = async () => {
            try {
              const res = await ProfileService().changePassByPhone(values.phone_number, true);
              if (res.result) {
                setShowSentTo('phone');
              }
            } catch (e: any) {
              setErrorMessage(e);
            }
          };

          const changePasswordFinal = async () => {
            if (values.changePassNew === values.changePassConfirm) {
              try {
                const res = await ProfileService().changePassFinal(
                  values.phone_number,
                  values.changePassConfirm
                );
                if (res.result) {
                  setNumberOrEmail('Пароль');
                  setShowChangePassword(false);
                  setShowModal(true);
                }
              } catch (error) {
                console.log('error inside changePasswordFinal is: ', error);
                setErrorMessage(error);
              }
            } else {
              setErrorMessage('Пароли не совподают!');
            }
          };

          return (
            <Form>
              {showSentTo ? (
                showSentTo === 'email' ? (
                  <SentToEmailOrPhoneNumber
                    type={showSentTo}
                    title={'Введите код из письма'}
                    info={`Отправили его на почту ${hideEmail(authUser?.email)}`}
                    phone_number={values.phone_number}
                    setShowChangePasswords={setShowChangePasswords}
                    setShowSentTo={setShowSentTo}
                  />
                ) : (
                  <SentToEmailOrPhoneNumber
                    type={showSentTo}
                    title={'Введите код из сообщения'}
                    info={`Отправили его на номер ${hidePhoneNumber(authUser?.phone_number)}`}
                    phone_number={values.phone_number}
                    setShowChangePasswords={setShowChangePasswords}
                    setShowSentTo={setShowSentTo}
                  />
                )
              ) : showChangePasswords ? (
                <div className={cn(cls.ShowChangePasswords)}>
                  <ErrorBorder
                    touchedValue={touched.changePassNew}
                    errorsValue={errors.changePassNew}
                  >
                    <Button
                      theme={ThemeButton.CLEAR}
                      type="button"
                      onClick={() => setChangePassNew(!changePassNew)}
                    >
                      {changePassNew ? <ShowPassword /> : <HidePassword />}
                    </Button>
                    <InputInstance
                      password={'password'}
                      theme={EInputInstanceTheme.AUTH}
                      type={changePassNew ? 'text' : 'password'}
                      id="changePassNew"
                      name="changePassNew"
                      placeholder="Новый пароль"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.changePassNew}
                      errors={errors.changePassNew}
                      touched={touched.changePassNew}
                      className={cls.changePassNew}
                    />
                  </ErrorBorder>

                  <ErrorBorder
                    touchedValue={touched.changePassConfirm}
                    errorsValue={errors.changePassConfirm}
                  >
                    <Button
                      theme={ThemeButton.CLEAR}
                      type="button"
                      onClick={() => setChangePassConfirm(!changePassConfirm)}
                    >
                      {changePassConfirm ? <ShowPassword /> : <HidePassword />}
                    </Button>
                    <InputInstance
                      password={'password'}
                      theme={EInputInstanceTheme.AUTH}
                      type={changePassConfirm ? 'text' : 'password'}
                      id="changePassConfirm"
                      name="changePassConfirm"
                      placeholder="Повторить пароль"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.changePassConfirm}
                      errors={errors.changePassConfirm}
                      touched={touched.changePassConfirm}
                      className={cls.changePassConfirm}
                    />
                  </ErrorBorder>

                  <p className={cn(cls.errorMessageCls)}>{errorMessage}</p>

                  <Button onClick={changePasswordFinal} theme={ThemeButton.YELLOW} type="submit">
                    Сохранить
                  </Button>
                </div>
              ) : (
                <>
                  <p className={cn(cls.title)}>Проверка аккаунта</p>
                  <small className={cn(cls.info)}>
                    Чтобы изменить пароль, выберите один из способов проверки аккаунта
                  </small>

                  <div className={cn(cls.btnContainer)}>
                    <div onClick={() => setShowSentTo('email')} className={cn(cls.btn)}>
                      <p>По почте</p>
                      <IconCabinetArrow />
                    </div>
                    <div onClick={sendSmsCodeToPhone} className={cn(cls.btn)}>
                      <p>По номеру телефона</p>
                      <IconCabinetArrow />
                    </div>
                  </div>
                </>
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
