import { FC } from 'react';
import classNames from 'classnames/bind';
import cls from './SortByWidget.module.scss';
import { Button, ThemeButton } from '@/UI/Button/ui/Button';

const cn = classNames.bind(cls);

interface SortByWidgetProps {
  className?: string;
}

export const SortByWidget: FC<SortByWidgetProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(cls.SortByWidget)}>
      <div className={cls.sortSelector}>
        Сортировать по :
        <select name="" id="">
          <option value="">Популярности</option>
          <option value="">Убыванию цены</option>
          <option value="">Возрастанию цены</option>
        </select>
      </div>

      <span>
        <span className={cls.founded}>Найдено</span> 30 товаров
      </span>
      <Button theme={ThemeButton.CLEAR} className={cls.sortBtn}>
        {}
      </Button>
    </div>
  );
};
