import React, { useCallback } from 'react';
import styles from './OrdersNav.module.scss';
import { NavLink } from 'react-router-dom';
import { Router } from '../../../helpers/router';
import { Button } from '@alfalab/core-components/button';

export const OrdersNav = () => {
  const exit = useCallback(() => {
    localStorage.setItem('token', '');
    window.location.reload();
  }, []);
  return (
    <div className={styles.nav}>
      <NavLink to={Router.orders}>
        <Button view="accent" size="xs" block Component="span">
          Все заказы
        </Button>
      </NavLink>
      <NavLink to={Router.cabinet}>
        <Button view="accent" size="xs" block Component="span">
          Кабинет
        </Button>
      </NavLink>
      <Button view="accent" onClick={exit} size="xs" block>
        Выйти
      </Button>
    </div>
  );
};
