import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const onReloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <h1 className={cls.PageError__heading}>{t('Произошла непредвиденная ошибка')}</h1>
      <Button
        onClick={onReloadPage}
        type="button"
      >
        {t('Перезагрузить страницу')}
      </Button>
    </div>
  );
};
