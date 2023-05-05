import Image from 'next/image'
import React from 'react'
import PlatformTour from '@/public/PlatformTour.png'

export default function Path() {
  return (
    <div className='mx-8'>
      <h2 className='text-3xl my-4'>¡No estarás solo nunca!</h2>
      <p className='font-semibold'>No te preocupes, estaremos contigo paso a paso para que accedas a todas tus clases, lecciones, contenidos y herramientas de LET Academy con facilidad.</p>
      <div className='flex flex-col'>
        <div className='my-12'>
          <header className='flex justify-start items-center gap-8'>
            <p className='text-[var(--color2)] w-8 h-8 flex items-center justify-center shadow-slate-500 shadow-md rounded-full'>1</p>
            <p className='text-[var(--color2)]'>Tour Interactivo</p>
          </header>
          <Image src={PlatformTour} className='w-70 my-4' />
          <p className='text-sm text-slate-600'>Al convertirte en estudiante, podrás inscribirte a una llamada personalizada donde tendrás un tour interáctivo, guiado por un agente, donde te explicaremos como funciona la plataforma y que debes hacer para empezar.</p>
        </div>
        <div className='my-12'>
          <header className='flex justify-start items-center gap-8'>
            <p className='text-[var(--color2)] w-8 h-8 flex items-center justify-center shadow-slate-500 shadow-md rounded-full'>2</p>
            <p className='text-[var(--color2)]'>Establecimiento de horarios fijos</p>
          </header>
          <Image src={PlatformTour} className='w-70 my-4' />
          <p className='text-sm text-slate-600'>Una vez dentro, la clave del éxito es la disciplina y nosotros ¡queremos ayudarte a lograrlo! Es por esta razón que establecerás horas específicas para tu estudio y cuantos días a la semana tendrás a disposición, tanto para estudio con clases pre-grabadas y material didáctico así como para las clases en vivo con el tutor y con la ayuda escolástica.</p>
        </div>
        <div className='my-12'>
          <header className='flex justify-start items-center gap-8'>
            <p className='text-[var(--color2)] w-8 h-8 flex items-center justify-center shadow-slate-500 shadow-md rounded-full'>3</p>
            <p className='text-[var(--color2)]'>Acompañamiento vía Whatsapp</p>
          </header>
          <Image src={PlatformTour} className='w-70 my-4' />
          <p className='text-sm text-slate-600'>Recibirás un plan de estudio personalizado vía WhatsApp y tendrás un asesor que te acompañará en tu proceso. Además podrás aclarar cualqueir duda que tengas para que tu aprendizaje sea más rápido.</p>
        </div>
        <div className='my-12'>
          <header className='flex justify-start items-center gap-8'>
            <p className='text-[var(--color2)] w-8 h-8 flex items-center justify-center shadow-slate-500 shadow-md rounded-full'>4</p>
            <p className='text-[var(--color2)]'>Agenda clases en vivo con un tutor</p>
          </header>
          <Image src={PlatformTour} className='w-70 my-4' />
          <p className='text-sm text-slate-600'>A diferencia de otros cursos, al inscribirte a LET Academy tendrás a tu disposición inmediatamente las clases en vivo con un tutor para reforzar tus conocimientos</p>
        </div>
        <div className='my-12'>
          <header className='flex justify-start items-center gap-8'>
            <p className='text-[var(--color2)] w-8 h-8 flex items-center justify-center shadow-slate-500 shadow-md rounded-full'>5</p>
            <p className='text-[var(--color2)]'>Realiza las pruebas finales para obtener tu certificado</p>
          </header>
          <Image src={PlatformTour} className='w-70 my-4' />
          <p className='text-sm text-slate-600'>Para poder obtener tu certificado queremos asegurarnos que dominas a la perfección el nivel, por esta razón tienes una prueba escrita y además tienes una prueba oral con un tutor la cual será personalizada 1c1, y si logras superarlas obtendrás tu certificado de nivel y pasarás al siguiente nivel</p>
        </div>
      </div>
    </div>
  )
}
