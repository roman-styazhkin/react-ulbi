import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { BugButton } from 'app/provider/ErrorBoundary';
import IconThemeLight from 'shared/assets/icons/theme-light.svg';
import cls from './Sidebar.module.scss';
import { LangSwitcher } from '../../LangSwitcher';

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
      <Button type="button" onClick={onToggleCollapsed}>Toggle</Button>
      <BugButton />
      <IconThemeLight />
      <LangSwitcher />
    </div>
  );
};
