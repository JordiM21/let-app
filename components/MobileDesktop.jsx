import React from 'react'

export default function MobileDesktop() {
  return (
    <div className='h-96 max-w-xl mx-auto'>
      <div className='flex flex-col mx-8'>
        <div>
          <h2 className='text-3xl my-8'>¡Puedes entrar desde cualquier dispositivo y aprender en cualquier parte!</h2>
          <p>Gracias a que nuestras clases son descargables desde la app y las puedes ver offline desde tu celular o tablet, al igual que puedes acceder a todo el material de estudio.</p>
        </div>
        <div className='relative mt-16'>
          <div class="container">
            <div class="loader"></div>
            <div class="loader"></div>
            <div class="loader"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
