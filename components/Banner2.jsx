import Image from 'next/image'
import React from 'react'
import coverBanner2 from '@/public/methodBanner2.png'

export default function Banner2() {
  return (
    <>
      <h2 className='font-extrabold text-[var(--color1)] my-2 mx-8 md:text-start text-center md:my-auto md:text-8xl md:max-w-xl text-4xl '>
        Conoce nuestro <span className='font-extrabold text-[var(--color3)]'>Método de Enseñamza</span>
      </h2>
      <Image src={coverBanner2} className='absolute top-0 -z-10' />
    </>

  )
}
