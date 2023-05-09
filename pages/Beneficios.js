import Banner3 from '@/components/Banner3'
import CustomAccordion from '@/components/CustomAccordion'
import TableDiferences from '@/components/TableDiferences'
import { PreguntasHome, preguntasBeneficios } from '@/models/preguntasFrecuentes'
import Image from 'next/image'
import React from 'react'
import modelkid from '@/public/model-kid-meeting.jpg'
import modelgirl from '@/public/model-girl2.jpg'
import { FcIdea } from 'react-icons/fc'
import Recuerda from '@/components/Recuerda'
import HoverableButton from '@/components/HoverableButton'
import CTA from '@/components/CTA'
import OtherBenefits from '@/components/OtherBenefits'
import SimpleAccordion from '@/components/Accordion'

export default function Beneficios() {
  return (
    <div>
      <CTA
        message={"Expande tus posibilidades aprendiendo inglés"}
        button={"Comienza ahora"}
        link={"/#/"}
        size={"big"}
      />
      <Banner3 />
      <CustomAccordion preguntasBeneficios={preguntasBeneficios} />
      <CTA
        message={"Aprende inglés con un 50% de descuento"}
        button={"Solicitar información"}
        link={"/#"}
        size={"medium"}
      />
      <section>
        <div className='space-y-16 w-[80%] lg:w-[90%] md:gap-8 mx-auto flex flex-col md:flex-row items-center justify-around'>
          <div>
            <Image src={modelkid} className='rounded-lg w-full h-[500px] object-cover mx-auto' />
            <h3 className='text-xl my-4 text-[var(--color2)] lg:text-3xl'>¿Cuanto tiempo demora?</h3>
            <p className='text-sm text-gray-800 lg:text-md'>En LET Academy puedes avanzar tan rápido como quieras. Solo dependes del esfuerzo que pongas y las horas que le dediques semanalmente. Tienes acceso a todas las clases inmediatamente así que puedes verlas a tu ritmo.</p>
          </div>
          <div>
            <Image src={modelgirl} className='rounded-lg w-full h-[500px] object-cover mx-auto' />
            <h3 className='text-xl my-4 text-[var(--color2)] lg:text-3xl '>¿Cuanto Costa LET Academy?</h3>
            <p className='text-sm text-gray-800 lg:text-md'>Tenemos planes de pagos ajustados a tu moneda local. Nuestros asesores una vez nos dejees tus datos se comunicarán contigo y te ayudarán a elegir un plan de pago que se adapte a tus posibilidades. Te recomendamos aprovechar las promociones.</p>
          </div>
        </div>
        <div className="justify-center flex items-center space-x-3 py-8 text-white rounded-lg transition-all duration-400 transform cursor-pointer">
          <HoverableButton text={"Solicita más información"} />
        </div>
        <Recuerda message={"Recuerda que tendrás a tu disposición el WhatsApp de tu TUTOR PERSONAL para organizar lecciones y resolver las dudas que tengas"} />
      </section>
      <TableDiferences />
      <OtherBenefits />
      <div className="justify-center flex items-center space-x-3 py-8 text-white rounded-lg transition-all duration-400 transform cursor-pointer">
        <HoverableButton text={"¡Listo para ser Bilingüe!"} />
      </div>
      <section>
        <SimpleAccordion PreguntasHome={PreguntasHome} />
      </section>
    </div>
  )
}
