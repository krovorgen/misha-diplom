import React from 'react';
import { Button } from '@alfalab/core-components/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';

import car1 from './images/1.png';
import car2 from './images/2.png';
import car3 from './images/3.png';
import car4 from './images/4.png';

export const App = () => {
  return (
    <div>
      <Swiper
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
      <Button view="primary">ad</Button>
    </div>
  );
};
