// packages
import { FC, useState } from "react";
import classNames from "classnames";
import { Form, Formik } from "formik";

// assets
import cls from "./ServicesSection.module.scss";
import { ServicesDeleteIcon } from "@/assets/icons";

// components
import { InputInstance } from "@/shared/formElements/InputInstance";
import { Button } from "@/UI/Button";
import { ThemeButton } from "@/UI/Button/ui/Button";
import { EInputInstanceTheme } from "@/shared/formElements/InputInstance/ui/InputInstance";

// data
import { select1, select2 } from "@/data/ServicesData";
import { ServicesToggleButtons } from "../../ServicesToggleButtons";
import { useTranslation } from "react-i18next";

let cn = classNames.bind(cls);

interface ServicesSectionProps {
  className?: string;
}

export const ServicesSection: FC<ServicesSectionProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={cn(cls.ServicesSection)}>
      <Formik
        initialValues={{
          power: "",
          quantity: "",
          weight: "",
          selectOfUsing: "",
          selectOfWeight: "",
        }}
        onSubmit={(values) => {
          console.log("values is: ", {
            ...values,
          });
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          return (
            <Form>
              <div className={cn(cls.ServicesSection)}>
                <div className={cn(cls.SSectionInputContainer)}>
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
                    labeltext={"Марка кабеля с сечение"}
                    className={cls.markInput}
                  />
                </div>

                <div className={cn(cls.chooseTypeContainer)}>
                  <div className={cn(cls.chooseBtn)}>
                    <label>Введите мощность (кВт)</label>
                    <ServicesToggleButtons
                      data={[
                        { id: 1, children: "1-фазная (220 В)" },
                        { id: 2, children: "3-фазная (380 В)" },
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
                        labeltext={"Кол-во метров"}
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
                        labeltext={"Вес, кг"}
                        className={cls.weightInput}
                      />
                    </div>

                    <Button type="button" theme={ThemeButton.CLEAR}>
                      <ServicesDeleteIcon />
                    </Button>
                  </div>
                </div>

                <div className={cn(cls.chooseSelectContainer)}>
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
                      labeltext={"Выберите применение"}
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
                      labeltext={"Вес, кг"}
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
                  <label>{t("choiceCount")}</label>
                  <ServicesToggleButtons
                    data={[
                      { id: 1, children: "1" },
                      { id: 2, children: "2 и более" },
                    ]}
                  />
                </div>

                <div className={cn(cls.chooseBtn)}>
                  <label>{t("choiceMaterials")}</label>
                  <ServicesToggleButtons
                    data={[
                      { id: 1, children: "Медь (Cu)" },
                      { id: 2, children: "Алюминий (алюм. сплав)" },
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
