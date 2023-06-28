import React from 'react'
import Lottie from 'lottie-react'
import anyMobile from '../public/animations/anyMobile.json'

export default function MobileDesktop() {
  return (
    <div className='h-96 max-w-xl mx-auto'>
      <div className='flex flex-col mx-8'>
        <div>
          <h2 className='text-3xl my-8'>¡Puedes entrar desde cualquier dispositivo y aprender en cualquier parte!</h2>
          <p>Gracias a que la plataforma <span className='text-[var(--color3)]'>LET-Students</span> esta optimizada prinpcipalmente para celulares y tablet, podras acceder a las clases desde cualquier parte y avanzar en tu nivel desde <span className='text-[var(--color3)]'>cualquier dispositivo</span>.</p>
        </div>
        <Lottie
          animationData={anyMobile}
          className='max-w-[300px] md:max-w-[250px] mx-auto'

        />
      </div>
    </div>
  )
}
