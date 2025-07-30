import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/ui/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    userName, password, error, isLoading,
  } = useSelector(getLoginState);

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUserName(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username: userName, password }));
  }, [dispatch, userName, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <div className={cls.LoginForm__controls}>
        <Text className={cls.LoginForm__title} title={t('Форма авторизации')} />
        { error && <Text title={t('Ошибка при вводе данных')} theme={TextTheme.ERROR} /> }
        <Input
          value={userName}
          onChange={onChangeUserName}
          autoFocus
          className={cls.LoginForm__input}
          placeholder={t('Введите имя пользователя')}
          name="user-name"
        />
        <Input
          value={password}
          onChange={onChangePassword}
          className={cls.LoginForm__input}
          placeholder={t('Введите пароль')}
          name="user-password"
        />
      </div>
      <Button
        disabled={isLoading}
        onClick={onLoginClick}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        className={cls.LoginForm__submit}
        type="submit"
      >
        {t('Войти')}
      </Button>
    </div>
  );
});

export default LoginForm;
