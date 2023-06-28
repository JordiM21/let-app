import React, { useEffect, useState } from 'react'
import BannerPromotions from '@/components/BannerPromotions'
import CustomAccordion from '@/components/CustomAccordion'
import { PreguntasHome, preguntasBeneficios } from '@/models/preguntasFrecuentes'
import Reasons from '@/components/Reasons'
import TableDiferences from '@/components/TableDiferences'
import SimpleAccordion from '@/components/Accordion'
import Loading from '@/components/Loading'

export default function Promociones() {

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
    <div>
      <BannerPromotions />
      <CustomAccordion preguntasBeneficios={preguntasBeneficios} />
      <Reasons />
      <TableDiferences />
      <SimpleAccordion PreguntasHome={PreguntasHome} />
    </div>
  )
}
