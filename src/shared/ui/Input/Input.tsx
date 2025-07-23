import {
  ChangeEvent, FC, InputHTMLAttributes, useEffect, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    onChange?: (value: string) => void;
    value?: string;
    autoFocus?: boolean;
}

export const Input: FC<InputProps> = (props) => {
  const {
    type = 'text',
    className,
    onChange,
    value = '',
    placeholder,
    autoFocus,
    ...otherProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange?.(value);
  };

  useEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <label className={classNames(cls.Input, {}, [className])}>
      <span className={cls.Input__placeholder}>{placeholder}</span>
      <input
        ref={inputRef}
        className={cls.Input__element}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </label>
  );
};
