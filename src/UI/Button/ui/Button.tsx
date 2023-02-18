import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import cls from './Button.module.scss';

let cn = classNames.bind(cls);

export enum ThemeButton {
  YELLOW = 'yellow',
  SEND_AGAIN = 'sendAgain',
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, type, theme, ...otherProps } = props;

  return (
    <button type={type} className={cn(cls.Button, [className, cls[theme]])} {...otherProps}>
      {children}
    </button>
  );
};
