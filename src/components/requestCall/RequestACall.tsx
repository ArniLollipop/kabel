import { FC } from "react";
import cls from "./RequestACall.module.scss";
import { Form, Formik } from "formik";
import { InputInstance } from "@/shared/formElements/InputInstance";
import { EInputInstanceTheme } from "@/shared/formElements/InputInstance/ui/InputInstance";
import { maskForPhone } from "@/helpers/masks";
import { Button } from "@/UI/Button";
import { ThemeButton } from "@/UI/Button/ui/Button";
import { requestACallSchema } from "@/helpers/validation";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

interface RequestACallProps {
  className?: string;
  setIsOpen: (value: boolean) => void;
}

export const RequestACall: FC<RequestACallProps> = (props) => {
  const { className, setIsOpen } = props;
  const { t } = useTranslation();

  return (
    <div className={cls.RequestACall}>
      <Formik
        initialValues={{
          requestACallName: "",
          requestACallPhoneNumber: "",
          requestACallTextarea: "",
        }}
        validationSchema={requestACallSchema}
        onSubmit={(values) => {
          console.log("values is: ", {
            ...values,
            requestACallPhoneNumber: values.requestACallPhoneNumber.replace(
              /\D+/g,
              ""
            ),
          });
          // if it is success
          toast("Заказ на звонок получен!", {
            hideProgressBar: true,
            autoClose: 2000,
            type: "success",
          });

          // if it is error
          toast("Ошибка!", {
            hideProgressBar: true,
            autoClose: 2000,
            type: "error",
          });
        }}
      >
        {({ values, touched, errors, handleChange, handleBlur }) => {
          const handleSaveAddOrDelivery = () => {
            const { requestACallName, requestACallPhoneNumber } = touched;
            if (
              requestACallName &&
              requestACallPhoneNumber &&
              !errors?.requestACallName &&
              !errors?.requestACallPhoneNumber
            ) {
              setIsOpen(false);
            }
          };

          return (
            <>
              <Form>
                <InputInstance
                  theme={EInputInstanceTheme.PROFILE}
                  type="text"
                  id="requestACallName"
                  name="requestACallName"
                  placeholder="Имя"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // use actual value instead this ↓
                  value={values.requestACallName}
                  errors={errors.requestACallName}
                  touched={touched.requestACallName}
                  className={cls.requestACallName}
                />

                <InputInstance
                  mask={maskForPhone}
                  theme={EInputInstanceTheme.PROFILE}
                  type="text"
                  id="requestACallPhoneNumber"
                  name="requestACallPhoneNumber"
                  placeholder="+7 (___) ___-__-__"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // use actual value instead this ↓
                  value={values.requestACallPhoneNumber}
                  errors={errors.requestACallPhoneNumber}
                  touched={touched.requestACallPhoneNumber}
                  className={cls.requestACallPhoneNumber}
                  labeltext={"Телефон"}
                />

                <InputInstance
                  theme={EInputInstanceTheme.PROFILE}
                  as="textarea"
                  id="requestACallTextarea"
                  name="requestACallTextarea"
                  placeholder="Написать..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.requestACallTextarea}
                  errors={errors.requestACallTextarea}
                  touched={touched.requestACallTextarea}
                  className={cls.requestACallTextarea}
                  labeltext={"Сообщение"}
                />

                <Button
                  onClick={handleSaveAddOrDelivery}
                  type="submit"
                  className={cls.requestACallBtn}
                  theme={ThemeButton.CLEAR}
                >
                  {t("Отправить")}
                </Button>
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};
