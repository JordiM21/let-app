import Banner4 from '@/components/Banner4'
import CTA from '@/components/CTA'
import Levels from '@/components/LevelSlider'
import Recuerda from '@/components/Recuerda'
import WhatsMyLevel from '@/components/WhatsMyLevel'
import Image from 'next/image'
import React from 'react'
import img4 from '@/public/model-kid-girl.jpg'
import img2 from '@/public/model-girl.jpg'
import chatLet from '@/public/onlinemeetingzoom.png'
import OnlineQuiz from '@/components/OnlineQuiz'
import PdfReader from '@/components/pdfReader'
import { AiOutlineDownload } from 'react-icons/ai'
import { preguntasNiveles } from '@/models/preguntasFrecuentes'
import SimpleAccordion from '@/components/Accordion'

export default function Niveles() {
  return (
    <>
      <CTA
        message={"No importa en el nivel que te encuentres, ¡siempre puedes mejorar!"}
        button={"¡Comienza Hoy!"}
        link={"/Promociones"}
        size={"big"}
      />
      <Banner4 />
      <Recuerda message={"Recuerda que la edad no influye en el nivel que tengas, sin importar tu edad puedes empezar desde el inicio."} />
      <Levels />
      <CTA
        message={"Aprovecha nuestra oferta exclusiva "}
        button={"¡Sé bilingüe hoy!"}
        link={"/Promociones"}
        size={"small"}
      />
      <WhatsMyLevel />
      <h1 className='text-center text-4xl text-[var(--color3)] my-8'>¿Como te ayudaremos?</h1>
      <section className='w-10/12 md:w-11/12 md:flex my-8 items-center justify-center flex-wrap mx-auto md:mb-28 space-y-4 md:space-y-8'>
        <div className='md:w-1/2 md:h-96'>
          <header className='flex items-center gap-4'>
            <p className='w-8 h-8 bg-[var(--color2)] text-white flex rounded-full items-center justify-center'>1</p>
            <p className='text-[var(--color2)] md:text-xl '>Apoyo personalizado del tutor</p>
          </header>
          <Image className='rounded-lg my-4 object-cover mx-auto md:h-64 md:w-96' src={chatLet} width={260} height={260} />
          <p className='text-gray-800 text-sm'>Tu tutor personalizado te ayudará al final de cada módulo y en cada clase a <span className='text-[var(--color3)] '> mejorar en los temas que necesites,</span> al igual estará muy pendiente de tu progreso y de que avances a tiempo.</p>
        </div>
        <div className='md:w-1/2 md:h-96'>
          <header className='flex items-center gap-4'>
            <p className='w-8 h-8 bg-[var(--color2)] text-white flex rounded-full items-center justify-center'>2</p>
            <p className='text-[var(--color2)] md:text-xl '>Clases Interáctivas</p>
          </header>
          <Image className='rounded-lg my-4 object-cover mx-auto md:h-64 md:w-96' src={img2} width={260} height={260} />
          <p className='text-gray-800 text-sm'>Clases de aprendizaje didáctico y eficaz, <span className='text-[var(--color3)] '>situaciones de la vida real</span>, no te aburres y puedes verlas desde cualquier parte gracias a su facilidad de acceso, estamos seguros que <span className='text-[var(--color3)] '>aprender muchisimo.</span> ¡No hay excusas!</p>
        </div>
        <div className='md:w-1/2 md:h-96'>
          <header className='flex items-center gap-4'>
            <p className='w-8 h-8 bg-[var(--color2)] text-white flex rounded-full items-center justify-center'>3</p>
            <p className='text-[var(--color2)] md:text-xl'>Pruebas de aprendizaje</p>
          </header>
          <OnlineQuiz />
          <p className='text-gray-800 text-sm'>Nos aseguramos que todos nuestros estudiantes aprendan realmente y tengan las <span className='text-[var(--color3)] '>capacidades necesarias</span> para pasar el nivel, es por eso que para pasar cada nivel tendrás que pasar una prueba escrita y un encuentro oral con tu tutor personalizado, donde tendrán una charla y calificará si estás preparado/a.</p>
        </div>
        <div className='md:w-1/2 md:h-96'>
          <header className='flex items-center gap-4'>
            <p className='w-8 h-8 bg-[var(--color2)] text-white flex rounded-full items-center justify-center'>4</p>
            <p className='text-[var(--color2)] md:text-xl'>Material de Aprendizaje</p>
          </header>
          <Image className='rounded-lg my-4 object-cover mx-auto md:h-64 md:w-96' src={img4} width={260} height={260} />
          <p className='text-gray-800 text-sm'>Nos aseguramos que todos nuestros estudiantes aprendan realmente y tengan las <span className='text-[var(--color3)] '>capacidades necesarias</span> para pasar el nivel, es por eso que para pasar cada nivel tendrás que pasar una prueba escrita y un encuentro oral con tu tutor personalizado, donde tendrán una charla y calificará si estás preparado/a.</p>
        </div>
      </section>
      <Recuerda message={"Al entrar al curso el tutor asignado te entregará tu plan de estudio personalizado y el camino que te llevará a ser bilingüe."} />
      <section className='w-10/12 md:w-8/12 mx-auto space-y-4'>
        <h1 className='text-3xl'><span className='text-[var(--color2)]'>LET Academy</span> esta basado en el Marco Común Europeo</h1>
        <p>El Marco Común Europeo de Referencia para las lenguas: aprendizaje, enseñanza, evaluación<span className='text-[var(--color2)]'> (MCER, o CEFR en inglés) </span>es un estándar europeo, utilizado también en otras regiones, que sirve para medir el nivel de competencia en una determinada lengua.</p>
        <a href='assessment_grid_english.pdf' download className='group flex items-center bg-[var(--color3)] text-white text-2xl w-10/12 mx-auto justify-center gap-4 py-4 rounded-lg transition-all .5s ease-in hover:bg-white border-2 border-[var(--color3)] hover:text-[var(--color3)]'>
          Descárgalo
          <AiOutlineDownload className='group-hover:fill-[var(--color3)] fill-white' size={40} />
        </a>
      </section>
      <SimpleAccordion PreguntasHome={preguntasNiveles} />
    </>
  )
}
