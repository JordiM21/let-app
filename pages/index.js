import SimpleAccordion from '@/components/Accordion'
import Banner1 from '@/components/Banner1'
import CTA from '@/components/CTA'
import Form from '@/components/Form'
import Loading from '@/components/Loading'
import Reasons from '@/components/Reasons'
import Slider from '@/components/Slider'
import TimePerWeek from '@/components/TimePerWeek'
import { PreguntasHome } from '@/models/preguntasFrecuentes';
import { useEffect, useState } from 'react'



export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isLoading ? <Loading /> : (
    <>
      <CTA
        message={"Aprovecha 50% OFF en tu curso de inglés."}
        button={"¡Comienza Hoy!"}
        link={"/Promociones"}
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
        link={"/Promociones"}
        size={"small"}
      />
      <section>
        <Reasons />
      </section>
      <CTA
        message={"¡Dale un vistazo a nuestro método de eneseñanza!"}
        button={"Metodología"}
        link={"/Promociones"}
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
