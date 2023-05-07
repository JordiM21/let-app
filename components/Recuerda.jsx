import React from 'react'
import { FcIdea } from 'react-icons/fc'

export default function Recuerda({ message }) {
  return (
    <div className='my-8 flex items-center md:justify-center gap-4 bg-blue-400/25 w-11/12 md:w-8/12 p-2 rounded-md mx-auto'>
      <FcIdea className='text-7xl md:text-4xl' />
      <small className='md:text-md'>{message}</small>
    </div>
  )
}
