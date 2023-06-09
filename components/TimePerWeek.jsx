import React, { useState } from 'react'
import { FcIdea } from 'react-icons/fc'
import Recuerda from './Recuerda'
import Lottie from 'lottie-react'
import tutor from '../public/animations/tutor.json'
import HoverableButton from './HoverableButton'

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
              <p>Completa un nivel en <span className='text-[var(--color3)]'>20 semanas</span></p>
              <small className='text-gray-500'>3 horas de estudio semanales</small>
            </>
            :
            <>
              <p>Completa un nivel en <span className='text-[var(--color2)]'>10 semanas</span></p>
              <small className='text-gray-500'>6 horas de estudio semanales</small>
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
          <p className='text-gray-500 font-medium'>Semana 10</p>
          <p className='text-gray-500 font-medium'>Semana 20</p>
        </div>
      </div>
      <Recuerda message={"Recuerda que puedes organizar tus horas de estudio los días que quieras gracias a la flexibilidad que ofrecemos en LET Academy"} />
      <div className='flex flex-col-reverse md:flex-row justify-center items-center px-16 py-2'>
        <div className='md:w-1/2 my-2'>
          <p className='text-2xl md:text-5xl text-[var(--color3)]'>Tu tutor personal te esta esperando!</p>
          <p className='text-gray-800 my-8'>Al inicio del curso te asignaremos un tutor personal que te ayudará en tu proceso de aprendizaje y se asegurará de que logres tus objetivos. <span className='text-sky-600'>También tendrás su WhatsApp para escribirle cualquier duda.</span> Genial!</p>
          <HoverableButton text={"Quiero ser Bilingue"} />
        </div>
        <div className='md:w-1/2'>
          <Lottie
            animationData={tutor} className='w-[400px] h-[400px]' />
        </div>
      </div>
    </div>
  )
}
