import React from 'react';

import { useAppSelector } from '../../hooks';
import styles from './Cabinet.module.scss';
import { ReturnBack } from '../../components/ReturnBack/ReturnBack';
import { Navigate } from 'react-router-dom';
import { Router } from '../../helpers/router';

export const Cabinet = () => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) return <Navigate to={Router.home} />;
  return (
    <div className={styles.root}>
      <ReturnBack />
      <ul className={styles.items}>
        <li className={styles.item}>Имя: {user.first_name}</li>
        <li className={styles.item}>Фамилия: {user.last_name}</li>
        <li className={styles.item}>Логин: {user.username}</li>
        <li className={styles.item}>Почта: {user.email}</li>
      </ul>
    </div>
  );
};
