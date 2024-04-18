import React from 'react'

import './Button.css'

export default function MasttButton({ type, label, className, onClick, style }) {
  return (
    <button
      className={'btn-primary ' + className}
      onClick={onClick}
      style={style}>
      {label}
    </button>
  )
}
