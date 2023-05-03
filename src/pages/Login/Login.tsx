import React, { SyntheticEvent, useCallback } from 'react';
import styles from './Login.module.scss';
import { Input } from '@alfalab/core-components/input';
import { Button } from '@alfalab/core-components/button';
import { Typography } from '@alfalab/core-components/typography';
import { Navigate, NavLink } from 'react-router-dom';
import { Link } from '@alfalab/core-components/link';
import { Router } from '../../helpers/router';
import { ArrowBackMIcon } from '@alfalab/icons-glyph/ArrowBackMIcon';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginUser } from '../../redux/features/authSlice';

export const Login = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.token);

  const onSubmit = useCallback(async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      username: { value: username },
      password: { value: password },
    } = e.currentTarget.elements as typeof e.currentTarget.elements & {
      username: { value: string };
      password: { value: string };
    };

    await dispatch(loginUser({ username, password }));
    console.log(username);
    console.log(password);
  }, []);

  if (user) return <Navigate to={Router.home} />;
  return (
    <>
      <NavLink className={styles.link} to={Router.home}>
        <ArrowBackMIcon /> Вернуться на главную
      </NavLink>
      <Typography.TitleResponsive tag="h1" className="title">
        Логин
      </Typography.TitleResponsive>
      <form className={styles.form} onSubmit={onSubmit}>
        <Input className={styles.input} block label="Логин" size="s" name="username" required />
        <Input className={styles.input} block label="Пароль" size="s" name="password" required />
        <Typography.Text tag="p">
          Нет аккаунта?{' '}
          <NavLink to={Router.registration}>
            <Link view="default" Component="span">
              Зарегистрироваться
            </Link>
          </NavLink>{' '}
        </Typography.Text>
        <Button className={styles.button} view="accent" block size="s" type="submit">
          Auth
        </Button>
      </form>
    </>
  );
};
