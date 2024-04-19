import React from 'react'

import './Button.css'

export default function MasttButton({ type, label, className, onClick, style, variant }) {
  return (
    <button
      className={variant==="secondary" ? 'btn-secondary ' + className : 'btn-primary ' + className}
      onClick={onClick}
      style={style}>
      {label}
    </button>
  )
}
