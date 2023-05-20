import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ReturnBack.module.scss';
import { Router } from '../../helpers/router';
import { ArrowBackMIcon } from '@alfalab/icons-glyph/ArrowBackMIcon';

export const ReturnBack = () => {
  return (
    <NavLink className={styles.link} to={Router.home}>
      <ArrowBackMIcon /> Вернуться на главную
    </NavLink>
  );
};
