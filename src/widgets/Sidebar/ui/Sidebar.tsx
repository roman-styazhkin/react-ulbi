import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePaths } from 'shared/config/routerConfig/routerConfig';
import { useTranslation } from 'react-i18next';
import IconHome from 'shared/assets/icons/home-icon.svg';
import IconAbout from 'shared/assets/icons/about-icon.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar-element"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <LangSwitcher className={classNames(cls.Sidebar__switcher)} short={collapsed} />
      <div className={cls.Sidebar__links}>
        <AppLink
          className={cls.Sidebar__link}
          theme={AppLinkTheme.INVERTED}
          to={RoutePaths.main}
        >
          {collapsed ? <IconHome /> : <span>{t('Главная страница')}</span>}
        </AppLink>
        <AppLink
          className={cls.Sidebar__link}
          theme={AppLinkTheme.INVERTED}
          to={RoutePaths.about}
        >
          {collapsed ? <IconAbout /> : <span>{t('Страница о нас')}</span>}
        </AppLink>
      </div>
      <Button
        className={cls.Sidebar__toggler}
        data-testid="sidebar-toggler"
        type="button"
        onClick={onToggleCollapsed}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square={ButtonTheme.SQUARE}
        size={ButtonSize.Xl}
      >
        {collapsed ? '>' : '<'}
      </Button>
    </div>
  );
};
