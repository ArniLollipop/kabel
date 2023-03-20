import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import cls from './ShowChangePhoneNumber.module.scss';
import { Form, Formik } from 'formik';
import { InputInstance } from '@/shared/formElements/InputInstance';
import { EInputInstanceTheme } from '@/shared/formElements/InputInstance/ui/InputInstance';
import { Button } from '@/UI/Button';
import { ThemeButton } from '@/UI/Button/ui/Button';
import { maskForPhone } from '@/helpers/masks';
import { changePhoneNumberSchema } from '@/helpers/validation';
import { AuthService } from '@/services/Auth.service';
import { Register } from '@/store/slices/AuthSlice';

let cn = classNames.bind(cls);

interface ShowChangePhoneNumberProps {
  className?: string;
  setShowModal: (values: boolean) => void;
  setShowChangePhoneNumber: (value: boolean) => void;
  setNumberOrEmail: (value: string) => void;
}

export const ShowChangePhoneNumber = (props: ShowChangePhoneNumberProps) => {
  const [countdown, setCountdown] = useState(60);
  const [isSmsCodeSend, setIsSmsCodeSend] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [phoneNumErrorBorder, setPhoneNumErrorBorder] = useState(false);
  const [codeErrorBorder, setCodeErrorBorder] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isResultOk, setIsResultOk] = useState(false);

  const inputRef = useRef(null);
  const { className, setShowModal, setShowChangePhoneNumber, setNumberOrEmail } = props;

  const funcCountDown = (value?: string) => {
    setInterval(() => {
      setCountdown((prevState: number) => {
        if (prevState > 0) {
          return prevState - 1;
        }
        return 0;
      });
    }, 1000);
  };

  useEffect(() => {
    funcCountDown();
  }, []);

  return (
    <Formik
      initialValues={{
        phone_number: '',
        confirmSmsCode: '',
      }}
      validationSchema={changePhoneNumberSchema}
      onSubmit={(values) => {
        console.log('values inside onSubmit / show change phone number is: ', {
          ...values,
        });

        // the last toggle to the cabinet if the number is changed
        if (isResultOk) {
          setNumberOrEmail('Номер');
          setShowChangePhoneNumber(false);
          setShowModal(true);
        }
      }}
    >
      {({ values, touched, errors, setFieldValue, handleChange, handleBlur, dirty }) => {
        const sendNewPhoneNumber = async () => {
          const numberPattern = /^\d{11}$/;
          if (numberPattern.test(values.phone_number.replace(/\D+/g, ''))) {
            try {
              const res = await AuthService().sendSms(values.phone_number);
              console.log('res from backend is: ', res);
              if (res.data.result === true) {
                setPhoneNumErrorBorder(false);
                setSuccessMessage(`Код отправлен на номер ${values.phone_number}`);
                setTimeout(() => {
                  setSuccessMessage('');
                }, 2000);
                setErrorMessage('');
                setIsSmsCodeSend(true);
              }
            } catch (error: any) {
              const {
                response: { data },
              } = error;
              if (data.sms_code) {
                const [errMessage, restOfMessage] = data.sms_code[0].split(',');
                setErrorMessage(errMessage);
              } else if (data.error) {
                const errMessage = data.error[0].split(',');
                setErrorMessage(errMessage);
              }
            }
          } else {
            setPhoneNumErrorBorder(true);
            if (values.phone_number === '') {
              setErrorMessage('Введите номер!');
            } else {
              setErrorMessage('Неправильный номер!');
            }
          }
        };

        const sendSmsCode = async () => {
          if (values.confirmSmsCode !== '') {
            try {
              // send sms code to the backend
              // if response is success set setIsResultOk to true in order to toggle okModal
              // const res = await AuthService().singUp(values.phone_number, values.confirmSmsCode);
              // console.log('res is: ', res);
              setIsResultOk(true);
              setCodeErrorBorder(false);
              setErrorMessage('');
            } catch (error) {
              console.log('error is: ', error);
            }
          } else {
            setCodeErrorBorder(true);
            setErrorMessage('Введите код!');
          }
        };

        return (
          <Form>
            <div className={cn(cls.ShowChangePhoneNumber)}>
              <div className={cn(cls.sendAgainContainer)}>
                Вы не получили код? <br />
                {countdown === 0 ? (
                  <Button
                    theme={ThemeButton.CLEAR}
                    className={cn(cls.sendAgainContainer_sendAgain)}
                    type="button"
                    onClick={() => setCountdown(60)}
                  >
                    Отправить повторно
                  </Button>
                ) : (
                  <span className={cn(cls.sendAgainContainer_sendAgain)}>
                    Отправить повторно через {countdown}
                  </span>
                )}
              </div>
              <InputInstance
                theme={EInputInstanceTheme.AUTH}
                mask={maskForPhone}
                type="text"
                id="phone_number"
                name="phone_number"
                placeholder="Новый телефон"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone_number}
                errors={errors.phone_number as string}
                touched={!!touched.phone_number}
                className={cn(
                  cls.phoneNumberInput,
                  isSmsCodeSend && cls.disabledInputCls,
                  phoneNumErrorBorder && cls.errorBorder
                )}
                disabled={isSmsCodeSend}
              />

              <InputInstance
                theme={EInputInstanceTheme.AUTH}
                type="text"
                id="confirmSmsCode"
                name="confirmSmsCode"
                placeholder="Код SMS"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmSmsCode}
                errors={errors.confirmSmsCode}
                touched={touched.confirmSmsCode}
                className={cn(
                  cls.confirmSmsCode,
                  !isSmsCodeSend && cls.disabledInputCls,
                  codeErrorBorder && cls.errorBorder
                )}
                disabled={!isSmsCodeSend}
                ref={inputRef}
              />
              <p className={cn(cls.errorMessage)}>{errorMessage && errorMessage}</p>
              <p className={cn(cls.successMessage)}>{successMessage && successMessage}</p>
              {isSmsCodeSend ? (
                <Button
                  onClick={sendSmsCode}
                  type="submit"
                  className={cn(cls.changePhoneNBtn)}
                  theme={ThemeButton.YELLOW}
                >
                  Подтвердить
                </Button>
              ) : (
                <Button
                  onClick={sendNewPhoneNumber}
                  type="submit"
                  className={cn(cls.changePhoneNBtn)}
                  theme={ThemeButton.YELLOW}
                >
                  Получить код
                </Button>
              )}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
