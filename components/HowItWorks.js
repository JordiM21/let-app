import React from 'react'
import Method from '@/public/method.jpg'
import Image from 'next/image'

export default function HowItWorks() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center'>
      <Image className='w-80 md:w-96' src={Method} />
      <div className='mx-8'>
        <small className='text-red-700'>Conoce el método líder y mas innovador de inglés online</small>
        <h2 className='text-2xl'>¿Como funciona LET Academy?</h2>
        <p>¡Es muy sencillo! Solo entra a la plataforma y empieza a aprender con nuestro material didáctico y nuestras clases interáctivas, aprenderás nuevas cosas y mejorarás tu vocabulario. Luego con nuestras clases en vivo aprenderás a ponerlas en práctica con ejemplos de la vida real.</p>
      </div>
    </div>
  )
}
