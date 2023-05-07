import React from 'react'

export default function Banner3() {
  return (
    <div>
      <div class="md:flex items-center pl-16 space-x-16 mt-12 md:mt-20 md:mr-0 mr-10">
        <div>
          <h1 class="lg:text-5xl  font-bold leading-tight text-5xl">Conoce todos nuestros <span className='text-[var(--color3)]'>beneficios exclusivos</span></h1>
          <p class="mt-4 text-lg font-normal ">Con nuestro método innovador, avanzarás de Beginner a Advanced mucho más rápido que en escuelas de inglés tradicionales, <br />No te pierdas los beneficios que ofrecemos por <span className='text-[var(--color3)]'>tiempo limitado</span></p>
          <div class="flex mt-10 items-center space-x-3 py-3 text-white rounded-lg transition-all duration-400 transform cursor-pointer">
            <button class="benefits-button">
              ¡Comienza ahora!
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
