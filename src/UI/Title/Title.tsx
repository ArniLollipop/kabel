import { FC, HTMLProps, ReactNode } from 'react';
import classNames from 'classnames/bind';
import cls from './Title.module.scss';

const cn = classNames.bind(cls);

export const enum ThemeTitle {
  MAIN = 'main',
}

interface TitleProps extends HTMLProps<HTMLHeadingElement> {
  className?: string;
  children: ReactNode;
  theme?: string;
}

export const Title: FC<TitleProps> = (props) => {
  const { className, children, theme = ThemeTitle.MAIN } = props;

  return <h2 className={cn(cls.Title, cls[theme], className)}>{children}</h2>;
};
