import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import cn from 'classnames';

import car1 from './images/1.png';
import car2 from './images/2.png';
import car3 from './images/3.png';
import car4 from './images/4.png';

import styles from './App.module.scss';
import { Button } from '@alfalab/core-components/button';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Registration } from './pages/Registration';
import { Auth } from './pages/Auth';
import { Home } from './pages/Home';

export const App = () => {
  return (
    <div>
      <Swiper
        className={styles.slider}
        effect={'fade'}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}>
        <SwiperSlide>
          <img src={car1} alt="car" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car2} alt="car" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car3} alt="car" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={car4} alt="car" />
        </SwiperSlide>
      </Swiper>
      <div className={styles.content}>
        <div className={cn('container', styles.container)}>
          <div className={styles.box}>
            <NavLink to="/registration">registration</NavLink>
            {'   '}
            <NavLink to="/auth">auth</NavLink>
            {'   '}
            <NavLink to="/">home</NavLink>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/registration" element={<Registration />}></Route>
              <Route path="/auth" element={<Auth />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};
