import { FC, useState } from "react";
import classNames from "classnames/bind";
import cls from "./SortButtonsWidget.module.scss";
import { Button, ThemeButton } from "@/UI/Button/Button";

const cn = classNames.bind(cls);

interface SortButtonsWidgetProps {
  className?: string;
}

export const SortButtonsWidget: FC<SortButtonsWidgetProps> = (props) => {
  const { className } = props;
  const [activeBtnFilter, setActiveBtnFilter] = useState(0);

  return (
    <div className={cn(cls.SortButtons)}>
      <Button
        theme={ThemeButton.CLEAR}
        className={cn(cls.filterBtn, {
          activeBtnFilter: activeBtnFilter === 0,
        })}
        // use Id from backend instead of numbers
        onClick={() => setActiveBtnFilter(0)}
      >
        Медь
      </Button>
      <Button
        theme={ThemeButton.CLEAR}
        className={cn(cls.filterBtn, {
          activeBtnFilter: activeBtnFilter === 1,
        })}
        // use Id from backend instead of numbers
        onClick={() => setActiveBtnFilter(1)}
      >
        Медь
      </Button>
      <Button
        theme={ThemeButton.CLEAR}
        className={cn(cls.filterBtn, {
          activeBtnFilter: activeBtnFilter === 2,
        })}
        // use Id from backend instead of numbers
        onClick={() => setActiveBtnFilter(2)}
      >
        Медь
      </Button>
      <Button
        theme={ThemeButton.CLEAR}
        className={cn(cls.filterBtn, {
          activeBtnFilter: activeBtnFilter === 3,
        })}
        // use Id from backend instead of numbers
        onClick={() => setActiveBtnFilter(3)}
      >
        Медь
      </Button>
      <Button
        theme={ThemeButton.CLEAR}
        className={cn(cls.filterBtn, {
          activeBtnFilter: activeBtnFilter === 4,
        })}
        // use Id from backend instead of numbers
        onClick={() => setActiveBtnFilter(4)}
      >
        Медь
      </Button>
      <Button
        theme={ThemeButton.CLEAR}
        className={cn(cls.filterBtn, {
          activeBtnFilter: activeBtnFilter === 5,
        })}
        // use Id from backend instead of numbers
        onClick={() => setActiveBtnFilter(5)}
      >
        Медь
      </Button>
      <Button
        theme={ThemeButton.CLEAR}
        className={cn(cls.filterBtn, {
          activeBtnFilter: activeBtnFilter === 6,
        })}
        // use Id from backend instead of numbers
        onClick={() => setActiveBtnFilter(6)}
      >
        Медь
      </Button>
    </div>
  );
};
