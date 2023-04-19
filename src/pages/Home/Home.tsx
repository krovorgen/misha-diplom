import React from 'react';
import styles from '../../App.module.scss';
import { Button } from '@alfalab/core-components/button';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h2 className={styles.title}>Заказ</h2>
      <div className={styles.nav}>
        <NavLink to="/registration">
          <Button view="accent" size="xs" Component="span">
            Регистрация
          </Button>
        </NavLink>
        <NavLink to="/auth">
          <Button view="accent" size="xs" Component="span">
            Логин
          </Button>
        </NavLink>
      </div>
    </div>
  );
};
