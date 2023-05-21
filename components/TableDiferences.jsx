import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BsCheck, BsDashLg } from 'react-icons/bs'

function createData(name, privateLessons, personalTutor, academic, WhatsApp, certificate, exam, schedule, callcenter, students) {
  return { name, privateLessons, personalTutor, academic, WhatsApp, certificate, exam, schedule, callcenter, students };
}

const rows = [
  createData('LET Academy',
    <BsCheck className='text-5xl fill-green-600' />,
    <BsCheck className='text-5xl fill-green-600' />,
    <BsCheck className='text-5xl fill-green-600' />,
    <BsCheck className='text-5xl fill-green-600' />,
    <BsCheck className='text-5xl fill-green-600' />,
    <BsCheck className='text-5xl fill-green-600' />,
    <BsCheck className='text-5xl fill-green-600' />,
    <BsCheck className='text-5xl fill-green-600' />,
    <BsCheck className='text-5xl fill-green-600' />,
  ),
  createData('Escuela Tradicional',
    <BsDashLg className='text-5xl fill-gray-400' />,
    <BsDashLg className='text-5xl fill-gray-400' />,
    <BsCheck className='text-5xl fill-green-600' />,
    <BsDashLg className='text-5xl fill-gray-400' />,
    <BsDashLg className='text-5xl fill-gray-400' />,
    <BsCheck className='text-5xl fill-green-600' />,
    <BsDashLg className='text-5xl fill-gray-400' />,
    <BsDashLg className='text-5xl fill-gray-400' />,
    <BsCheck className='text-5xl fill-green-600' />,
  ),
  createData('Aplicaciones',
    <BsDashLg className='text-5xl fill-gray-400' />,
    <BsDashLg className='text-5xl fill-gray-400' />,
    <BsDashLg className='text-5xl fill-gray-400' />,
    <BsDashLg className='text-5xl fill-gray-400' />,
    <BsDashLg className='text-5xl fill-gray-400' />,
    <BsCheck className='text-5xl fill-green-600' />,
    <BsCheck className='text-5xl fill-green-600' />,
    <BsCheck className='text-5xl fill-green-600' />,
    <BsDashLg className='text-5xl fill-gray-400' />,
  ),
  createData('Otros cursos',
    <BsDashLg className='text-5xl fill-gray-400' />,
    <BsDashLg className='text-5xl fill-gray-400' />,
    <BsDashLg className='text-5xl fill-gray-400' />,
    <BsDashLg className='text-5xl fill-gray-400' />,
    <BsCheck className='text-5xl fill-green-600' />,
    <BsCheck className='text-5xl fill-green-600' />,
    <BsDashLg className='text-5xl fill-gray-400' />,
    <BsDashLg className='text-5xl fill-gray-400' />,
    <BsCheck className='text-5xl fill-green-600' />,
  ),

];

export default function TableDiferences() {
  return (
    <>
      <h1 className='w-10/12 mx-auto text-center text-[var(--color2Shadow)] text-2xl lg:text-4xl my-4 md:my-8'>Comparamos <span className='text-[var(--color3)]'>LET Academy</span> con otros métodos de aprender inglés y este fue el resultado</h1>
      <TableContainer component={Paper} className='w-[95%] lg:w-[75%] mx-auto'>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption className='text-sm'><span className='md:hidden'>(Desliza a la izquierda para ver todos los beneficios) </span>Comparación de LET Academy con otros métodos </caption>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right">Clases 1-1 </TableCell>
              <TableCell align="right">Tutor<br />Personal</TableCell>
              <TableCell align="right">Apoyo<br />Académico</TableCell>
              <TableCell align="right">Seguimiento <br />WhatsApp</TableCell>
              <TableCell align="right">Certificado <br />nivel</TableCell>
              <TableCell align="right">Examen nivelación</TableCell>
              <TableCell align="right">Horarios<br />Flexibles</TableCell>
              <TableCell align="right">Asesores 24/7</TableCell>
              <TableCell align="right">Comunidad  estudiantes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell className={row.name == "LET Academy" ? `bg-[var(--color2)] text-white font-bold border-2 border-[var(--color2)]` : `bg-blue-200 font-bold`} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell className={row.name == "LET Academy" ? `border-y-2 border-[var(--color2)] box-border` : ``} align="right">{row.privateLessons}</TableCell>
                <TableCell className={row.name == "LET Academy" ? `border-y-2 border-[var(--color2)]` : ``} align="right">{row.personalTutor}</TableCell>
                <TableCell className={row.name == "LET Academy" ? `border-y-2 border-[var(--color2)]` : ``} align="right">{row.academic}</TableCell>
                <TableCell className={row.name == "LET Academy" ? `border-y-2 border-[var(--color2)]` : ``} align="right">{row.WhatsApp}</TableCell>
                <TableCell className={row.name == "LET Academy" ? `border-y-2 border-[var(--color2)]` : ``} align="right">{row.certificate}</TableCell>
                <TableCell className={row.name == "LET Academy" ? `border-y-2 border-[var(--color2)]` : ``} align="right">{row.exam}</TableCell>
                <TableCell className={row.name == "LET Academy" ? `border-y-2 border-[var(--color2)]` : ``} align="right">{row.schedule}</TableCell>
                <TableCell className={row.name == "LET Academy" ? `border-y-2 border-[var(--color2)]` : ``} align="right">{row.callcenter}</TableCell>
                <TableCell className={row.name == "LET Academy" ? `border-y-2 border-r-2 border-[var(--color2)]` : ``} align="right">{row.students}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}