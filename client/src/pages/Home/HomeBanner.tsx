import './style.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';
import banner from '../../assets/img/bander.jpg'


export const HomeBanner = () => {
  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div
            style={{
                backgroundImage: `url(${banner})`,
            }}
            className="banner"
        >
        </div>
      </SwiperSlide>
      <SwiperSlide>
                <div
                    style={{
                        backgroundImage: `url("https://img.ltwebstatic.com/images3_ach/2022/09/09/16626907321167ba0f84252e89c38dc5aa3c47e311.gif")`,
                    }}
                    className='banner'
                >
                </div>
            </SwiperSlide>
    </Swiper>
  );
};