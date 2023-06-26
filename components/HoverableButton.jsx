import { useRouter } from 'next/router'
import React from 'react'

export default function HoverableButton({ text }) {
  const router = useRouter()
  return (
    <button onClick={() => router.push("/Promociones")} className="benefits-button">
      {text}
      <span></span>
    </button>
  )
}
