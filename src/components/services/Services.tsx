import { FC } from 'react';
import classNames from 'classnames';
import cls from './Services.module.scss';
import { ServicesTitleIcon } from '@/assets/icons';

let cn = classNames.bind(cls);

interface ServicesProps {
  className?: string;
}

export const Services: FC<ServicesProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(cls.Services)}>
      <ServicesTitleIcon />

      <section className={cn(cls.container)}>
        <div className={cn(cls.CWeightCalculation)}>CWeightCalculation</div>
        <div className={cn(cls.CSectionCalculation)}>CSectionCalculation</div>
        <div className={cn(cls.CDecoding)}>CDecoding</div>
      </section>
    </div>
  );
};
