import {FC} from 'react';
import {classNames} from 'shared/lib/classNames';
import {AppLink} from "shared/ui/AppLink";
import cls from './Navbar.module.scss';
import {AppLinkTheme} from "shared/ui/AppLink/ui/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppLink theme={AppLinkTheme.INVERTED} to={'/'}>Home Page</AppLink>
            <AppLink theme={AppLinkTheme.INVERTED} to={'about'}>About page</AppLink>
        </div>
    );
};
