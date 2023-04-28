import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import cn from 'classnames';

import car1 from './images/1.png';
import car2 from './images/2.png';
import car3 from './images/3.png';
import car4 from './images/4.png';
import car5 from './images/5.png';
import car6 from './images/6.png';

import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Router } from './helpers/router';
import { getCars } from './redux/features/carsSlice';
import { useAppDispatch, useAppSelector } from './hooks';
import { initializedApp } from './redux/features/authSlice';

export const App = () => {
  const dispatch = useAppDispatch();

  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(initializedApp());
  }, [dispatch, token]);

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <div>
      <img className={styles.imgSlider} src={car1} alt="car" style={{ display: 'none' }} />
      <Swiper
        className={styles.slider}
        effect={'fade'}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}>
        <SwiperSlide>
          <img className={styles.imgSlider} src={car1} alt="car" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.imgSlider} src={car2} alt="car" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.imgSlider} src={car3} alt="car" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.imgSlider} src={car4} alt="car" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.imgSlider} src={car5} alt="car" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.imgSlider} src={car6} alt="car" />
        </SwiperSlide>
      </Swiper>
      <div className={styles.content}>
        <div className={cn('container', styles.container)}>
          <div className={styles.box}>
            <Routes>
              <Route path={Router.home} element={<Home />}></Route>
              <Route path={Router.registration} element={<Registration />}></Route>
              <Route path={Router.login} element={<Login />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};
