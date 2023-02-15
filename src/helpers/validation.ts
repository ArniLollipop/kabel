import * as Yup from 'yup';

export const authorizationSchema = Yup.object().shape({
  name: Yup.string().required('Обязательное поле'),
  phoneNumber: Yup.string().required('Обязательное поле'),
});
