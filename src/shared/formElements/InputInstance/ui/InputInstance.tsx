// hooks
import { FC, FocusEvent, InputHTMLAttributes } from 'react';

// assets
import cls from './InputInstance.module.scss';

// packages
import classNames from 'classnames';
import { Field, FieldProps } from 'formik';

// types
import MaskedInput from 'react-text-mask';

let cn = classNames.bind(cls);

interface IInputInstanceProps extends InputHTMLAttributes<HTMLInputElement> {
  password?: string;
  labelText?: string;
  touched?: boolean;
  errors?: string;
  className?: string;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  mask?: Array<string | RegExp> | false;
  theme?: EInputInstanceTheme;
  as?:
    | React.ComponentType<FieldProps['field']>
    | string
    | React.ComponentType
    | React.ForwardRefExoticComponent<any>;
}

export enum EInputInstanceTheme {
  AUTH = 'auth',
}

export const InputInstance: FC<IInputInstanceProps> = ({ name, id, ...props }) => {
  const { labelText, children, as, touched, errors, mask, theme, className, password } = props;

  const inputLabel = labelText && (
    <label htmlFor={id} className={''}>
      {labelText}
    </label>
  );

  if (as) {
    return (
      <>
        {inputLabel}
        <Field
          name={name}
          {...props}
          touched={touched === true ? 1 : 0}
          className={cn(
            cls.auth,
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
          name={name}
          touched={touched === true ? 1 : 0}
          className={cn(
            cls.auth,
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
              className={cn(
                cls.auth,
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
          touched={touched === true ? 1 : 0}
          className={cn(
            password ? cls.forPasswordIcon : cls.auth,
            className,
            password ? null : touched && errors ? cls.errorBorder : null,
            theme && cls[theme]
          )}
        />
      </>
    );
  }
};
