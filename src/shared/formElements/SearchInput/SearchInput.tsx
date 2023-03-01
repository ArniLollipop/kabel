import { FC, HTMLAttributes } from "react";
import classNames from "classnames/bind";
import cls from "./SearchInput.module.scss";

const cn = classNames.bind(cls);

interface SearchInputProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const SearchInput: FC<SearchInputProps> = (props) => {
  const { className, ...otherProps } = props;

  return <input className={cn(cls.SearchInput, className)} {...otherProps} />;
};
