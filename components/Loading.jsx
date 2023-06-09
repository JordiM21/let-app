import React, { useRef } from 'react'
import Lottie from 'lottie-react'
import loading from '../public/animations/loading.json'

export default function Loading() {

  return (
    <div className='fixed z-40 top-0 right-0 h-screen w-screen bg-blue-100'>
      <div className='mx-auto max-w-lg'>
        <Lottie
          animationData={loading} />
      </div>
    </div>
  )
}
