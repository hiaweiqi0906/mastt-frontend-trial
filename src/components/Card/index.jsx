import React from 'react'
import Container from 'react-bootstrap/Container';

import './Card.css'

export default function Card({ cardSize, children }) {
  return (
    <div className={`card ${cardSize}`}>
      <Container>
        {children}
      </Container>
    </div>
  )
}
