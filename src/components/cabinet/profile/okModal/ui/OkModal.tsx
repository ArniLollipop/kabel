import { FC } from 'react';
import classNames from 'classnames';
import cls from './OkModal.module.scss';
import { Button } from '@/UI/Button';
import { ThemeButton } from '@/UI/Button/ui/Button';

let cn = classNames.bind(cls);

interface OkModalProps {
  className?: string;
  setShowModal: (value: boolean) => void;
  numberOrEmail: string;
}

export const OkModal: FC<OkModalProps> = (props) => {
  const { className, setShowModal, numberOrEmail } = props;

  return (
    <div className={cn(cls.OkModal)}>
      <h2>{numberOrEmail} подтвержден</h2>
      <Button
        theme={ThemeButton.YELLOW}
        onClick={() => {
          setShowModal(false);
        }}
      >
        ОК
      </Button>
    </div>
  );
};
