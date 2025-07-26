import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface TextProps {
    className?: string;
}

export const Text: FC<TextProps> = ({ className }) => {
  const [state, setState] = useState();

  return (
    <div className={classNames('', {}, [className])} />
  );
};
