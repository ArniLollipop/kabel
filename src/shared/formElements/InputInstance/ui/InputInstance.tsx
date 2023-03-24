// hooks
import { FC, FocusEvent, InputHTMLAttributes } from "react";

// assets
import cls from "./InputInstance.module.scss";

// packages
import classNames from "classnames";
import { Field, FieldProps } from "formik";

// types
import MaskedInput from "react-text-mask";

let cn = classNames.bind(cls);

interface IInputInstanceProps extends InputHTMLAttributes<HTMLInputElement> {
  password?: string;
  labeltext?: string;
  touched?: boolean;
  errors?: string;
  className?: string;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  mask?: Array<string | RegExp> | false;
  theme?: EInputInstanceTheme;
  as?:
    | React.ComponentType<FieldProps["field"]>
    | string
    | React.ComponentType
    | React.ForwardRefExoticComponent<any>;
  ref?: any;
}

export enum EInputInstanceTheme {
  AUTH = "auth",
  SERVICES = "services",
  PROFILE = "profile",
}

export const InputInstance: FC<IInputInstanceProps> = ({ name, id, ...props }) => {
  const { labeltext, children, as, touched, errors, mask, theme, className, password, ref } = props;

  const inputLabel = labeltext && (
    <label htmlFor={id} className={""}>
      {labeltext}
    </label>
  );

  if (as) {
    return (
      <>
        {inputLabel}
        <Field
          name={name}
          {...props}
          ref={ref}
          touched={touched === true ? 1 : 0}
          className={cn(
            cls.InputInstanceClass,
            className,
            touched && errors ? cls.errorBorder : null,
            theme && cls[theme]
          )}
          as={as}
        >
          {children}
        </Field>
      </>
    );
  } else if (mask) {
    return (
      <>
        {inputLabel}
        <Field
          {...props}
          ref={ref}
          name={name}
          touched={touched === true ? 1 : 0}
          className={cn(
            cls.InputInstanceClass,
            className,
            touched && errors ? cls.errorBorder : null,
            theme && cls[theme]
          )}
        >
          {({ field }: FieldProps) => (
            <MaskedInput
              {...field}
              {...props}
              // @ts-ignore
              touched={touched === true ? 1 : 0}
              mask={mask}
              name={name}
              ref={ref}
              className={cn(
                cls.InputInstanceClass,
                className,
                touched && errors ? cls.errorBorder : null,
                theme && cls[theme]
              )}
            />
          )}
        </Field>
      </>
    );
  } else {
    return (
      <>
        {inputLabel}
        <Field
          {...props}
          name={name}
          ref={ref}
          touched={touched === true ? 1 : 0}
          className={cn(
            cls.InputInstanceClass,
            password && cls.forPasswordIcon,
            className,
            password ? null : touched && errors ? cls.errorBorder : null,
            theme && cls[theme]
          )}
        />
      </>
    );
  }
};
