import React from 'react';
import { Typography } from '@alfalab/core-components/typography';
import { AuthNav } from './AuthNav';
import { Order } from './Order';
import { useAppSelector } from '../../hooks';
import { OrdersNav } from './OrdersNav';

export const Home = () => {
  const cars = useAppSelector((state) => state.cars);
  return (
    <>
      <Typography.TitleResponsive tag="h1" className="title">
        Заказ
      </Typography.TitleResponsive>
      {cars && cars.length > 0 && <Order cars={cars} />}
      {!localStorage.getItem('token') ? <AuthNav /> : <OrdersNav />}
    </>
  );
};
