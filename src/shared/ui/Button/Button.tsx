import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND_PRIMARY = 'backgroundPrimary',
    BACKGROUND_INVERTED = 'backgroundInverted',
    SQUARE = 'square',
    CLEAR_INVERTED = 'clearInverted'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    Xl = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: string;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size,
    ...otherProps
  } = props;

  const additionalClasses = [className, cls[theme], cls[square], cls[size]];

  return (
    <button
      type="button"
      className={
        classNames(
          cls.Button,
          {},
          additionalClasses,
        )
}
      {...otherProps}
    >
      {children}
    </button>
  );
};
