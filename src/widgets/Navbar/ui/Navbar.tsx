import {FC} from 'react';
import {classNames} from 'shared/lib/classNames';
import {Link} from "react-router-dom";
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Link to={'/'}>Home Page</Link>
            <Link to={'about'}>About page</Link>
        </div>
    );
};
