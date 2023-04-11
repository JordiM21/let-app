import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonios } from '@/models/testimonios';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export default function Slider() {

  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div className='md:flex md:items-center flex-row-reverse mx-4'>
      <div className='text-center px-8 my-8 md:w-1/2'>
        <h3 className='text-2xl md:text-4xl'>
          ¡Enseñamos inglés a personas de todo el mundo!
        </h3>
        <p className='md:text-xl'>
          Te invitamos a ver cómo <span className='text-[var(--color2)]'>LET</span> le cambió la vida a estos estudiantes aprendiendo nuevos idiomas
        </p>
      </div>

      <Swiper
        className='my-8 text-center md:w-1/2'
        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
        controller={{ control: controlledSwiper }}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          testimonios.map((testimony) => (
            <SwiperSlide className='w-full space-y-4 mb-16'>
              <div className='relative w-[300px] mx-auto'>
                <Image src={testimony.person} width={"300"} height={"300"} />
                <Image src={testimony.flag} width={"50"} height={"50"} className='absolute bottom-0 right-0' />
              </div>
              <p>"{testimony.message}"</p>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
