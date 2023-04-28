import { FC } from 'react';
import classNames from 'classnames';
import cls from './ServicesEncoding.module.scss';
import { Form, Formik } from 'formik';
import { InputInstance } from '@/shared/formElements/InputInstance';
import { EInputInstanceTheme } from '@/shared/formElements/InputInstance/ui/InputInstance';

let cn = classNames.bind(cls);

interface ServicesEncodingProps {
  className?: string;
}

export const ServicesEncoding: FC<ServicesEncodingProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(cls.ServicesEncoding)}>
      <Formik
        initialValues={{
          decoding: '',
        }}
        onSubmit={(values) => {
          console.log('values is: ', {
            ...values,
          });
        }}
      >
        {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
          return (
            <Form>
              <InputInstance
                theme={EInputInstanceTheme.SERVICES}
                type="text"
                id="decoding"
                name="decoding"
                placeholder="Введите марку кабеля"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.decoding}
                errors={errors.decoding}
                touched={touched.decoding}
                className={cls.decoding}
              />
              <h4>Описание</h4>
              <br />
              <p>
                Что означает маркировка кабеля или провода? Маркировка всех кабельно-проводниковых
                изделий может быть установлена строго по правилам ГОСТ, или по общепринятым
                стандартам ТУ. Информация, которая содержится в маркировке кабеля или провода,
                говорит нам о том, из какого материала сделаны токопроводящие жилы, их изоляция и
                оболочка, о характере изоляции и оболочки, и состоит из буквенно-цифровых символов.
                К примеру, расшифровка кабеля ВВГ включает такие параметры как изоляция жил, состав
                оболочки и наличие защитных покровов. Указывая в начале названия марки кабеля букву
                «А» – АВВГ, производитель сообщает, что жилы в данном кабеле алюминиевые. Цифрами
                указывается рабочее напряжение.
              </p>
              <br />
              <p>
                Преимущества использования нашего онлайн-сервиса: При использовании онлайн-сервиса
                расшифровка проводов и кабеля не займет у вас много времени. Нет необходимости
                искать материал в справочниках, таблицах расшифровки и каталогах производителей –
                все происходит автоматически. Наберите нужную марку в поисковую строку и выберите из
                предложенного списка подходящий кабель/провод. Результат готов! Найти нужную
                расшифровку можно как для продукции российского производства, так и импортного
                Информация сервиса носит справочно-информационный характер.
              </p>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
