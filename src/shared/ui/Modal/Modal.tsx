import React, {
  FC, ReactNode, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  };

  // const onCloseModal = () => {
  //   if (onClose) {
  //     onClose();
  //   }
  // };

  const onCloseModal = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <div className={classNames(cls.Modal, mods, [className])}>
      <div
        className={cls.Modal__overlay}
        onClick={onCloseModal}
      >
        <div
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          className={cls.Modal__content}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
