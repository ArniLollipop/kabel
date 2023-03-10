// packages
import { FC } from 'react';
import classNames from 'classnames';
import { Form, Formik } from 'formik';

// assets
import cls from './ShowEditProfile.module.scss';

// validation
import { profileSchema } from '@/helpers/validation';

// components
import { InputInstance } from '@/shared/formElements/InputInstance';
import { EInputInstanceTheme } from '@/shared/formElements/InputInstance/ui/InputInstance';
import { EditProfilePhoto } from '../../editProfilePhoto';
import { Button, ThemeButton } from '@/UI/Button/ui/Button';

// mask
import { maskForPhone } from '@/helpers/masks';

let cn = classNames.bind(cls);

interface ShowEditProfileProps {
  className?: string;
  setShowEditProfile: (value: boolean) => void;
}

export const ShowEditProfile: FC<ShowEditProfileProps> = (props) => {
  const { className, setShowEditProfile } = props;

  return (
    <div className={cn(cls.ShowEditProfile)}>
      <Formik
        initialValues={{
          name: '',
          lastName: '',
          fatherName: '',
          email: '',
          phoneNumber: '',
          userEditProfilePhoto: null,
        }}
        validationSchema={profileSchema}
        onSubmit={(values) => {
          console.log('values is: ', {
            ...values,
          });
        }}
      >
        {({ values, touched, errors, setFieldValue, handleChange, handleBlur }) => {
          const handleSaveProfilePhoto = () => {
            const { name, lastName, email, phoneNumber } = touched;
            if (
              name &&
              lastName &&
              email &&
              phoneNumber &&
              !errors?.email &&
              !errors?.lastName &&
              !errors?.email &&
              !errors?.phoneNumber
            ) {
              setShowEditProfile(false);
            }
          };

          return (
            <Form>
              <div className={cls.userCard}>
                <div className={cls.userCard_container}>
                  <EditProfilePhoto
                    setFieldValue={setFieldValue}
                    userProfilePhoto={values.userEditProfilePhoto}
                  />

                  <div className={cls.userCard_inputsContainer}>
                    {/* <div className={cls.userCard_NnLInputs}> */}
                    <InputInstance
                      theme={EInputInstanceTheme.PROFILE}
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Имя"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      errors={errors.name}
                      touched={touched.name}
                      className={cls.nameInput}
                    />

                    <InputInstance
                      theme={EInputInstanceTheme.PROFILE}
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Фамилия"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      errors={errors.lastName}
                      touched={touched.lastName}
                      className={cls.lastNameInput}
                    />
                    {/* </div> */}

                    {/* <div className={cls.userCard_LnEInputs}> */}
                    <InputInstance
                      theme={EInputInstanceTheme.PROFILE}
                      type="text"
                      id="fatherName"
                      name="fatherName"
                      placeholder="Отчество"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fatherName}
                      errors={errors.fatherName}
                      touched={touched.fatherName}
                      className={cls.fatherNameInput}
                    />

                    <InputInstance
                      theme={EInputInstanceTheme.PROFILE}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email:"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      errors={errors.email}
                      touched={touched.email}
                      className={cls.emailInput}
                    />
                    {/* </div> */}

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
                  </div>

                  <Button
                    className={cls.userCard_saveBtn}
                    onClick={handleSaveProfilePhoto}
                    type="submit"
                    theme={ThemeButton.YELLOW}
                  >
                    Сохранить
                  </Button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
