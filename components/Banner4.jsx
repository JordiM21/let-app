import React from 'react'
import HoverableButton from './HoverableButton'

export default function Banner4() {
  return (
    <div class="md:flex items-center pl-16 space-x-16 mt-12 md:mt-20 md:mr-0 mr-10">
      <div>
        <h1 class="lg:text-5xl  font-bold leading-tight text-5xl">Conoce nuestros niveles y lo que <span className='text-[var(--color3)]'>aprenderás en cada uno</span></h1>
        <p class="mt-4 text-lg font-normal ">Open English está basado en el Marco Común Europeo de Referencia para las lenguas, <span className='text-[var(--color3)]'> ¡obtendrás un certificado cada vez que avances de nivel!</span></p>
        <div className="flex items-center space-x-3 py-8 text-white rounded-lg transition-all duration-400 transform cursor-pointer">
          <HoverableButton text={"¡Comienza ahora!"} />
        </div>
      </div>

    </div>
  )
}
