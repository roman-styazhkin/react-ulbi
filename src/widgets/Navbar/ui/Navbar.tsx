import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { BugButton } from 'app/provider/ErrorBoundary';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.Navbar__list}>
        <ThemeSwitcher />
        <BugButton />
        <Button theme={ButtonTheme.CLEAR}>
          {t('Войти')}
        </Button>
      </div>
    </div>
  );
};
