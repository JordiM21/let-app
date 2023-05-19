import Banner4 from '@/components/Banner4'
import CTA from '@/components/CTA'
import Levels from '@/components/LevelSlider'
import Recuerda from '@/components/Recuerda'
import WhatsMyLevel from '@/components/WhatsMyLevel'
import Image from 'next/image'
import React from 'react'
import kidGirl from '@/public/model-kid-girl.jpg'
import img2 from '@/public/model-girl.jpg'

export default function Niveles() {
  return (
    <>
      <CTA
        message={"No importa en el nivel que te encuentres, ¡siempre puedes mejorar!"}
        button={"¡Comienza Hoy!"}
        link={"/#/"}
        size={"big"}
      />
      <Banner4 />
      <Recuerda message={"Recuerda que la edad no influye en el nivel que tengas, sin importar tu edad puedes empezar desde el inicio."} />
      <Levels />
      <CTA
        message={"Aprovecha nuestra oferta exclusiva "}
        button={"¡Sé bilingüe hoy!"}
        link={"/#/"}
        size={"small"}
      />
      <WhatsMyLevel />
      <section className='w-10/12 mx-auto space-y-4'>
        <h1 className='text-center text-4xl text-[var(--color3)] my-8'>¿Como te ayudaremos?</h1>
        <div>
          <header className='flex items-center gap-4'>
            <p className='w-8 h-8 bg-[var(--color2)] text-white flex rounded-full items-center justify-center'>1</p>
            <p className='text-[var(--color2)] '>Apoyo personalizado del tutor</p>
          </header>
          <Image className='rounded-lg my-4 object-cover mx-auto' src={kidGirl} width={260} height={260} />
          <p className='text-gray-800 text-sm'>Tu tutor personalizado te ayudará al final de cada módulo y en cada clase a <span className='text-[var(--color3)] '> mejorar en los temas que necesites,</span> al igual estará muy pendiente de tu progreso y de que avances a tiempo.</p>
        </div>
        <div>
          <header className='flex items-center gap-4'>
            <p className='w-8 h-8 bg-[var(--color2)] text-white flex rounded-full items-center justify-center'>2</p>
            <p className='text-[var(--color2)] '>Clases Interáctivas</p>
          </header>
          <Image className='rounded-lg my-4 object-cover mx-auto' src={img2} width={260} height={260} />
          <p className='text-gray-800 text-sm'>Clases de aprendizaje didáctico y eficaz, <span className='text-[var(--color3)] '>situaciones de la vida real</span>, no te aburres y puedes verlas desde cualquier parte gracias a que son pre-grabadas y puedes <span className='text-[var(--color3)] '>descargarlas.</span> ¡No hay excusas!</p>
        </div>
        <div>
          <header className='flex items-center gap-4'>
            <p className='w-8 h-8 bg-[var(--color2)] text-white flex rounded-full items-center justify-center'>3</p>
            <p className='text-[var(--color2)] '>Pruebas de aprendizaje</p>
          </header>
          <Image className='rounded-lg my-4 object-cover mx-auto' src={img2} width={260} height={260} />
          <p className='text-gray-800 text-sm'>Nos aseguramos que todos nuestros estudiantes aprendan realmente y tengan las <span className='text-[var(--color3)] '>capacidades necesarias</span> para pasar el nivel, es por eso que para pasar cada nivel tendrás que pasar una prueba escrita y un encuentro oral con tu tutor personalizado, donde tendrán una charla y calificará si estás preparado/a.</p>
        </div>
        <div>
          <header className='flex items-center gap-4'>
            <p className='w-8 h-8 bg-[var(--color2)] text-white flex rounded-full items-center justify-center'>3</p>
            <p className='text-[var(--color2)] '>Pruebas de aprendizaje</p>
          </header>
          <Image className='rounded-lg my-4 object-cover mx-auto' src={img2} width={260} height={260} />
          <p className='text-gray-800 text-sm'>Nos aseguramos que todos nuestros estudiantes aprendan realmente y tengan las <span className='text-[var(--color3)] '>capacidades necesarias</span> para pasar el nivel, es por eso que para pasar cada nivel tendrás que pasar una prueba escrita y un encuentro oral con tu tutor personalizado, donde tendrán una charla y calificará si estás preparado/a.</p>
        </div>
      </section>
    </>
  )
}
