import React from 'react';
import { Typography } from '@alfalab/core-components/typography';
import { Nav } from './Nav';
import { Order } from './Order';

export const Home = () => {
  return (
    <>
      <Typography.TitleResponsive tag="h1" className="title">
        Заказ
      </Typography.TitleResponsive>
      <Order />
      <Nav />
    </>
  );
};
