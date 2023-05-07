import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion({ PreguntasHome }) {
  return (
    <div className='mx-8 mt-32 sm:mt-0 md:mx-52'>
      <p className='my-8 text-center text-[var(--color3)] text-xl'>¿Dudas? ¡Acláralas con nuestras preguntas frecuentes!</p>
      {
        PreguntasHome.map((pregunta) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <h3 className='text-[var(--color2)]'>{pregunta.title}</h3>
            </AccordionSummary>
            <AccordionDetails style={{ color: 'grayText' }}>{pregunta.text}</AccordionDetails>
          </Accordion>
        ))
      }
    </div>
  );
}
