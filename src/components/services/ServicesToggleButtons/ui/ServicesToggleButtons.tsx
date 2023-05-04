import { Dispatch, FC, SetStateAction, useState } from "react";
import classNames from "classnames";
import cls from "./ServicesToggleButtons.module.scss";
import { Button } from "@/UI/Button";
import { ThemeButton } from "@/UI/Button/ui/Button";

let cn = classNames.bind(cls);

interface Data {
  id: number;
  children: string;
}

interface ServicesToggleButtonsProps {
  className?: string;
  data: Data[];
  weight?: string;
  setData?: any;
}

export const ServicesToggleButtons: FC<ServicesToggleButtonsProps> = (
  props
) => {
  const [active, setActive] = useState(1);

  const { className, data, weight, setData } = props;

  const navigate = (id: number): void => {
    setActive(id);
  };

  return weight ? (
    <div className={cn(cls.ServicesWeightToggleButtons)}>
      {data.map((item) => {
        const isActive = active === item.id;
        return (
          <Button
            type="button"
            key={item.id}
            theme={ThemeButton.CLEAR}
            className={isActive ? cls.active : ""}
            onClick={() => {
              navigate(item.id);
              setData(item.children);
            }}
          >
            {item.children}
          </Button>
        );
      })}
    </div>
  ) : (
    <div className={cn(cls.ServicesSectionToggleButtons)}>
      {data.map((item) => {
        const isActive = active === item.id;
        return (
          <Button
            type="button"
            key={item.id}
            theme={ThemeButton.CLEAR}
            className={isActive ? cls.active : cls.default}
            onClick={() => {
              navigate(item.id);
              setData(item.children);
            }}
          >
            {item.children}
          </Button>
        );
      })}
    </div>
  );
};
