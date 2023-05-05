import React from 'react'
import onlineClass from '@/public/onlineClass.png'
import Image from 'next/image'
import { reasonsModel } from '@/models/reasonsModel'

export default function Reasons() {
  return (
    <>
      <div className='flex flex-col-reverse md:flex-row justify-center items-center px-16 py-8'>
        <div className='md:w-1/2 my-4'>
          <p className='text-[var(--color4)]'>Líderes en educación de inglés online*</p>
          <p className='text-2xl md:text-5xl'>Razones per las cuales Learn English Together es tu mejor opción</p>
        </div>
        <div className='md:w-1/2'>
          <Image className='mx-auto rounded-md' src={onlineClass} height={400} width={400} />
        </div>
      </div>
      <div className='flex gap-8 flex-col px-16 md:flex-row'>
        {
          reasonsModel.map((reason) => (
            <div className=' md:my-12' >
              <Image src={reason.image} className='w-16 md:w-28' />
              <p className='text-[var(--color2)] text-lg'>{reason.title}</p>
              <p>{reason.text}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}
