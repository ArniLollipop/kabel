// hooks
import { FC, ReactNode } from 'react';

// assets
import global from '../../FormElementsStyle.module.scss';

// packages
import classNames from 'classnames';
import { Field, FieldProps } from 'formik';

// types
import { IInput } from '../../types';

let cn = classNames.bind(global);

interface IInputInstanceProps extends IInput {
  children?: ReactNode;
  as?:
    | React.ComponentType<FieldProps['field']>
    | string
    | React.ComponentType
    | React.ForwardRefExoticComponent<any>;
}

export const InputInstance: FC<IInputInstanceProps> = ({ name, id, ...props }) => {
  const { labelText, children, as, touched } = props;

  const inputLabel = labelText && (
    <label htmlFor={id} className={''}>
      {labelText}
    </label>
  );

  return (
    <div>
      {inputLabel}
      {as ? (
        <Field
          name={name}
          {...props}
          touched={touched === true ? 1 : 0}
          className={cn(global.inputInstance)}
        >
          {props && children}
        </Field>
      ) : (
        <Field
          name={name}
          {...props}
          touched={touched === true ? 1 : 0}
          className={cn(global.inputInstance)}
        />
      )}
    </div>
  );
};
