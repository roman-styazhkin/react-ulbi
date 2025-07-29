import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './User.module.scss';

interface UserProps {
    className?: string;
}

export const User: FC<UserProps> = ({ className }) => {
  const [state, setState] = useState();

  return (
    <div className={classNames(cls.User, {}, [className])} />
  );
};
