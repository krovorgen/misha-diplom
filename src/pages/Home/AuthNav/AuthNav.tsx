import React from 'react';
import styles from './AuthNav.module.scss';
import { NavLink } from 'react-router-dom';
import { Router } from '../../../helpers/router';
import { Button } from '@alfalab/core-components/button';

export const AuthNav = () => {
  return (
    <div className={styles.nav}>
      <NavLink to={Router.registration}>
        <Button view="accent" size="xs" Component="span">
          Регистрация
        </Button>
      </NavLink>
      <NavLink to={Router.login}>
        <Button view="accent" size="xs" Component="span">
          Логин
        </Button>
      </NavLink>
    </div>
  );
};
