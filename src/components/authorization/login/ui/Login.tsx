// hooks
import { FC } from 'react';

// packages
import classNames from 'classnames';

// assets
import global from '@/shared/formElements/FormElementsStyle.module.scss';
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
              <div
                className={cn(
                  global.inputContainer,
                  touched.phoneNumberLogin && errors.phoneNumberLogin ? global.errorBorder : null
                )}
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
              </div>

              <div
                className={cn(
                  global.inputContainer,
                  touched.passwordLogin && errors.passwordLogin ? global.errorBorder : null
                )}
              >
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
              </div>
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
