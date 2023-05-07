import React from 'react'
import { FcBinoculars, FcCollaboration, FcDiploma1, FcGlobe, FcMultipleDevices, FcTemplate } from 'react-icons/fc'

export default function OtherBenefits() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      <div className='mx-4 my-4 text-center'>
        <FcDiploma1 className='text-9xl mx-auto' />
        <h3 className='text-2xl text-[var(--color1)] text-center '>Certificado de culminación por niveles</h3>
        <small className='text-gray-700'>Nos aseguramos que el estudiante este realmente preparado y en el nivel que esta cursando, es por esto que justo antes del certificado tienes la <span className='text-[var(--color3)]'>prueba final</span> donde evaluamos todos los conocimientos adquiridos <span className='text-[var(--color3)]'>(Quiz escrito y prueba oral personalizada).</span>  Una vez culminado con éxito tendrás acceso a tu certificado de nivel</small>
      </div>
      <div className='mx-4 my-4 text-center'>
        <FcBinoculars className='text-9xl mx-auto' />
        <h3 className='text-2xl text-[var(--color1)] text-center '>Atención personal a cada estudiante</h3>
        <small className='text-gray-700'>Luego de examinar tu nivel de inglés y darte tu <span className='text-[var(--color3)]'>plan de estudios, </span>el tutor asignado se encargará de hacerte sentir siempre en compañía y de seguir tu avance en el curso, puedes hacerle las <span className='text-[var(--color3)]'>preguntas que quieras</span>  y definir horarios de encuentro.</small>
      </div>
      <div className='mx-4 my-4 text-center'>
        <FcMultipleDevices className='text-9xl mx-auto' />
        <h3 className='text-2xl text-[var(--color1)] text-center '>Estudia desde cualquier dispositivo</h3>
        <small className='text-gray-700'>En LET Academy tendrás la posibildad de acceder a el material de estudio y clases desde cualquier dispositivo, ya sea desde el pc o desde tu smartphone, <span className='text-[var(--color3)]'>incluso puedes descargar las clases de video en la app para verlas luego sin conexión.</span> ¡Genial!</small>
      </div>
      <div className='mx-4 my-4 text-center'>
        <FcCollaboration className='text-9xl mx-auto' />
        <h3 className='text-2xl text-[var(--color1)] text-center'>Conversar agiliza tu aprendizaje</h3>
        <small className='text-gray-700'><span className='text-[var(--color3)]'>Speaking,</span> la mayoría tiene miedo a hablar en inglés o no tiene con quien hablarlo, con LET Academy <span className='text-[var(--color3)]'>perderás el miedo a hablar</span> y lo harás con fluidez ya que lo practicarás frecuentemente con profesores y otros alumnos.</small>
      </div>
      <div>
      </div>
    </div>
  )

}
