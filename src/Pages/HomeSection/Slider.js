import React from 'react';
import './Home.css'
import image01 from "../../images/Page1.jpg"
import image02 from "../../images/Page2.jpg"
import image03 from "../../images/Page3.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Slider = () => {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='pic-ctrl ' src={image01 } />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='pic-ctrl ' src={ image02} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='pic-ctrl ' src={image03 } />
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Slider;