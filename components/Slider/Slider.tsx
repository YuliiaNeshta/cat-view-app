import React from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.css';

// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = [];

export default ({ children }) => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className="slider">
      {children}
    </Swiper>
  );
};
