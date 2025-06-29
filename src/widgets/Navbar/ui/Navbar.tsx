import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.Navbar__list}>
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
    <div className={cls.Navbar__list}>
      <AppLink theme={AppLinkTheme.INVERTED} to="/">Home Page</AppLink>
      <AppLink theme={AppLinkTheme.INVERTED} to="about">About page</AppLink>
    </div>
  </div>
);
