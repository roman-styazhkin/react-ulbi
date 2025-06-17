import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
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
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button type="button" onClick={onToggleCollapsed}>Toggle</Button>
    </div>
  );
};
