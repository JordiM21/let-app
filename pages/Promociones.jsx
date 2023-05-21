import React from 'react'
import BannerPromotions from '@/components/BannerPromotions'
import CustomAccordion from '@/components/CustomAccordion'
import { PreguntasHome, preguntasBeneficios } from '@/models/preguntasFrecuentes'
import Reasons from '@/components/Reasons'
import TableDiferences from '@/components/TableDiferences'
import SimpleAccordion from '@/components/Accordion'

export default function Promociones() {
  return (
    <div>
      <BannerPromotions />
      <CustomAccordion preguntasBeneficios={preguntasBeneficios} />
      <Reasons />
      <TableDiferences />
      <SimpleAccordion PreguntasHome={PreguntasHome} />
    </div>
  )
}
