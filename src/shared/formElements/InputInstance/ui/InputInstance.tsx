// hooks
import { FC } from 'react';

// assets
import global from '../../FormElementsStyle.module.scss';

// packages
import classNames from 'classnames';
import { Field } from 'formik';

// types
import { IInput } from '../../types';

let cn = classNames.bind(global);

interface IInputInstanceProps extends IInput {
  children?: any;
  as?: any;
}

export const InputInstance: FC<IInputInstanceProps> = ({ name, id, ...props }) => {
  const { labelText, children, as } = props;

  const inputLabel = labelText && (
    <label htmlFor={id} className={''}>
      {labelText}
    </label>
  );

  return (
    <div>
      {inputLabel}
      {as ? (
        <Field name={name} {...props} className={cn(global.inputInstance)}>
          {props && children}
        </Field>
      ) : (
        <Field name={name} {...props} className={cn(global.inputInstance)} />
      )}
    </div>
  );
};
