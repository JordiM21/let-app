import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Clases en vivo 1-1', 159, 6.0, 24, 4.0),
  createData('Acceso 24/7 en pc o app', 237, 9.0, 37, 4.3),
  createData('Plan de estudio personalizado'),
  createData('Apoyo Académico'),
  createData('Tutor personalizado'),
  createData('Seguimiento a tu proceso vía WhatsApp'),
  createData('Examen de nivelación'),
  createData('Tu eliges los horarios'),
  createData('Clase enfocada según tu nivel'),
  createData('Material didáctico'),
  createData('Herramientas Interáctivas'),
  createData('Asesores 24/7'),
  createData('Comunidad de estudiantes'),
  createData('Certificado por nivel'),
  createData('No tareas aburridas'),
  createData('Actividades simulando la realidad'),

];

export default function TableDiferences() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>Comparamos LET Academy con otros métodos de aprender</caption>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">LET <br /> Academy </TableCell>
            <TableCell align="right">Aplicaciones</TableCell>
            <TableCell align="right">Escuelas <br /> tradicionales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}