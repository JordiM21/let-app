import React from 'react'
import banner from '@/public/banner-promociones.png'
import Image from 'next/image'
import Form from './Form'


export default function BannerPromotions() {
  return (
    <div className='bg-[var(--color3)] md:flex md:justify-center md:items-center'>
      <Image src={banner} className='w-full md:w-8/12 h-[80vh] md:h-[100vh] object-cover' />
      <Form />
    </div>
  )
}
