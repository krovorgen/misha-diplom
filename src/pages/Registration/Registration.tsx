import React, { SyntheticEvent, useCallback } from 'react';
import { Input } from '@alfalab/core-components/input';

import styles from './Registration.module.scss';
import { Button } from '@alfalab/core-components/button';
import { Typography } from '@alfalab/core-components/typography';
import { Link } from '@alfalab/core-components/link';
import { NavLink } from 'react-router-dom';
import { Router } from '../../helpers/router';
import { ArrowBackMIcon } from '@alfalab/icons-glyph/ArrowBackMIcon';
export const Registration = () => {
  const onSubmit = useCallback((e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      fio: { value: fio },
      login: { value: login },
      email: { value: email },
      password: { value: password },
    } = e.currentTarget.elements as typeof e.currentTarget.elements & {
      fio: { value: string };
      login: { value: string };
      email: { value: string };
      password: { value: string };
    };

    console.log(fio);
    console.log(login);
    console.log(email);
    console.log(password);
  }, []);
  return (
    <>
      <NavLink className={styles.link} to={Router.home}>
        <ArrowBackMIcon /> Вернуться на главную
      </NavLink>
      <Typography.TitleResponsive tag="h1" className="title">
        Регистрация
      </Typography.TitleResponsive>
      <form className={styles.form} onSubmit={onSubmit}>
        <Input className={styles.input} block label="ФИО" size="s" name="fio" required />
        <Input
          className={styles.input}
          block
          label="Телефон"
          size="s"
          name="tel"
          type="tel"
          required
        />
        <Input className={styles.input} block label="Логин" size="s" name="login" required />
        <Input
          className={styles.input}
          block
          label="Почта"
          size="s"
          type="email"
          name="email"
          required
        />
        <Input className={styles.input} block label="Пароль" size="s" name="password" required />
        <Input
          className={styles.input}
          block
          label="Повторите пароль"
          size="s"
          name="passwordRepeat"
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
