import React, { SyntheticEvent, useCallback, useState } from 'react';
import styles from './Login.module.scss';
import { Input } from '@alfalab/core-components/input';
import { Button } from '@alfalab/core-components/button';
import { Typography } from '@alfalab/core-components/typography';
import { Navigate, NavLink } from 'react-router-dom';
import { Link } from '@alfalab/core-components/link';
import { Router } from '../../helpers/router';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginUser } from '../../redux/features/authSlice';
import { ReturnBack } from '../../components/ReturnBack/ReturnBack';

export const Login = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.token);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(
    async (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);

      const {
        username: { value: username },
        password: { value: password },
      } = e.currentTarget.elements as typeof e.currentTarget.elements & {
        username: { value: string };
        password: { value: string };
      };
      try {
        await dispatch(loginUser({ username, password }));
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch],
  );

  if (user) return <Navigate to={Router.home} />;
  return (
    <>
      <ReturnBack />
      <Typography.TitleResponsive tag="h1" className="title">
        Логин
      </Typography.TitleResponsive>
      <form className={styles.form} onSubmit={onSubmit}>
        <Input className={styles.input} block label="Логин" size="s" name="username" required />
        <Input
          className={styles.input}
          block
          label="Пароль"
          size="s"
          type="password"
          name="password"
          required
        />
        <Typography.Text tag="p">
          Нет аккаунта?{' '}
          <NavLink to={Router.registration}>
            <Link view="default" Component="span">
              Зарегистрироваться
            </Link>
          </NavLink>{' '}
        </Typography.Text>
        <Button
          className={styles.button}
          loading={isLoading}
          view="accent"
          block
          size="s"
          type="submit">
          Войти
        </Button>
      </form>
    </>
  );
};
