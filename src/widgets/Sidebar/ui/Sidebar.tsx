import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { BugButton } from 'app/provider/ErrorBoundary';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar-element"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
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
      <BugButton />
    </div>
  );
};
