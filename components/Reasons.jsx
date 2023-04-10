import React from 'react'
import onlineClass from '@/public/onlineClass.png'
import Image from 'next/image'

export default function Reasons() {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-center items-center px-16 py-8'>
      <div className='md:w-1/2 my-4'>
        <p className='text-[var(--color4)]'>Líderes en educación de inglés online*</p>
        <p className='text-2xl md:text-5xl'>Razones per las cuales Learn English Together es tu mejor opción</p>
      </div>
      <div className='md:w-1/2'>
        <Image className='mx-auto rounded-md' src={onlineClass} height={400} width={400} />
      </div>
    </div>
  )
}
