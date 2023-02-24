import { FC, useState } from 'react';
import classNames from 'classnames';
import cls from './ServicesSection.module.scss';
import { Form, Formik } from 'formik';
import { InputInstance } from '@/shared/formElements/InputInstance';
import { EInputInstanceTheme } from '@/shared/formElements/InputInstance/ui/InputInstance';
import { Button } from '@/UI/Button';
import { ThemeButton } from '@/UI/Button/ui/Button';
import { ServicesDeleteIcon } from '@/assets/icons';
import { select1, select2 } from '@/data/ServicesData';

let cn = classNames.bind(cls);

interface ServicesSectionProps {
  className?: string;
}

export const ServicesSection: FC<ServicesSectionProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(cls.ServicesSection)}>
      <Formik
        initialValues={{
          power: '',
          quantity: '',
          weight: '',
          selectOfUsing: '',
          selectOfWeight: '',
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
              <div className={cn(cls.ServicesSection)}>
                <div className={cn(cls.ssectionInputContainer)}>
                  <InputInstance
                    theme={EInputInstanceTheme.SERVICES}
                    type="text"
                    id="power"
                    name="power"
                    placeholder="Например ААБ2лШВу  3х150(ож)-10"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.power}
                    errors={errors.power}
                    touched={touched.power}
                    labelText={'Марка кабеля с сечение'}
                    className={cls.markInput}
                  />
                </div>

                <div className={cn(cls.chooseTypeContainer)}>
                  <div className={cn(cls.chooseBtn)}>
                    <p>Введите мощность (кВт)</p>
                    <ServiceSectionToggleButtons
                      data={[
                        { id: 1, children: '1-фазная (220 В)' },
                        { id: 2, children: '3-фазная (380 В)' },
                      ]}
                    />
                  </div>

                  <div className={cn(cls.chooseTypeQnW)}>
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
                        labelText={'Кол-во метров'}
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
                        labelText={'Вес, кг'}
                        className={cls.weightInput}
                      />
                    </div>

                    <Button type="button" theme={ThemeButton.CLEAR}>
                      <ServicesDeleteIcon />
                    </Button>
                  </div>
                </div>

                <div>
                  <div>
                    <InputInstance
                      as="select"
                      theme={EInputInstanceTheme.SERVICES}
                      id="selectOfUsing"
                      name="selectOfUsing"
                      placeholder="Например 5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.selectOfUsing}
                      errors={errors.selectOfUsing}
                      touched={touched.selectOfUsing}
                      labelText={'Выберите применение'}
                      className={cls.weightInput}
                    >
                      {select1.map(({ id, title }) => (
                        <option key={id} value={id}>
                          {title}
                        </option>
                      ))}
                    </InputInstance>
                  </div>
                  <div>
                    <InputInstance
                      as="select"
                      theme={EInputInstanceTheme.SERVICES}
                      id="selectOfWeight"
                      name="selectOfWeight"
                      placeholder="Например 5"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.selectOfWeight}
                      errors={errors.selectOfWeight}
                      touched={touched.selectOfWeight}
                      labelText={'Вес, кг'}
                      className={cls.weightInput}
                    >
                      {select2.map(({ id, title }) => (
                        <option key={id} value={id}>
                          {title}
                        </option>
                      ))}
                    </InputInstance>
                  </div>
                </div>

                <div className={cn(cls.chooseBtn)}>
                  <p>Выберите количество жил</p>
                  <ServiceSectionToggleButtons
                    data={[
                      { id: 1, children: '1' },
                      { id: 2, children: '2 и более' },
                    ]}
                  />
                </div>

                <div className={cn(cls.chooseBtn)}>
                  <p>Выберите материал жилы</p>
                  <ServiceSectionToggleButtons
                    data={[
                      { id: 1, children: 'Медь (Cu)' },
                      { id: 2, children: 'Алюминий (алюм. сплав)' },
                    ]}
                  />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

// MOVE TO SEPARATE FILE ↓
// ********************************************
interface Data {
  id: number;
  children: string;
}

interface ServiceSectionToggleButtonsProps {
  data: Data[];
}

export const ServiceSectionToggleButtons: FC<ServiceSectionToggleButtonsProps> = (props) => {
  const [active, setActive] = useState(1);

  const { data } = props;

  const navigate = (id: number): void => {
    setActive(id);
  };

  return (
    <div className={cn(cls.buttons)}>
      {data.map((item) => {
        const isActive = active === item.id;
        return (
          <Button
            key={item.id}
            theme={ThemeButton.CLEAR}
            className={isActive ? cls.active : cls.default}
            onClick={() => navigate(item.id)}
          >
            {item.children}
          </Button>
        );
      })}
    </div>
  );
};
