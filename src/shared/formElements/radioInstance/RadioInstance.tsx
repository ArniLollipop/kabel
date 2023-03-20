import { FC, InputHTMLAttributes } from "react";
import classNames from "classnames/bind";
import cls from "./RadioInstance.module.scss";
import { Field } from "formik";

const cn = classNames.bind(cls);

interface RadioInstanceProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  text: string;
}

export const RadioInstance: FC<RadioInstanceProps> = (props) => {
  const { className, text } = props;

  return (
    <label className={cn(cls.control, cls.control_checkbox, className)}>
      {text}
      <Field type="radio" {...props} />
      <div className={cn(cls.control_indicator)}></div>
    </label>
  );
};
