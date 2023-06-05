import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import styles from './Orders.module.scss';
import { getOrders } from '../../redux/features/ordersSlice';
import { ReturnBack } from '../../components/ReturnBack/ReturnBack';
import { Navigate } from 'react-router-dom';
import { Router } from '../../helpers/router';

export const Orders = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.orders);
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (user?.id) {
      dispatch(getOrders(user.id));
    }
  }, [dispatch, user]);

  if (!user) return <Navigate to={Router.home} />;
  return (
    <div className={styles.root}>
      <ReturnBack />
      {orders.length > 0 ? (
        <ul className={styles.items}>
          {orders.map((item, index) => (
            <>
              <li className={styles.item}>
                <p>id: {item.id}</p> <p>машина: {item.car.model}</p>
                <p>
                  Фото:
                  <img
                    className={styles.img}
                    src={'https://a17479-38e3.s.d-f.pw' + item.car.image}
                    alt={item.car.model}
                  />
                </p>
              </li>
              {index !== orders.length - 1 && <hr />}
            </>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};
