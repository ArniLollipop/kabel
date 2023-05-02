// hooks
import { FC } from "react";
import { useState } from "react";

// packages
import classNames from "classnames";

// assets
import cls from "./AuthToggleButtons.module.scss";

let cn = classNames.bind(cls);

interface AuthToggleButtonsProps {
  className?: string;
  setActive: (id: number) => void;
  active: number;
}

interface ButtonsProps {
  id: number;
  children: string;
  isActive: boolean;
  onClick: (id: number) => void;
}

import { useTranslation } from "react-i18next";

export const AuthToggleButtons: FC<AuthToggleButtonsProps> = (props) => {
  const { t } = useTranslation();
  const [dataTabs] = useState([
    {
      id: 1,
      children: t("createAccount"),
    },
    {
      id: 3,
      children: t("go"),
    },
  ]);
  const { className, setActive, active } = props;
  let buttonActive = active;
  if (buttonActive === 2) {
    buttonActive = 1;
  }

  const Buttons = ({ id, children, isActive, onClick }: ButtonsProps) => {
    return (
      <a
        href="#nolink"
        onClick={() => navigate(id)}
        className={isActive ? cls.active : ""}
      >
        {children}
      </a>
    );
  };

  const navigate = (id: number): void => {
    setActive(id);
  };

  return (
    <div className={cn(cls.AuthToggleButtons)}>
      <div className={cn(cls.buttons)}>
        {dataTabs.map((item) => (
          <li key={item.id}>
            <Buttons
              {...item}
              isActive={buttonActive === item.id}
              onClick={navigate}
            />
          </li>
        ))}
      </div>
      <hr />
    </div>
  );
};
