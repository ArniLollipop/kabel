// hooks
import { FC } from 'react';

// packages
import classNames from 'classnames';
import { Formik, Form } from 'formik';

// assets
import cls from './Authorization.module.scss';
import global from '@/shared/formElements/FormElementsStyle.module.scss';
import { InputNameIcon, InputPhoneNumberIcon } from '@/assets/icons';

// components
import { authorizationSchema } from '@/helpers/validation';
import { Button } from '@/UI/Button/Button';
import { InputInstance } from '@/shared/formElements/InputInstance';
import { InputInstanceWithMask } from '@/shared/formElements/InputInstanceWithMask';

// helpers
import { maskForPhone } from '@/helpers/masks';

let cn = classNames.bind(cls);

interface AuthorizationProps {
  className?: string;
}

export const Authorization: FC<AuthorizationProps> = ({ className }) => {
  return (
    <div className={cn(cls.Authorization)}>
      <Formik
        initialValues={{
          name: '',
          phoneNumber: '',
        }}
        validationSchema={authorizationSchema}
        onSubmit={(values) => {
          console.log('values is: ', {
            ...values,
          });
        }}
      >
        {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
          return (
            <div className={cn(cls.formContainer)}>
              <Form>
                <div
                  className={cn(
                    global.inputContainer,
                    touched.name && errors.name ? global.errorBorder : null
                  )}
                >
                  <InputNameIcon />
                  <InputInstance
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Имя"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    errors={errors.name}
                    touched={touched.name}
                  />
                </div>

                <div
                  className={cn(
                    global.inputContainer,
                    touched.phoneNumber && errors.phoneNumber ? global.errorBorder : null
                  )}
                >
                  <InputPhoneNumberIcon />
                  <InputInstanceWithMask
                    mask={maskForPhone}
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="+7 (___) ___-__-__"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                    errors={errors.phoneNumber}
                    touched={touched.phoneNumber}
                  />
                </div>
                <Button type="submit" text={'Получить код SMS'} />
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};
