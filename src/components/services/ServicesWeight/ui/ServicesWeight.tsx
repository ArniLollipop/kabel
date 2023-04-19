// packages
import { FC } from 'react';
import classNames from 'classnames';

// assets
import cls from './ServicesWeight.module.scss';
import { Form, Formik } from 'formik';

// components
import { InputInstance } from '@/shared/formElements/InputInstance';
import { Button } from '@/UI/Button';
import { EInputInstanceTheme } from '@/shared/formElements/InputInstance/ui/InputInstance';
import { ThemeButton } from '@/UI/Button/ui/Button';
import { IconSearch } from '@/assets/icons/IconSearchComponent';
import { ServiceService } from '@/services/Service.service';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { setServicesWeight } from '@/store/slices/ProductSlice';

let cn = classNames.bind(cls);

interface ServicesWeightProps {
  className?: string;
}

export const ServicesWeight: FC<ServicesWeightProps> = (props) => {
  const { className } = props;
  const { servicesWeight } = useAppSelector((state) => state.ProductSlice);
  const dispatch = useAppDispatch();

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
          const res = await ServiceService().getServiceWeight(cableType);
          if (res.data.results) {
            dispatch(setServicesWeight(res.data.results));
          }
        };

        return (
          <div className={cls.ServicesWeight}>
            <Form>
              <InputInstance
                theme={EInputInstanceTheme.SERVICES}
                type="text"
                id="cable_type"
                name="cable_type"
                placeholder="Поиск"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cable_type}
                errors={errors.cable_type}
                touched={touched.cable_type}
                className={cls.search}
              />
              <Button onClick={getCables} className={cls.searchBtn} theme={ThemeButton.CLEAR}>
                <IconSearch />
              </Button>
            </Form>
            <div className={cls.info}>
              <p>Наименование</p>
              <p>Вес 1 км кабеля, 660 В</p>
              <p>Вес 1 км кабеля, 1000 В</p>
            </div>
            <div className={cls.itemsContainer}>
              {servicesWeight &&
                // @ts-ignore
                servicesWeight?.map((item: any) => {
                  const { id, cable_type, weight_660v, weight_1000v } = item;
                  return (
                    <div key={id} className={cls.items}>
                      <p>{cable_type} кг</p>
                      <p>{weight_660v} кг</p>
                      <p>{weight_1000v}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
