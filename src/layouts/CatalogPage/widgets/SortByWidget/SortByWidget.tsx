import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./SortByWidget.module.scss";
import { Button, ThemeButton } from "@/UI/Button/ui/Button";
import { Field } from "formik";

const cn = classNames.bind(cls);

interface SortByWidgetProps {
  className?: string;
}

export const SortByWidget: FC<SortByWidgetProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(cls.SortByWidget)}>
      <label htmlFor="sortWidget">Сортировать по:</label>

      <Field
        component="select"
        id="sortWidget"
        name="sortWidget"
        multiple={false}
        className={cls.SortByWidget_selector}
      >
        <option value="cost" className={cls.SortByWidget_option}>
          Возрастанию цены
        </option>
        <option value="-cost" className={cls.SortByWidget_option}>
          Убыванию цены
        </option>
      </Field>
    </div>
  );
};
