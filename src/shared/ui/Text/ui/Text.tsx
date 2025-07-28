import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    ERROR= 'error'
}

interface TextProps {
    className?: string;
    title?: string;
    description?: string;
    theme?: TextTheme;
}

export const Text: FC<TextProps> = (props) => {
  const {
    className, title, description, theme,
  } = props;

  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
      <p className={cls.Text__title}>{title}</p>
      <p className={cls.Text__description}>{description}</p>
    </div>
  );
};
