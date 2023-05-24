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
import { useTranslation } from "next-i18next";
import { useHttp } from "@/hooks/useHttp";

interface RequestACallProps {
  className?: string;
  setIsOpen: (value: boolean) => void;
}

export const RequestACall: FC<RequestACallProps> = (props) => {
  const { className, setIsOpen } = props;
  const { t } = useTranslation();

  async function callRequest() {}

  return (
    <div className={cls.RequestACall}>
      <Formik
        initialValues={{
          requestACallName: "",
          requestACallPhoneNumber: "",
          requestACallTextarea: "",
        }}
        validationSchema={requestACallSchema}
        onSubmit={async (values) => {
          try {
            const res = await useHttp().post("main/call_requests/", {
              full_name: values.requestACallName,
              phone_number: values.requestACallPhoneNumber,
              message: values.requestACallTextarea,
            });
            toast(t("getPhone"), {
              hideProgressBar: true,
              autoClose: 2000,
              type: "success",
            });
            values.requestACallName = "";
            values.requestACallPhoneNumber = "";
            values.requestACallTextarea = "";
          } catch {
            toast(t("error") + "!", {
              hideProgressBar: true,
              autoClose: 2000,
              type: "error",
            });
          }
          // if it is success

          // if it is error
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
                  placeholder={t("name") || ""}
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
