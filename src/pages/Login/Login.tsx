import React, { SyntheticEvent, useCallback } from 'react';
import styles from '../Registration/Registration.module.scss';
import { Input } from '@alfalab/core-components/input';
import { Button } from '@alfalab/core-components/button';
import { Typography } from '@alfalab/core-components/typography';
import { NavLink } from 'react-router-dom';
import { Link } from '@alfalab/core-components/link';
import { Router } from '../../helpers/router';

export const Login = () => {
  const onSubmit = useCallback((e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      login: { value: login },
      password: { value: password },
    } = e.currentTarget.elements as typeof e.currentTarget.elements & {
      login: { value: string };
      password: { value: string };
    };

    console.log(login);
    console.log(password);
  }, []);
  return (
    <>
      <Typography.TitleResponsive tag="h1" className="title">
        Логин
      </Typography.TitleResponsive>
      <form className={styles.form} onSubmit={onSubmit}>
        <Input className={styles.input} block label="Логин" size="s" name="login" required />
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
