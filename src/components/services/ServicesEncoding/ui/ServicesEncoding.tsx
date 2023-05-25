import { FC, useState } from "react";
import classNames from "classnames";
import cls from "./ServicesEncoding.module.scss";
import { Form, Formik } from "formik";
import { InputInstance } from "@/shared/formElements/InputInstance";
import { EInputInstanceTheme } from "@/shared/formElements/InputInstance/ui/InputInstance";
import { useTranslation } from "next-i18next";
import { useHttp } from "@/hooks/useHttp";
import Image from "next/image";
import ImageMockProduct from "@/assets/images/ImageMockProduct.png";
import nullImg from "@/assets/images/nullImg.png";

let cn = classNames.bind(cls);

interface ServicesEncodingProps {
  className?: string;
}

export const ServicesEncoding: FC<ServicesEncodingProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const [result, setResult] = useState<any>();

  async function getEncoding(cable_type: string) {
    try {
      const res = await useHttp().post("services/get_decoding/", {
        cable_type: cable_type,
      });
      setResult(res.data.results);
    } catch {}
  }

  return (
    <div className={cn(cls.ServicesEncoding)}>
      <Formik
        initialValues={{
          decoding: "",
        }}
        onSubmit={(values) => {
          getEncoding(values.decoding);
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
                placeholder={t("writeCabel") || "Введите марку кабеля"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.decoding}
                errors={errors.decoding}
                touched={touched.decoding}
                className={cls.decoding}
              />
              {result?.map((res: any) => {
                return (
                  <div className={cls.encoding}>
                    <Image
                      src={res?.image || nullImg}
                      alt="asd"
                      className={cls.encodingImage}
                    />
                    <div>
                      {res.decodings?.map((el: any) => {
                        return (
                          <div className={cls.encodingFlex}>
                            <h4 className={cls.key}>{el.key}</h4>
                            <br />
                            <p>{el.value}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </Form>
          );
        }}
      </Formik>
      {result && <h2>{t("description")}</h2>}
      <p className={cls.description_text}>{t("alotText1")}</p>
      <p className={cls.description_text}>{t("alotText2")}</p>
    </div>
  );
};
