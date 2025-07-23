import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const [userName, setUserName] = useState('');

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <div className={cls.LoginForm__controls}>
        <Input
          value={userName}
          onChange={setUserName}
          autoFocus
          className={cls.LoginForm__input}
          placeholder={t('Введите имя пользователя')}
        />
        <Input
          className={cls.LoginForm__input}
          placeholder={t('Введите пароль')}
        />
      </div>
      <Button
        theme={ButtonTheme.BACKGROUND_INVERTED}
        className={cls.LoginForm__submit}
        type="submit"
      >
        {t('Войти')}
      </Button>
    </div>
  );
};
