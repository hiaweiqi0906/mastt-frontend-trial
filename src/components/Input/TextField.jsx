import React from 'react'
import TextField from '@mui/material/TextField';

import "./Input.css"

export default function MasttTextField({label, className}) {
  return (
    <TextField label={label} className={'input-textfield ' + className}/>
  )
}
