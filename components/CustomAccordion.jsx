import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from 'react'

export default function CustomAccordion({ preguntasBeneficios }) {
  return (
    <div className='mx-8 md:mx-52'>
      <p className='my-8 text-center text-[var(--color3)] text-xl'>Beneficios únicos para nuestros estudiantes</p>
      {
        preguntasBeneficios.map((pregunta) => (
          <Accordion onSelect={() => alert("change!")} className='my-8 border-[var(--color2)] border-collapse border-2'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
              className='h-20'

            >
              {pregunta.icon}
              <h3 className='text-[var(--color1)] ml-4 text-lg'>{pregunta.title}</h3>
            </AccordionSummary>
            <AccordionDetails style={{ color: 'grayText' }}>{pregunta.text}</AccordionDetails>
          </Accordion>
        ))
      }
    </div>
  )
}
