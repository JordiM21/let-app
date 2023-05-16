import React from 'react'
import { useRouter } from 'next/router'


export default function CTA({ message, button, link, size }) {

  const router = useRouter()

  return (
    <div className={`bg-[var(--color3)] flex justify-center items-center gap-4 py-3 px-8 ${size === "big" ? "w-full" : size === "medium" ? "w-11/12 my-8 rounded-md mx-auto" : "w-5/6 md:w-3/5 rounded-md my-12 mx-auto text-center"}`}>
      <p className={`text-white drop-shadow-lg text-xs md:text-md`}>{message}</p>
      <button onClick={() => router.push(link)} className={`bg-white text-[var(--color2)] rounded-md ${size === "big" ? "p-2 text-xs md:text-md" : "px-8 py-4 text-xs md:text-md"}`}>{button}</button>
    </div>
  )
}
