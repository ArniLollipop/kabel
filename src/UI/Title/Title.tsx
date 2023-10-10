/** @format */

import { FC, HTMLProps, ReactNode } from "react";
import classNames from "classnames/bind";
import cls from "./Title.module.scss";

const cn = classNames.bind(cls);

export const enum ThemeTitle {
	MAIN = "main",
}

interface TitleProps extends HTMLProps<HTMLHeadingElement> {
	h1?: boolean;
	className?: string;
	children: ReactNode;
	theme?: string;
}

export const Title: FC<TitleProps> = (props) => {
	const { h1, className, children, theme = ThemeTitle.MAIN } = props;

	return (
		<div>
			{h1 ? (
				<h1 className={cn(cls.Title, cls[theme], className)}>{children}</h1>
			) : (
				<h2 className={cn(cls.Title, cls[theme], className)}>{children}</h2>
			)}
		</div>
	);
};
