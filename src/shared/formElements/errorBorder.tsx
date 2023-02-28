import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import global from '@/shared/formElements/FormElementsStyle.module.scss';

interface errorBorderProps {
  children: ReactNode;
  touchedValue: boolean | undefined;
  errorsValue: string | undefined;
}

export const ErrorBorder: FC<errorBorderProps> = (props) => {
  const { children, touchedValue, errorsValue } = props;
  const className = classNames(
    global.inputContainer,
    touchedValue && errorsValue ? global.errorBorder : null
  );
  return <div className={className}>{children}</div>;
};
