/** @format */

// packages
import { FC, useEffect, useState } from "react";
import classNames from "classnames";

// assets
import cls from "./ServicesWeight.module.scss";
import { Form, Formik } from "formik";

// components
import { InputInstance } from "@/shared/formElements/InputInstance";
import { Button } from "@/UI/Button";
import { EInputInstanceTheme } from "@/shared/formElements/InputInstance/ui/InputInstance";
import { ThemeButton } from "@/UI/Button/ui/Button";
import { IconSearch } from "@/assets/icons/IconSearchComponent";
import { ServiceService } from "@/services/Service.service";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { setServicesWeight } from "@/store/slices/ProductSlice";
import { useHttp } from "@/hooks/useHttp";
import { useTranslation } from "react-i18next";

let cn = classNames.bind(cls);

interface ServicesWeightProps {
  className?: string;
}

export const ServicesWeight: FC<ServicesWeightProps> = (props) => {
  const { className } = props;
  const { servicesWeight } = useAppSelector((state) => state.ProductSlice);
  const dispatch = useAppDispatch();
  const [tables, setTables] = useState<any>();
  const [table, setTable] = useState<any>();
  const [ind, setInd] = useState<number>(0);
  const [res, setRes] = useState<any>();

  async function getWeight() {
    try {
      const res = await useHttp().post("/services/get_weight/");
      setTables(res.data.results);
      setTable(res.data.results[0]);
    } catch {}
  }

  async function searchWeight(cable_type: any) {
    if (cable_type.length > 0) {
      try {
        const res = await useHttp().post("/services/get_weight/", {
          cable_type: cable_type,
          table_name: table.name,
        });
        setRes(res.data.results);
      } catch {}
    } else {
      setRes("");
    }
  }

  const { t } = useTranslation();

  useEffect(() => {
    getWeight();
  }, []);

  return (
    <>
      <div className={cls.tablesScroll}>
        {tables?.map((el: any, index: number) => {
          return (
            <>
              <input
                type='radio'
                name='table'
                id={el.name}
                className={cls.hidden}
                checked={index === ind}
              />
              <label
                htmlFor={el.name}
                className='sm:text-[20px] text-sm'
                onClick={() => {
                  setTable(el);
                  setInd(index);
                }}>
                {el.name}
              </label>
            </>
          );
        })}
      </div>
      <Formik
        initialValues={{
          cable_type: "",
        }}
        onSubmit={(values) => {
          searchWeight(values.cable_type);
        }}>
        {({ values, touched, errors, handleChange, handleBlur }) => {
          const getCables = async () => {
            const { cable_type } = values;
            const cableType =
              cable_type.charAt(0).toUpperCase() + cable_type.slice(1);
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
                  type='text'
                  id='cable_type'
                  name='cable_type'
                  placeholder={t("labelFind") || "Поиск"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cable_type}
                  errors={errors.cable_type}
                  touched={touched.cable_type}
                  className={cls.search}
                />
                <Button
                  onClick={getCables}
                  className={cls.searchBtn}
                  theme={ThemeButton.CLEAR}>
                  <IconSearch />
                </Button>
              </Form>
              <div className={cls.info}>
                <p>{t("naming")}</p>
                <p className={cls.center}>Вес 1 км кабеля, 660 В</p>
                <p className={cls.center}>Вес 1 км кабеля, 1000 В</p>
              </div>
              <div className={cls.itemsContainer}>
                {!res && table
                  ? table.data?.map((item: any) => {
                      const { id, cable_type, weight_660v, weight_1000v } =
                        item;
                      return (
                        <div key={id} className={cls.items}>
                          <p className={cls.widthLong}>{cable_type} кг</p>
                          <p className={cls.center}>{weight_660v} кг</p>
                          <p className={cls.center}>{weight_1000v}</p>
                        </div>
                      );
                    })
                  : res?.map((item: any) => {
                      const { id, cable_type, weight_660v, weight_1000v } =
                        item;
                      return (
                        <div key={id} className={cls.items}>
                          <p>{cable_type} кг</p>
                          <p className={cls.center}>{weight_660v} кг</p>
                          <p className={cls.center}>{weight_1000v}</p>
                        </div>
                      );
                    })}
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
};
