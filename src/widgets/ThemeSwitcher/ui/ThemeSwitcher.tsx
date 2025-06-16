import {FC} from 'react';
import {classNames} from 'shared/lib/classNames';
import {Theme, useTheme} from "app/provider/ThemeProvider";
import IconThemeDark from 'shared/assets/icons/theme-dark.svg';
import IconThemeLight from 'shared/assets/icons/theme-light.svg';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button
            onClick={toggleTheme}
            type="button"
            className={classNames('', {}, [className])}
        >
            {theme === Theme.LIGHT ? <IconThemeLight /> : <IconThemeDark />}
        </button>
    );
};
