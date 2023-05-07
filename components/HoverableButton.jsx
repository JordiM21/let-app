import React from 'react'

export default function HoverableButton({ text }) {
  return (
    <button className="benefits-button">
      {text}
      <span></span>
    </button>
  )
}
