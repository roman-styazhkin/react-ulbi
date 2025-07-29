import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { BugButton } from 'app/provider/ErrorBoundary';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useSelector } from 'react-redux';
import { NavbarLogout } from 'widgets/Navbar/ui/NavbarLogout';
import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { getAuthUserData } from 'entity/User/model/selectors/getAuthUserData/getAuthUserData';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isModalOpened, setIsModalOpened] = useState(false);
  const { authData } = useSelector(getAuthUserData);

  const onToggleModal = useCallback(() => {
    setIsModalOpened((prev) => !prev);
  }, []);

  if (authData) {
    return <NavbarLogout />;
  }

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.Navbar__list}>
        <ThemeSwitcher />
        <BugButton />
        <Button
          onClick={onToggleModal}
          className={cls.Navbar__enter}
          theme={ButtonTheme.CLEAR_INVERTED}
        >
          {t('Войти')}
        </Button>
        <LoginModal isOpen={isModalOpened} onClose={onToggleModal} />
      </div>
    </div>
  );
};
