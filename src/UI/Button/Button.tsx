import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import classNames from "classnames";
import cls from "./Button.module.scss";

let cn = classNames.bind(cls);

export const enum ThemeButton {
  YELLOW = "yellow",
  BLUE = "blue",
  CARD = "card",
  BUY = "buy",
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme = ThemeButton.BLUE, ...otherProps } = props;

  return (
    <button className={cn(cls.Button, className, cls[theme])} {...otherProps}>
      {children}
    </button>
  );
};
