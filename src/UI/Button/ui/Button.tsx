import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Button.module.scss';

let cn = classNames.bind(cls);

export enum ThemeButton {
  YELLOW = 'yellow',
  BLUE = 'blue',
  CARD = 'card',
  BUY = 'buy',
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme: ThemeButton;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, type, theme = ThemeButton.BLUE, ...otherProps } = props;

  return (
    <button type={type} className={cn(cls.Button, className, cls[theme])} {...otherProps}>
      {children}
    </button>
  );
};
