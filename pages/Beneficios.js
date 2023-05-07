import Banner3 from '@/components/Banner3'
import CustomAccordion from '@/components/CustomAccordion'
import TableDiferences from '@/components/TableDiferences'
import { preguntasBeneficios } from '@/models/preguntasFrecuentes'
import React from 'react'

export default function Beneficios() {
  return (
    <div>
      <Banner3 />
      <CustomAccordion preguntasBeneficios={preguntasBeneficios} />
      <TableDiferences />
    </div>
  )
}
