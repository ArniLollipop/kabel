// hooks
import { FC, useState } from 'react';

// packages
import classNames from 'classnames';

// assets
import cls from './Authorization.module.scss';

// helpers
import { Register } from './register';
import { Login } from './login';
import { AuthToggleButtons } from './authToggleButtons';
import { GetSmsCode } from './getSmsCode';

let cn = classNames.bind(cls);

interface AuthorizationProps {
  className?: string;
}

export const Authorization: FC<AuthorizationProps> = ({ className }) => {
  const [active, setActive] = useState(1);

  return (
    <div className={cn(cls.Authorization)}>
      <div className={cn(cls.formContainer)}>
        <AuthToggleButtons active={active} setActive={setActive} />
        {active === 1 ? (
          <Register setActive={setActive} />
        ) : active === 2 ? (
          <GetSmsCode />
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
};
