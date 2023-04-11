import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AiOutlineRight } from "react-icons/ai";
import { PreguntasHome } from '@/models/preguntasFrecuentes';

export default function SimpleAccordion() {
  return (
    <div>
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
      <Accordion>
        <a href='/info'>
          <button>
            ver todos los beneficios <AiOutlineRight className='next' />
          </button>
        </a>
      </Accordion>
    </div>
  );
}
