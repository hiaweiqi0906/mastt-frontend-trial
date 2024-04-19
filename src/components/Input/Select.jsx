import React from 'react'
import { Select, MenuItem } from '@mui/material';

export default function MasttSelect({
  className, 
  menu, 
  label, 
  value, 
  style,
  onChange, 
  ...props
}) {
  return (
    <Select
      className={"input-select " + className}
      value={value}
      onChange={onChange}
      displayEmpty
      renderValue={(selected) => selected || label}
      style={style}
    >
      <MenuItem value="" disabled>
        {label}
      </MenuItem>
      {
        menu.map(m => <MenuItem value={`${m.value}`}>
          {`${m.label}`}
        </MenuItem>)
      }
    </Select>
  )
}
