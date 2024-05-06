import { FC } from "react";
import classNames from "classnames/bind";
import cls from "./SortByWidget.module.scss";
import { Button, ThemeButton } from "@/UI/Button/ui/Button";
import { Field } from "formik";
import { useTranslation } from "react-i18next";

const cn = classNames.bind(cls);

interface SortByWidgetProps {
	className?: string;
}

export const SortByWidget: FC<SortByWidgetProps> = (props) => {
	const { className } = props;

	const { t } = useTranslation();

	return (
		<div className={cn(cls.SortByWidget)}>
			<label htmlFor='sortWidget'>{t("sortirovkaPo")}:</label>

			<Field
				component='select'
				id='sortWidget'
				name='sortWidget'
				multiple={false}
				className={cls.SortByWidget_selector}>
				<option value='cost' className={cls.SortByWidget_option}>
					{t("vozrastaniPay")}
				</option>
				<option value='-cost' className={cls.SortByWidget_option}>
					{t("spuskPay")}
				</option>
			</Field>
		</div>
	);
};
