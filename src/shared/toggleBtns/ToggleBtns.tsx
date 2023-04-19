import { useState } from 'react';
import classNames from 'classnames';
import cls from './ToggleBtns.module.scss';
import { Button } from '@/UI/Button';
import { ThemeButton } from '@/UI/Button/ui/Button';

let cn = classNames.bind(cls);

interface Data {
  id: number;
  children: string;
}

interface ToggleBtnsProps {
  className?: string;
  data: Data[];
  toggleActive: (value: number) => void;
}

export const ToggleBtns = (props: ToggleBtnsProps) => {
  const [active, setActive] = useState(1);
  const { className, data, toggleActive } = props;

  const navigate = (id: number): void => {
    setActive(id);
    toggleActive(id);
  };

  return (
    <div className={cn(cls.ToggleBtns, className)}>
      {data.map((item) => {
        const isActive = active === item.id;
        return (
          <Button
            type="button"
            key={item.id}
            theme={ThemeButton.CLEAR}
            className={isActive ? cls.active : cls.default}
            onClick={() => navigate(item.id)}
          >
            {item.children}
          </Button>
        );
      })}
    </div>
  );
};
