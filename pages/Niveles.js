import Banner4 from '@/components/Banner4'
import CTA from '@/components/CTA'
import Levels from '@/components/LevelSlider'
import React from 'react'

export default function Niveles() {
  return (
    <>
      <CTA
        message={"No importa en el nivel que te encuentres, ¡siempre puedes mejorar!"}
        button={"¡Comienza Hoy!"}
        link={"/#/"}
        size={"big"}
      />
      <Banner4 />
      <Levels />
      <p>En que nivel esto? tendras a disposicion un examen para saber tu nivel</p>
    </>
  )
}
