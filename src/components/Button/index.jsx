import React from 'react'

import './Button.css'

export default function MasttButton({type, label, className}) {
  return (
    <button className={'btn-primary ' + className}>{label}</button>
  )
}
