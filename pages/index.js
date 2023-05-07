import SimpleAccordion from '@/components/Accordion'
import Banner1 from '@/components/Banner1'
import CTA from '@/components/CTA'
import Form from '@/components/Form'
import Reasons from '@/components/Reasons'
import Slider from '@/components/Slider'
import TimePerWeek from '@/components/TimePerWeek'
import { PreguntasHome } from '@/models/preguntasFrecuentes';



export default function Home() {
  return (
    <>
      <CTA
        message={"Aprovecha 50% OFF en tu curso de inglés."}
        button={"¡Comienza Hoy!"}
        link={"/#/"}
        size={"big"}
      />
      <section className='flex items-center flex-wrap justify-around md:flex-row flex-col '>
        <Banner1 />
        <Form />
      </section>
      <section>
        <Slider />
      </section>
      <CTA
        message={"¡Pierde el miedo de hablar inglés!"}
        button={"¡Quiero empezar!"}
        link={"/#/"}
        size={"small"}
      />
      <section>
        <Reasons />
      </section>
      <CTA
        message={"¡Dale un vistazo a nuestro método de eneseñanza!"}
        button={"Metodología"}
        link={"/#/"}
        size={"big"}
      />
      <section>
        <TimePerWeek />
      </section>
      <section>
        <SimpleAccordion PreguntasHome={PreguntasHome} />
      </section>
    </>
  )
}
