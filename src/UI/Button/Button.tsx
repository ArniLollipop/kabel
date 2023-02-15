import { FC } from 'react';
import classNames from 'classnames';
import cls from './Button.module.scss';

let cn = classNames.bind(cls);

interface ButtonProps {
  className?: string;
  text?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, text, type } = props;

  return (
    <button type={type} className={cn(cls.Button)}>
      {text}
    </button>
  );
};
