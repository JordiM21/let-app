import React from 'react'
import { AiFillFacebook, AiFillMail, AiOutlineInstagram } from 'react-icons/ai'
import Link from 'next/link'

export default function Footer() {

  return (
    <div className='my-12'>
      <p className='my-8 text-center text-lg '>¡Dale un vistazo a nuestras redes!</p>
      <div className='flex justify-center gap-8'>
        <a target='_blank' href="https://www.facebook.com/profile.php?id=100076017257031">
          <AiFillFacebook className='text-6xl fill-blue-500 cursor-pointer' />
        </a>
        <a href='https://www.instagram.com/learnenglishtogether21/' target='_blank'>
          <AiOutlineInstagram className='text-6xl fill-rose-600 cursor-pointer' />
        </a>
        <a href='mailto:jordimantilla21@gmail.com'>
          <AiFillMail className='text-6xl fill-slate-600' />
        </a>
      </div>
      <div className='bg-[var(--color2Soft)] text-xs px-8 rounded-md my-4 py-8 flex flex-col w-full sm:justify-evenly sm:flex-row'>
        <div className='flex flex-col space-y-1 '>
          <p className='text-[var(--color2)] my-2 text-base'>Nuestros cursos</p>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Curso de Inglés</a>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Curso de inglés PRINCIPIANTES</a>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Curso de Inglés INTERMEDIO</a>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Curso de Inglés AVANZADO</a>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Curso de Italiano</a>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Curso de Portugués</a>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Curso de Francés</a>
        </div>
        <div className='flex flex-col space-y-1 '>
          <p className='text-[var(--color2)] my-2 text-base'>Recursos de Inglés</p>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Test de nivel de inglés</a>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Contenido Gratuito PRINCIPIANTE</a>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Contenido Gratuito INTERMEDIO</a>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Contenido Gratuito AVANZADO</a>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Contenido Técnico Profesional Gratuito</a>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Examenes internacionales</a>
        </div>
        <div className='flex flex-col space-y-1 '>
          <p className='text-[var(--color2)] my-2 text-base'>Ofertas y Soporte</p>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Soporte al cliente</a>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Preguntas frecuentes</a>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Opiniones</a>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Promociones</a>
        </div>
        <div className='flex flex-col space-y-1 '>
          <p className='text-[var(--color2)] my-2 text-base'>Sobre nosotros</p>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Clases Pre-grabadas</a>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Traductor integrado</a>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Pide una beca</a>
          <a href='' target='_blank' className='hover:text-[var(--color3)] '>Trabaja con nosotros</a>
        </div>
      </div>
      <p className='-mb-10 text-center text-xs mx-4 font-thin '>© 2023 Inboost Marketing | Aviso Legal | Política de protección de datos | Política de Cookies</p>
    </div>
  )
}
