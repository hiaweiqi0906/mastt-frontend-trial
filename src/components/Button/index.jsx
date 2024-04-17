import React from 'react'

import './Button.css'

export default function MasttButton({type, label, className, onClick}) {
  return (
    <button className={'btn-primary ' + className} onClick={onClick}>{label}</button>
  )
}
