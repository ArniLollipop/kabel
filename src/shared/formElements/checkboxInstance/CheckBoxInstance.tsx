import { Field } from "formik";
import { FC, InputHTMLAttributes } from "react";
import cls from "./CheckBoxInstance.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(cls);
interface CheckBoxInstanceProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  text: string;
  name: string;
  id: string;
  value: string;
}

export const CheckBoxInstance: FC<CheckBoxInstanceProps> = (props) => {
  const { id, name, text, className, value } = props;

  return (
    <label className={cn(cls.control, cls.control_checkbox, className)}>
      {text}

      <Field type="checkbox" {...props} />
      <div className={cls.control_indicator}></div>
    </label>
  );
};
