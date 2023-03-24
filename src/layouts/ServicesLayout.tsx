import { FC, PropsWithChildren } from 'react';
import { Title } from '@/UI/Title/Title';
import classNames from 'classnames';
import cls from '../components/services/ServicesLayout.module.scss';

let cn = classNames.bind(cls);

export const ServicesLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className={cn(cls.Services)}>
        <Title className={cn(cls.servicesTitle)}>СЕРВИСЫ</Title>

        <section className={cn(cls.container)}>{children}</section>
      </div>
    </>
  );
};
