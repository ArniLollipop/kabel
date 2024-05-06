import { FC } from "react";
import classNames from "classnames";
import cls from "./OkModal.module.scss";
import { Button } from "@/UI/Button";
import { ThemeButton } from "@/UI/Button/ui/Button";

let cn = classNames.bind(cls);

import { useTranslation } from "react-i18next";

interface OkModalProps {
	className?: string;
	setShowModal: (value: boolean) => void;
	numberOrEmail: string;
}

export const OkModal: FC<OkModalProps> = (props) => {
	const { t } = useTranslation();
	const { className, setShowModal, numberOrEmail } = props;

	return (
		<div className={cn(cls.OkModal)}>
			<h2>
				{numberOrEmail} {t("podtverdit")}
			</h2>
			<Button
				theme={ThemeButton.YELLOW}
				onClick={() => {
					setShowModal(false);
				}}>
				ОК
			</Button>
		</div>
	);
};
