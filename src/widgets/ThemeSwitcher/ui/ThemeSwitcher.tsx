import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/provider/ThemeProvider';
import IconThemeDark from 'shared/assets/icons/theme-dark.svg';
import IconThemeLight from 'shared/assets/icons/theme-light.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      type="button"
      className={classNames('', {}, [className])}
    >
      {theme === Theme.LIGHT ? <IconThemeLight /> : <IconThemeDark />}
    </Button>
  );
};
