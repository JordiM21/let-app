import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LevelsModel, levelsModel } from '@/models/LevelsModel.js';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export default function LevelSlider() {

  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div className='md:flex md:items-center flex-row-reverse mx-4'>
      <Swiper
        className='my-16 bg-red-200 w-full text-center md:w-1/2'
        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
        controller={{ control: controlledSwiper }}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          LevelsModel.map((level) => (
            <SwiperSlide className='w-full space-y-4 mb-16'>
              <div>
                <h1>Level {level.level}</h1>
              </div>
              <p>"{level.text}"</p>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
