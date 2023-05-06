import React, { useState } from 'react'
import { FcIdea } from 'react-icons/fc'

export default function TimePerWeek() {
  const [isChecked, setIsChecked] = useState(false)

  const checking = () => {
    setIsChecked(!isChecked)
  }
  return (
    <div className='mx-4'>
      <h2 className='text-4xl my-2 font-light md:text-center'>Avanza en tu inglés tan rápido como quieras</h2>
      <p className='md:text-center'>Recomendamos dos modalidades de estudio, sin embargo, cada estudiante puede avanzar a su propio ritmo.</p>
      <div className='flex my-8'>
        <label className="switch-button justify-center items-center mx-auto" for="toggle">
          <input onChange={checking} id="toggle" type="checkbox" />
          <span className="switch-slider"></span>
        </label>
      </div>
      <div className='max-w-md mx-auto'>
        {
          isChecked ?
            <>
              <p>Completa un nivel en <span className='text-[var(--color3)]'>8 semanas</span></p>
              <small className='text-gray-500'>8 horas de estudio semanales</small>
            </>
            :
            <>
              <p>Completa un nivel en <span className='text-[var(--color2)]'>15 semanas</span></p>
              <small className='text-gray-500'>4 horas de estudio semanales</small>
            </>
        }
        <div className='mx-4 flex'>
          {
            isChecked ?
              <>
                <div className='intensive-triangle'></div>
                <div className='regular-triangle absolute -z-10 opacity-25'></div>
              </>
              :
              <>
                <div className='regular-triangle'></div>
                <div className='intensive-triangle absolute -z-10 opacity-25'></div>
              </>
          }
        </div>
        <div className='flex justify-between text-gray-500'>
          <p className='text-gray-500 font-medium'>Semana 1</p>
          <p className='text-gray-500 font-medium'>Semana 8</p>
          <p className='text-gray-500 font-medium'>Semana 15</p>
        </div>
      </div>
      <div className='my-8 flex items-center md:justify-center gap-4 bg-blue-400/25 w-80 md:w-8/12 p-2 rounded-md mx-auto'>
        <FcIdea className='text-7xl md:text-4xl' />
        <small className='md:text-md'>Recuerda que puedes organizar tus horas de estudio los días que quieras gracias a la flexibilidad que ofrecemos en LET Academy</small>
      </div>
    </div>
  )
}
