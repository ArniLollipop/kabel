// packages
import { FC, useEffect, useState } from "react";
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
import { ServicesToggleButtons } from "../../ServicesToggleButtons";
import { useTranslation } from "react-i18next";
import { useHttp } from "@/hooks/useHttp";

let cn = classNames.bind(cls);

const select1 = [
  { id: 1, title: "В воздухе" },
  { id: 2, title: "В земле" },
];

interface ServicesSectionProps {
  className?: string;
}

const selectKvt = [10, 11, 12];

export const ServicesSection: FC<ServicesSectionProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const [metal, setMetal] = useState<string>("Медь (Cu)");
  const [voltage, setVoltage] = useState<string>("1-фазная (220 В)");
  const [location, setLocation] = useState<string>("В воздухе");
  const [powers, setPowers] = useState<any>();
  const [power, setPower] = useState<any>();
  const [res, setRes] = useState<any>();

  async function getPower() {
    try {
      const res = await useHttp().post("services/get_power/", {
        metal: metal === "Медь (Cu)" ? "медь" : "алюминий",
        voltage: voltage === "1-фазная (220 В)" ? "220v" : "380v",
        location: location === "В воздухе" ? "в воздухе" : "в земле",
      });
      setPowers(res.data.powers);
    } catch {}
  }

  async function getCalc() {
    try {
      const res = await useHttp().post("services/get_section_calculation/", {
        metal: metal === "Медь (Cu)" ? "медь" : "алюминий",
        voltage: voltage === "1-фазная (220 В)" ? "220v" : "380v",
        location: location === "В воздухе" ? "в воздухе" : "в земле",
        power: power,
      });
      setRes(res.data.section[0]);
    } catch (err) {}
  }

  useEffect(() => {
    if (metal && voltage && location) {
      getPower();
    }
    if (metal && voltage && location && power) {
      getCalc();
    }
  }, [metal, voltage, location, power]);

  return (
    <div className={cn(cls.ServicesSection)}>
      <Formik
        initialValues={{
          metal: "",
          voltage: "",
          location: "",
          power: "",
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
                  <div className={cn(cls.chooseBtn)}>
                    <label>{t("choiceMaterials")}</label>
                    <ServicesToggleButtons
                      setData={setMetal}
                      data={[
                        { id: 1, children: "Медь (Cu)" },
                        { id: 2, children: "Алюминий (алюм. сплав)" },
                      ]}
                    />
                  </div>
                </div>

                <div className={cn(cls.chooseTypeContainer)}>
                  <div className={cn(cls.chooseBtn)}>
                    <label>Выберите тип электросети</label>
                    <ServicesToggleButtons
                      setData={setVoltage}
                      data={[
                        { id: 1, children: "1-фазная (220 В)" },
                        { id: 2, children: "3-фазная (380 В)" },
                      ]}
                    />
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
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
                      onBlur={handleBlur}
                      value={location}
                      errors={errors.location}
                      touched={touched.location}
                      labeltext={"Выберите  способ прокладки"}
                      className={cls.weightInput}
                    >
                      {select1.map(({ title }) => (
                        <option key={title} value={title}>
                          {title}
                        </option>
                      ))}
                    </InputInstance>
                  </div>
                  <div className={cn(cls.chooseBtn)}>
                    <label>{t("choiceCount")}</label>
                    <ServicesToggleButtons data={[{ id: 1, children: "1" }]} />
                  </div>
                  <div>
                    <InputInstance
                      as="select"
                      theme={EInputInstanceTheme.SERVICES}
                      id="selectOfUsing"
                      name="selectOfUsing"
                      placeholder="Например 5"
                      onChange={(e) => setPower(parseFloat(e.target.value))}
                      onBlur={handleBlur}
                      value={power}
                      errors={errors.power}
                      touched={touched.power}
                      labeltext={"Введите мощность (кВт)"}
                      className={cls.weightInput}
                    >
                      {powers?.map((el: number) => {
                        return (
                          <option key={el} value={el}>
                            {el}
                          </option>
                        );
                      })}
                    </InputInstance>
                  </div>
                  <div>
                    <InputInstance
                      as="select"
                      theme={EInputInstanceTheme.SERVICES}
                      id="selectOfUsing"
                      name="selectOfUsing"
                      labeltext={"Результат:"}
                      onChange={(e) => setRes(parseFloat(e.target.value))}
                      value={res}
                      disabled
                    >
                      <option key={res} value={res}>
                        {res}
                      </option>
                    </InputInstance>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
