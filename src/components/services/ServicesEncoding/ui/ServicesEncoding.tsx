// @ts-nocheck
import { FC, useState } from 'react';
import classNames from 'classnames';
import cls from './ServicesEncoding.module.scss';
import { Form, Formik } from 'formik';
import { InputInstance } from '@/shared/formElements/InputInstance';
import { EInputInstanceTheme } from '@/shared/formElements/InputInstance/ui/InputInstance';
import { Button } from '@/UI/Button';
import { IconSearch } from '@/assets/icons/IconSearchComponent';
import { ThemeButton } from '@/UI/Button/ui/Button';
import { ServiceService } from '@/services/Service.service';
import { useAppDispatch } from '@/hooks/store';
import DefaultImg from '../../../../assets/images/nullImg.webp';
import Image from 'next/image';

let cn = classNames.bind(cls);

interface ServicesEncodingProps {
  className?: string;
}

export const ServicesEncoding: FC<ServicesEncodingProps> = (props) => {
  const { className } = props;
  const [decodingCable, setDecodingCable] = useState();
  console.log('decodingCable is: ', decodingCable);

  return (
    <Formik
      initialValues={{
        cable_type: '',
      }}
      onSubmit={(values) => {
        console.log('values is: ', {
          ...values,
        });
      }}
    >
      {({ values, touched, errors, handleChange, handleBlur }) => {
        const getCables = async () => {
          const { cable_type } = values;
          const cableType = cable_type.charAt(0).toUpperCase() + cable_type.slice(1);
          const { data } = await ServiceService().getServiceDecoding(cableType);
          setDecodingCable(data.results[0]);
        };

        return (
          <div className={cn(cls.ServicesEncoding)}>
            <Form>
              <InputInstance
                theme={EInputInstanceTheme.SERVICES}
                type="text"
                id="cable_type"
                name="cable_type"
                placeholder="Введите марку кабеля"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cable_type}
                errors={errors.cable_type}
                touched={touched.cable_type}
                className={cls.decoding}
              />

              <Button onClick={getCables} className={cls.searchBtn} theme={ThemeButton.CLEAR}>
                <IconSearch />
              </Button>

              {decodingCable && (
                <div className={cls.decodingInfoContainer}>
                  <Image
                    src={decodingCable?.image || DefaultImg}
                    alt={'img'}
                    width={200}
                    height={200}
                  />
                  <div className={cls.infoContainer}>
                    {decodingCable?.decodings.map((item: any) => {
                      const { id, key, value } = item;
                      return (
                        <p key={id} className={cls.item}>
                          <span className={cls.valueKey}>{key}</span>
                          <span className={cls.value}>{value}</span>
                        </p>
                      );
                    })}
                  </div>
                </div>
              )}
            </Form>

            <h4>Описание</h4>
            <br />
            <p>
              Что означает маркировка кабеля или провода? Маркировка всех кабельно-проводниковых
              изделий может быть установлена строго по правилам ГОСТ, или по общепринятым стандартам
              ТУ. Информация, которая содержится в маркировке кабеля или провода, говорит нам о том,
              из какого материала сделаны токопроводящие жилы, их изоляция и оболочка, о характере
              изоляции и оболочки, и состоит из буквенно-цифровых символов. К примеру, расшифровка
              кабеля ВВГ включает такие параметры как изоляция жил, состав оболочки и наличие
              защитных покровов. Указывая в начале названия марки кабеля букву «А» – АВВГ,
              производитель сообщает, что жилы в данном кабеле алюминиевые. Цифрами указывается
              рабочее напряжение.
            </p>
            <br />
            <p>
              Преимущества использования нашего онлайн-сервиса: При использовании онлайн-сервиса
              расшифровка проводов и кабеля не займет у вас много времени. Нет необходимости искать
              материал в справочниках, таблицах расшифровки и каталогах производителей – все
              происходит автоматически. Наберите нужную марку в поисковую строку и выберите из
              предложенного списка подходящий кабель/провод. Результат готов! Найти нужную
              расшифровку можно как для продукции российского производства, так и импортного
              Информация сервиса носит справочно-информационный характер.
            </p>
          </div>
        );
      }}
    </Formik>
  );
};
