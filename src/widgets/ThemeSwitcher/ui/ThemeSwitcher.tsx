import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provider/ThemeProvider';
import IconTheme from 'shared/assets/icons/icon-theme.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      type="button"
      className={classNames(cls.ThemeSwitcher, {}, [className])}
    >
      <IconTheme />
    </Button>
  );
};
