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
    <div className='md:flex md:items-center md:gap-16 md:justify-around flex-row-reverse mx-4'>
      <h1 className='max-w-xl text-xl w-10/12 mx-auto'>
        A continuación verás tu camino a seguir si inicias desde "0" completando los niveles (<span className='text-[var(--color2)]'>Básico, </span><span className='text-[var(--color3)]'>Intermedio y </span><span className='text-[var(--color4)]'>Avanzado </span>). Recuerda que si ya tienes algo de experiencia con el inglés puedes hacer el <a className='text-blue-500 underline cursor-pointer hover:no-underline'>placement test</a> el cual te posicionará en tu nivel.
      </h1>
      <Swiper
        className='my-16 w-full text-center'
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
            <SwiperSlide className='px-20 w-full space-y-4 mb-16'>
              <h2 className={level.category === "Básico"
                ? `text-4xl text-[var(--color2)]`
                : level.category === "Intermedio"
                  ? `text-4xl text-[var(--color3)]`
                  : level.category === "Avanzado"
                    ? "text-4xl text-[var(--color4)]"
                    : ""
              }
              >
                {level.category}
              </h2>
              <div className={level.category === "Básico"
                ? `border-8 mx-auto rounded-full h-24 w-24 flex items-center justify-center border-[var(--color2)]`
                : level.category === "Intermedio"
                  ? `border-8 mx-auto rounded-full h-24 w-24 flex items-center justify-center border-[var(--color3)]`
                  : level.category === "Avanzado"
                    ? "border-8 mx-auto rounded-full h-24 w-24 flex items-center justify-center border-[var(--color4)]"
                    : ""
              }>
                <h1>Level {level.level}</h1>
              </div>
              <p className='text-gray-700'>"{level.text}"</p>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
