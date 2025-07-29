import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { BugButton } from 'app/provider/ErrorBoundary';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import cls from './NavbarLogout.module.scss';

interface NavbarLogoutProps {
    className?: string;
}

export const NavbarLogout: FC<NavbarLogoutProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    // dispatch(userAction.logout);
  }, [dispatch]);

  return (
    <div className={classNames(cls.NavbarLogout, {}, [className])}>
      <div className={cls.NavbarLogout__list}>
        <ThemeSwitcher />
        <BugButton />
        <Button
          onClick={onLogout}
          className={cls.NavbarLogout__button}
          theme={ButtonTheme.CLEAR_INVERTED}
        >
          {t('Выйти')}
        </Button>
      </div>
    </div>
  );
};
