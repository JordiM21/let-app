import Banner2 from '@/components/Banner2'
import CTA from '@/components/CTA'
import Form from '@/components/Form'
import HowItWorks from '@/components/HowItWorks'
import MobileDesktop from '@/components/MobileDesktop'
import Path from '@/components/Path'
import TimePerWeek from '@/components/TimePerWeek'
import React from 'react'

export default function Metodo() {
  return (
    <>
      <CTA
        message={"¡POR POCOS DÍAS! No te desmotives y aprende inglés este 2023 con esta Oferta Especial."}
        button={"¡Comienza Hoy!"}
        link={"/#/"}
        size={"big"}
      />
      <section className='flex items-center flex-wrap justify-around md:flex-row flex-col '>
        <Form />
        <Banner2 />
      </section>
      <section>
        <HowItWorks />
      </section>
      <section className='my-4'>
        <CTA
          message={"Si aún tienes cualquier duda recuerda que puedes."}
          button={"Solicitar más información"}
          link={"/#/"}
          size={"short"}
        />
      </section>
      <section>
        <Path />
      </section>
      <section>
        <TimePerWeek />
      </section>
      <section>
        <MobileDesktop />
      </section>
    </>
  )
}
