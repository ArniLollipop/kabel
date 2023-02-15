// hooks
import { FC } from 'react';

// components
import { Field, FieldProps } from 'formik';

// assets
import global from '../../FormElementsStyle.module.scss';

import MaskedInput from 'react-text-mask';
import { IInput } from '../../types';
import classNames from 'classnames';

let cn = classNames.bind(global);

interface IInputInstanceWithMaskProps extends IInput {
  mask?: any;
}

export const InputInstanceWithMask: FC<IInputInstanceWithMaskProps> = ({ name, id, ...props }) => {
  const { labelText, mask } = props;

  const inputLabel = labelText && (
    <label htmlFor={id} className={''}>
      {labelText}
    </label>
  );

  return (
    <div>
      {inputLabel}
      <Field name={name}>
        {({ field }: FieldProps) => (
          <MaskedInput
            {...field}
            {...props}
            mask={mask}
            name={name}
            className={cn(global.inputInstance)}
          />
        )}
      </Field>
    </div>
  );
};
