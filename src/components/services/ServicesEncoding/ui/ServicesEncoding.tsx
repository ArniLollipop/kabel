import { FC } from "react";
import classNames from "classnames";
import cls from "./ServicesEncoding.module.scss";
import { Form, Formik } from "formik";
import { InputInstance } from "@/shared/formElements/InputInstance";
import { EInputInstanceTheme } from "@/shared/formElements/InputInstance/ui/InputInstance";
import { useTranslation } from "react-i18next";

let cn = classNames.bind(cls);

interface ServicesEncodingProps {
  className?: string;
}

export const ServicesEncoding: FC<ServicesEncodingProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={cn(cls.ServicesEncoding)}>
      <Formik
        initialValues={{
          decoding: "",
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
              <h4>{t("description")}</h4>
              <br />
              <p>{t("alotText1")}</p>
              <br />
              <p>{t("alotText2")}</p>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
