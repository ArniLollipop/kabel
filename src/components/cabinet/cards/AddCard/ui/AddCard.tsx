/** @format */

// packages
import { FC } from "react";
import { Form, Formik } from "formik";
import classNames from "classnames";

// assets
import cls from "./AddCard.module.scss";

// components
import { InputInstance } from "@/shared/formElements/InputInstance";
import { EInputInstanceTheme } from "@/shared/formElements/InputInstance/ui/InputInstance";
import { Button, ThemeButton } from "@/UI/Button/ui/Button";

// validation
import { addCardSchema } from "@/helpers/validation";
import { useTranslation } from "react-i18next";

// masks
import { maskForCreditCard, maskForCVV, maskForDate } from "@/helpers/masks";

let cn = classNames.bind(cls);

interface AddCardProps {
  className?: string;
  setShowAddCard: (value: boolean) => void;
}

export const AddCard: FC<AddCardProps> = (props) => {
  const { t } = useTranslation();
  const { className, setShowAddCard } = props;

  return (
    <div className={cn(cls.AddCard, className)}>
      <Formik
        initialValues={{
          numberOfCard: "",
          dateOfCard: "",
          CVV: "",
          nameOfCardOwner: "",
        }}
        validationSchema={addCardSchema}
        onSubmit={(values) => {
          console.log("values is: ", {
            ...values,
          });
        }}>
        {({ values, touched, errors, handleChange, handleBlur }) => {
          const handleSaveAddOrDelivery = () => {
            const { numberOfCard, dateOfCard, CVV, nameOfCardOwner } = touched;
            if (
              numberOfCard &&
              dateOfCard &&
              CVV &&
              nameOfCardOwner &&
              !errors?.numberOfCard &&
              !errors?.dateOfCard &&
              !errors?.CVV &&
              !errors?.nameOfCardOwner
            ) {
              setShowAddCard(false);
            }
          };

          return (
            <div className={cls.container}>
              <p>{t("saveCard")}</p>
              <Form>
                <InputInstance
                  mask={maskForCreditCard}
                  theme={EInputInstanceTheme.PROFILE}
                  type='text'
                  id='numberOfCard'
                  name='numberOfCard'
                  placeholder={t("cardNumber") || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.numberOfCard}
                  errors={errors.numberOfCard}
                  touched={touched.numberOfCard}
                  className={cls.numberOfCardInput}
                />

                <div className={cls.container_DaNCVVInputs}>
                  <InputInstance
                    mask={maskForDate}
                    theme={EInputInstanceTheme.PROFILE}
                    type='text'
                    id='dateOfCard'
                    name='dateOfCard'
                    placeholder='MM/YY'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dateOfCard}
                    errors={errors.dateOfCard}
                    touched={touched.dateOfCard}
                    className={cls.dateOfCardInput}
                  />

                  <InputInstance
                    mask={maskForCVV}
                    theme={EInputInstanceTheme.PROFILE}
                    type='text'
                    id='CVV'
                    name='CVV'
                    placeholder='CVV'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.CVV}
                    errors={errors.CVV}
                    touched={touched.CVV}
                    className={cls.CVVInput}
                  />
                </div>

                <InputInstance
                  theme={EInputInstanceTheme.PROFILE}
                  type='text'
                  id='nameOfCardOwner'
                  name='nameOfCardOwner'
                  placeholder={t("maintainerCard") || "Имя владельца карты"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nameOfCardOwner}
                  errors={errors.nameOfCardOwner}
                  touched={touched.nameOfCardOwner}
                  className={cls.nameOfCardOwnerInput}
                />

                <div className={cls.container_BtnContainer}>
                  <Button
                    theme={ThemeButton.CANCEL}
                    onClick={() => setShowAddCard(false)}
                    type='button'>
                    {t("otmena")}
                  </Button>

                  <Button
                    className={cls.container_CancelBtn}
                    onClick={handleSaveAddOrDelivery}
                    type='submit'
                    theme={ThemeButton.YELLOW}>
                    {t("saveMent")}
                  </Button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};
