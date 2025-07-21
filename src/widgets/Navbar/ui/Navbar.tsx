import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { BugButton } from 'app/provider/ErrorBoundary';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginModal } from 'features/AuthByUserName/ui/LiginModal/LoginModal';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isModalOpened, setIsModalOpened] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsModalOpened((prev) => !prev);
  }, []);

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
