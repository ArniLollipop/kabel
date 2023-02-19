// hooks
import { FC } from 'react';

// packages
import classNames from 'classnames';

// assets
import cls from './Login.module.scss';
import { InputPhoneNumberIcon } from '@/assets/icons';

// helpers
import { maskForPhone } from '@/helpers/masks';

// components
import { InputInstanceWithMask } from '@/shared/formElements/InputInstanceWithMask';
import { InputInstance } from '@/shared/formElements/InputInstance';
import { Button } from '@/UI/Button';
import { Form, Formik } from 'formik';
import { loginSchema } from '@/helpers/validation';
import { ThemeButton } from '@/UI/Button/ui/Button';
import { ErrorBorder } from '@/helpers/errorBorder';

let cn = classNames.bind(cls);

interface LoginProps {
  className?: string;
}

export const Login: FC<LoginProps> = (props) => {
  const { className } = props;

  return (
    <Formik
      initialValues={{
        phoneNumberLogin: '',
        passwordLogin: '',
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        console.log('values Login is: ', {
          ...values,
        });
      }}
    >
      {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
        return (
          <Form>
            <div className={cn(cls.Login)}>
              <ErrorBorder
                touchedValue={touched.phoneNumberLogin}
                errorsValue={errors.phoneNumberLogin}
              >
                <InputPhoneNumberIcon />
                <InputInstanceWithMask
                  mask={maskForPhone}
                  type="text"
                  id="phoneNumberLogin"
                  name="phoneNumberLogin"
                  placeholder="+7 (___) ___-__-__"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumberLogin}
                  errors={errors.phoneNumberLogin}
                  touched={touched.phoneNumberLogin}
                />
              </ErrorBorder>

              <ErrorBorder touchedValue={touched.passwordLogin} errorsValue={errors.passwordLogin}>
                <InputInstance
                  type="password"
                  id="passwordLogin"
                  name="passwordLogin"
                  placeholder="Пароль"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordLogin}
                  errors={errors.passwordLogin}
                  touched={touched.passwordLogin}
                />
              </ErrorBorder>
              <Button theme={ThemeButton.YELLOW} type="submit">
                Войти
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
