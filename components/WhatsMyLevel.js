import React from 'react'
import KidMom from '@/public/model-kid-mom.jpg'
import Image from 'next/image'
import HoverableButton from './HoverableButton'

export default function WhatsMyLevel() {
  return (
    <div>
      <h1 className='text-center text-4xl text-[var(--color2)]'>¿En que nivel estoy?</h1>
      <div className='md:flex items-center justify-around md:mx-8 gap-4 md:gap-8'>
        <Image src={KidMom} className='rounded-lg my-8 w-8/12 h-[300px] object-cover mx-auto' />
        <div className='w-10/12 mx-auto space-y-8'>
          <p>Si no te sientes muy seguro acerca tu nivel o crees que no es necesario hacer las cosas básicas porque ya las sabes, tienes la opción de hacer nuestro <span className='text-[var(--color3)] underline '>Placement Test Gratis</span> el cual te ubicará en el nivel adecuado de acuerdo a tus conocimientos, aparte de esto tendrás la videollamada con tu turo el cual también <span className='text-[var(--color3)] '>calificará tu nivel</span></p>
          <HoverableButton text={"Hacer Test Gratuito"} />
        </div>
      </div>
    </div>
  )
}
