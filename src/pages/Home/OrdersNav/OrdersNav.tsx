import React from 'react';
import styles from './OrdersNav.module.scss';
import { NavLink } from 'react-router-dom';
import { Router } from '../../../helpers/router';
import { Button } from '@alfalab/core-components/button';

export const OrdersNav = () => {
  return (
    <div className={styles.nav}>
      <NavLink to={Router.orders}>
        <Button view="accent" size="xs" block Component="span">
          Все заказы
        </Button>
      </NavLink>
    </div>
  );
};
