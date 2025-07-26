import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

interface TextProps {
    className?: string;
}

export const Text: FC<TextProps> = ({ className }) => {
  const [state, setState] = useState();

  return (
    <div className={classNames(cls.Text, {}, [className])} />
  );
};
