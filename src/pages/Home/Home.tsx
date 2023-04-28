import React from 'react';
import { Typography } from '@alfalab/core-components/typography';
import { AuthNav } from './AuthNav';
import { Order } from './Order';
import { useAppSelector } from '../../hooks';

export const Home = () => {
  const cars = useAppSelector((state) => state.cars);
  const user = useAppSelector((state) => state.auth.user);
  return (
    <>
      <Typography.TitleResponsive tag="h1" className="title">
        Заказ
      </Typography.TitleResponsive>
      {cars && cars.length > 0 && <Order cars={cars} />}
      {!user && <AuthNav />}
    </>
  );
};
