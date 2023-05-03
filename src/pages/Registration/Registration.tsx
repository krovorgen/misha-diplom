import React, { SyntheticEvent, useCallback } from 'react';
import { Input } from '@alfalab/core-components/input';

import styles from './Registration.module.scss';
import { Button } from '@alfalab/core-components/button';
import { Typography } from '@alfalab/core-components/typography';
import { Link } from '@alfalab/core-components/link';
import { Navigate, NavLink } from 'react-router-dom';
import { Router } from '../../helpers/router';
import { ArrowBackMIcon } from '@alfalab/icons-glyph/ArrowBackMIcon';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { registrationUser } from '../../redux/features/authSlice';
export const Registration = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.token);

  const onSubmit = useCallback(
    async (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();

      const {
        first_name: { value: first_name },
        last_name: { value: last_name },
        tel: { value: tel },
        username: { value: username },
        email: { value: email },
        password: { value: password },
        passwordRepeat: { value: passwordRepeat },
      } = e.currentTarget.elements as typeof e.currentTarget.elements & {
        first_name: { value: string };
        last_name: { value: string };
        tel: { value: string };
        username: { value: string };
        email: { value: string };
        password: { value: string };
        passwordRepeat: { value: string };
      };

      if (password !== passwordRepeat) toast.error('Пароли не совпадают :(');

      dispatch(registrationUser({ first_name, last_name, username, email, password, tel }));
    },
    [dispatch],
  );

  if (user) return <Navigate to={Router.home} />;

  return (
    <>
      <NavLink className={styles.link} to={Router.home}>
        <ArrowBackMIcon /> Вернуться на главную
      </NavLink>
      <Typography.TitleResponsive tag="h1" className="title">
        Регистрация
      </Typography.TitleResponsive>
      <form className={styles.form} onSubmit={onSubmit}>
        <Input className={styles.input} block label="Имя" size="s" name="first_name" required />
        <Input className={styles.input} block label="Фамилия" size="s" name="last_name" required />
        <Input
          className={styles.input}
          block
          label="Телефон"
          size="s"
          name="tel"
          type="tel"
          required
        />
        <Input className={styles.input} block label="Логин" size="s" name="username" required />
        <Input
          className={styles.input}
          block
          label="Почта"
          size="s"
          type="email"
          name="email"
          required
        />
        <Input
          className={styles.input}
          block
          label="Пароль"
          size="s"
          name="password"
          type="password"
          required
        />
        <Input
          className={styles.input}
          block
          label="Повторите пароль"
          size="s"
          name="passwordRepeat"
          type="password"
          required
        />
        <Typography.Text tag="p">
          Уже есть аккаунт?{' '}
          <NavLink to={Router.login}>
            <Link view="default" Component="span">
              Войти
            </Link>
          </NavLink>{' '}
        </Typography.Text>
        <Button className={styles.button} view="accent" block size="s" type="submit">
          Registration
        </Button>
      </form>
    </>
  );
};
