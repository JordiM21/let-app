import Image from 'next/image'
import React from 'react'
import coverTeacher from '@/public/coverTeacher.png'

export default function Banner1() {
  return (
    <>
      <h2 className='font-extrabold text-[var(--color1)] my-2 mx-8 md:text-start text-center md:my-auto md:text-8xl md:max-w-xl text-4xl '>
        Estás a un paso de <span className='font-extrabold text-[var(--color3)]'>cumplir tus sueños</span>
      </h2>
      <Image src={coverTeacher} className='w-70 top-0 -z-10 absolute hidden md:block' />
    </>
  )
}
