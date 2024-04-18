import React from 'react'
import Container from 'react-bootstrap/Container';

import './Card.css'

export default function Card({ className, children, style }) {
  return (
    <div className={`card ${className}`} style={style}>
      <Container>
        {children}
      </Container>
    </div>
  )
}
