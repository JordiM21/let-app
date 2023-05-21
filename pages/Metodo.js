import SimpleAccordion from '@/components/Accordion'
import Banner2 from '@/components/Banner2'
import CTA from '@/components/CTA'
import Form from '@/components/Form'
import HowItWorks from '@/components/HowItWorks'
import MobileDesktop from '@/components/MobileDesktop'
import Path from '@/components/Path'
import TimePerWeek from '@/components/TimePerWeek'
import React from 'react'
import { PreguntasHome } from '@/models/preguntasFrecuentes'

export default function Metodo() {
  return (
    <>
      <CTA
        message={"No te desmotives y aprovecha esta Oferta Especial."}
        button={"¡Comienza Hoy!"}
        link={"/Promociones"}
        size={"big"}
      />
      <section className='flex items-center flex-wrap justify-around md:flex-row flex-col '>
        <Form />
        <Banner2 />
      </section>
      <section>
        <HowItWorks />
      </section>
      <section className='my-8 md:mb-16'>
        <CTA
          message={"Si aún tienes cualquier duda recuerda que puedes."}
          button={"Solicitar más información"}
          link={"/Promociones"}
          size={"short"}
        />
      </section>
      <section>
        <Path />
      </section>
      <section>
        <TimePerWeek />
      </section>
      <CTA
        message={"¿Aún tienes dudas? Resuélvelas con nuestras "}
        button={"Preguntas Frecuentes"}
        link={"/Promociones"}
        size={"short"}
      />
      <section>
        <MobileDesktop />
      </section>
      <section>
        <SimpleAccordion PreguntasHome={PreguntasHome} />
      </section>
    </>
  )
}
