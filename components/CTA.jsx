import React from 'react'
import { useRouter } from 'next/router'


export default function CTA({ message, button, link, size }) {

  const router = useRouter()

  return (
    <div className={`bg-[var(--color3)] flex justify-center items-center gap-4 py-3 px-8 ${size === "big" ? "w-full" : "w-5/6 md:w-3/5 rounded-md mx-auto flex-col text-xl text-center"}`}>
      <p className={`text-white drop-shadow-lg ${size === "big" ? "text-sm" : "text-2xl"}`}>{message}</p>
      <button onClick={() => router.push(link)} className={`bg-white text-[var(--color2)] rounded-md ${size === "big" ? "p-2" : "px-8 py-4"}`}>{button}</button>
    </div>
  )
}
