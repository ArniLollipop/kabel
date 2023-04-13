// packages
import { FC } from 'react';
import classNames from 'classnames';

// assets
import cls from './ServicesWeight.module.scss';
import { Form, Formik } from 'formik';
import { ServicesDeleteIcon } from '@/assets/icons';

// components
import { InputInstance } from '@/shared/formElements/InputInstance';
import { Button } from '@/UI/Button';
import { EInputInstanceTheme } from '@/shared/formElements/InputInstance/ui/InputInstance';
import { ThemeButton } from '@/UI/Button/ui/Button';
import { ServicesToggleButtons } from '../../ServicesToggleButtons';
import { PdfPrintShareFeatures } from '../../PdfPrintShareFeatures';

let cn = classNames.bind(cls);

interface ServicesWeightProps {
  className?: string;
}

export const ServicesWeight: FC<ServicesWeightProps> = (props) => {
  const { className } = props;

  return (
    <Formik
      initialValues={{
        mark: '',
        quantity: '',
        weight: '',
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
            <div className={cn(cls.ServicesWeight)}>
              <div className={cn(cls.unit)}>
                <h4>Единица измерения</h4>

                <div className={cn(cls.unitToggleBtnContainer)}>
                  <ServicesToggleButtons
                    weight={'weight'}
                    data={[
                      { id: 1, children: 'Метры' },
                      { id: 2, children: 'Килограммы' },
                    ]}
                  />
                </div>
              </div>

              <div className={cn(cls.inputsContainer)}>
                <div>
                  <InputInstance
                    theme={EInputInstanceTheme.SERVICES}
                    type="text"
                    id="mark"
                    name="mark"
                    placeholder="Например ААБ2лШВу  3х150(ож)-10"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mark}
                    errors={errors.mark}
                    touched={touched.mark}
                    labeltext={'Марка кабеля с сечение'}
                    className={cls.markInput}
                  />
                </div>

                <div>
                  <InputInstance
                    theme={EInputInstanceTheme.SERVICES}
                    type="number"
                    id="quantity"
                    name="quantity"
                    placeholder="Например 100"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.quantity}
                    errors={errors.quantity}
                    touched={touched.quantity}
                    labeltext={'Кол-во метров'}
                    className={cls.quantityInput}
                  />
                </div>

                <div>
                  <InputInstance
                    theme={EInputInstanceTheme.SERVICES}
                    type="number"
                    id="weight"
                    name="weight"
                    placeholder="Например 5"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.weight}
                    errors={errors.weight}
                    touched={touched.weight}
                    labeltext={'Вес, кг'}
                    className={cls.weightInput}
                  />
                </div>

                <Button type="button" theme={ThemeButton.CLEAR}>
                  <ServicesDeleteIcon />
                </Button>
              </div>

              <div className={cn(cls.addCableBtn)}>
                <Button className={cn(cls.addCableBGIcon)} type="button" theme={ThemeButton.CLEAR}>
                  Добавить кабель
                </Button>
                <p>Общая длина кабеля: </p>
                <p>Общий вес кабеля: </p>

                {/* <div className={cn(cls.resultContainer)}>
                SHOW RESULT HERE
                </div> */}
              </div>

              <PdfPrintShareFeatures />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};