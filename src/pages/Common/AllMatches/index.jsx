import React from 'react'
import { Row, Col, Stack, Container } from 'react-bootstrap'
import Avatar from 'assets/Avatar.png'
import Card from 'components/Card'
import { Link, useNavigate } from 'react-router-dom'

export default function AllMatches() {
  const navigate = useNavigate()
  const handleClickMatch = () => {
    navigate('/match-details')
  }
  return (
    <Container style={{ marginTop: '3rem' }}>
      <Card style={{ padding: '1rem' }}>

        <Row style={{ color: '#a4a4a4 !important' }}>
          <Col xs={2} style={{ borderRight: '1px solid grey' }}>
            <div style={{ cursor: "pointer" }}>
              <p className='font-16' style={{ marginLeft: '2rem' }}>May 2024</p>
            </div>
          </Col>
          <Col style={{ marginLeft: '1rem' }}>
            <div style={{ cursor: "pointer" }} onClick={handleClickMatch}>
              <Stack direction='horizontal' gap={0}>
                <p className='font-bold'>Table Tennis Ranking Match - APRIL 2024</p>
                <div className='ms-auto' style={{ textAlign: 'right' }}>
                  <p >1 May 2024 - 31 May 2024</p>
                </div>
              </Stack>
              <p className='truncate-2-lines font-14'>Join us for the highly anticipated Table Tennis Ranking Match, a pivotal event designed to determine the rankings of table tennis players within our league. This event serves as a cornerstone for both amateur and professional table tennis players seeking to establish or improve their positions in the regional and national standings.</p>

              <Stack direction='horizontal' gap={0}>
                <p className='font-italic'>Competition Venue: <span className='font-bold'>Table Tennis Clubs in Penang States</span></p>
                <div className='ms-auto' style={{ textAlign: 'right' }}>
                  <Link style={{ color: "black" }}><p>Sign Up Now {">"}</p></Link>
                </div>
              </Stack>
            </div>
          </Col>
        </Row>
        <Row style={{ color: '#a4a4a4 !important' }}>
          <Col xs={2} style={{ borderRight: '1px solid grey' }}>
            <div style={{ cursor: "pointer" }}>
              <p className='font-16' style={{ marginLeft: '2rem' }}>May 2024</p>
            </div>
          </Col>
          <Col style={{ marginLeft: '1rem' }}>
            <div style={{ cursor: "pointer" }} onClick={handleClickMatch}>
              <Stack direction='horizontal' gap={0}>
                <p className='font-bold'>Table Tennis Ranking Match - APRIL 2024</p>
                <div className='ms-auto' style={{ textAlign: 'right' }}>
                  <p >1 May 2024 - 31 May 2024</p>
                </div>
              </Stack>
              <p className='truncate-2-lines font-14'>Join us for the highly anticipated Table Tennis Ranking Match, a pivotal event designed to determine the rankings of table tennis players within our league. This event serves as a cornerstone for both amateur and professional table tennis players seeking to establish or improve their positions in the regional and national standings.</p>

              <Stack direction='horizontal' gap={0}>
                <p className='font-italic'>Competition Venue: <span className='font-bold'>Table Tennis Clubs in Penang States</span></p>
                <div className='ms-auto' style={{ textAlign: 'right' }}>
                  <Link style={{ color: "black" }}><p>Sign Up Now {">"}</p></Link>
                </div>
              </Stack>
            </div>
          </Col>
        </Row>
        <Row style={{ color: '#a4a4a4 !important' }}>
          <Col xs={2} style={{ borderRight: '1px solid grey' }}>
            <div style={{ cursor: "pointer" }}>
              <p className='font-16' style={{ marginLeft: '2rem' }}>May 2024</p>
            </div>
          </Col>
          <Col style={{ marginLeft: '1rem' }}>
            <div style={{ cursor: "pointer" }} onClick={handleClickMatch}>
              <Stack direction='horizontal' gap={0}>
                <p className='font-bold'>Table Tennis Ranking Match - APRIL 2024</p>
                <div className='ms-auto' style={{ textAlign: 'right' }}>
                  <p >1 May 2024 - 31 May 2024</p>
                </div>
              </Stack>
              <p className='truncate-2-lines font-14'>Join us for the highly anticipated Table Tennis Ranking Match, a pivotal event designed to determine the rankings of table tennis players within our league. This event serves as a cornerstone for both amateur and professional table tennis players seeking to establish or improve their positions in the regional and national standings.</p>

              <Stack direction='horizontal' gap={0}>
                <p className='font-italic'>Competition Venue: <span className='font-bold'>Table Tennis Clubs in Penang States</span></p>
                <div className='ms-auto' style={{ textAlign: 'right' }}>
                  <Link style={{ color: "black" }}><p>Sign Up Now {">"}</p></Link>
                </div>
              </Stack>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}
