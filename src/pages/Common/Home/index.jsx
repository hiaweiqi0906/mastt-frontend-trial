import React, { useState } from 'react'
import Card from 'components/Card'
import { Row, Col, Container, Stack } from 'react-bootstrap'
import Avatar from 'assets/Avatar.png'
import { Link, useNavigate } from 'react-router-dom'

import './Home.css'

export default function Home({ userType }) {
  const navigate = useNavigate();

  const [currentActive, setCurrentActive] = useState('match');

  const handleClickMatch = () => {
    navigate('/match-details')
  }

  return (
    <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <Row>
        <Col>
          <img src="" alt="" width={906} style={{ height: '100%' }} />
        </Col>
        <Col>
          <Card style={{ height: '100%', padding: '1.5rem' }}>
            <p className='font-20 font-bold'>Announcement</p>
            <p className='font-16' style={{ lineHeight: '1.25rem' }}>We are thrilled to announce the upcoming 2024 Spring Table Tennis Tournament! This exciting event will bring together players from various clubs to compete, showcase their skills, and share their passion for the game.</p>
          </Card>
        </Col>
      </Row>
      <div style={{ marginTop: "2rem" }}>
        <p className='font-16' style={{ marginLeft: '1rem' }}>Upcoming Match</p>
        <Card style={{ padding: '1rem' }}>
          <Row>
            <Col xs={1}>
              <p>1. </p>
            </Col>
            <Col>
              <p className='font-20' style={{ marginBottom: '0.3rem' }}>Final Round Match 1</p>
              <div style={{ paddingLeft: '0.3rem' }}>
                <Row>
                  <Col xs={2}>
                    <p className='font-16' style={{ marginBottom: '0.3rem' }}>Datetime: </p>
                  </Col>
                  <Col>
                    <p className='font-bold font-16' style={{ marginBottom: '0.3rem' }}>29 April 2024, 9:30 AM</p>
                  </Col>
                </Row>

                <Row>
                  <Col xs={2}>
                    <p className='font-16' style={{ marginBottom: '0.3rem' }}>Venue: </p>
                  </Col>
                  <Col>
                    <p className='font-bold font-16' style={{ marginBottom: '0.5rem' }}>Jesselball Sport Center, Simpang Ampat</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={2}>
                    <p className='font-16' style={{ marginBottom: '0.3rem' }}>Opponent: </p>
                  </Col>
                  <Col>
                    <Stack direction='horizontal' gap={0} style={{ alignSelf: 'center' }}>
                      <img src={Avatar} alt="" width={40} height={40} />
                      <p className='font-20 font-bold' style={{ marginBottom: '0.3rem', marginLeft: '0.5rem' }}> Opponent 1</p>

                    </Stack>
                  </Col>
                </Row>
              </div>

            </Col>
          </Row>
        </Card>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <p className='font-16' style={{ marginLeft: '1rem', cursor: "pointer" }}><span onClick={() => setCurrentActive('match')} className={`${currentActive === 'match' && 'font-bold'}`} >Match</span> | <span onClick={() => setCurrentActive('feed')} className={`${currentActive === 'feed' && 'font-bold'}`} >Feed</span></p>

        {currentActive === "match" && <Card>
          <Row>
            <Col xs={2} style={{ borderRight: '1px solid grey' }}>
              <div>
                <p className='font-bold font-16' style={{ marginLeft: '2rem' }}>April 2024</p>
              </div>
            </Col>
            <Col style={{ marginLeft: '1rem', marginBottom: "1.5rem" }}>
              <div style={{cursor: "pointer"}} onClick={handleClickMatch}>
                <Stack direction='horizontal' gap={0}>
                  <p className='font-bold'>Table Tennis Ranking Match - APRIL 2024</p>
                  <div className='ms-auto' style={{ textAlign: 'right' }}>
                    <p >1 April 2024 - 30 April 2024</p>
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
              <div style={{cursor: "pointer"}}>
                <p className='font-16' style={{ marginLeft: '2rem' }}>May 2024</p>
              </div>
            </Col>
            <Col style={{ marginLeft: '1rem' }}>
              <div style={{cursor: "pointer"}} onClick={handleClickMatch}>
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
        </Card>}
        {currentActive === "feed" && <div>
          <Card style={{ padding: '1.5rem', marginBottom: "0.5rem" }}>
            <Stack direction='horizontal' gap={3}>
              <img src={Avatar} alt="" width={40} height={40} />
              <div>
                <p className='font-16 font-bold' style={{ marginBottom: '0', marginLeft: '0.5rem' }}>Jesselball Sport Center, Simpang Ampat</p>
                <p className='font-14 font-italic' style={{ marginBottom: '0.3rem', marginLeft: '0.5rem', color: '#b7b7b7' }}>1 min ago..</p>

              </div>
            </Stack>
            <p className='font-14' style={{ lineHeight: '1.25rem', marginTop: '1rem', marginBottom: '0' }}>We are thrilled to announce the upcoming 2024 Spring Table Tennis Tournament! This exciting event will bring together players from various clubs to compete, showcase their skills, and share their passion for the game.</p>
          </Card>
          <Card style={{ padding: '1.5rem', marginBottom: "0.5rem" }}>
            <Stack direction='horizontal' gap={3}>
              <img src={Avatar} alt="" width={40} height={40} />
              <div>
                <p className='font-16 font-bold' style={{ marginBottom: '0', marginLeft: '0.5rem' }}>Jesselball Sport Center, Simpang Ampat</p>
                <p className='font-14 font-italic' style={{ marginBottom: '0.3rem', marginLeft: '0.5rem', color: '#b7b7b7' }}>1 hour ago..</p>

              </div>
            </Stack>
            <p className='font-14' style={{ lineHeight: '1.25rem', marginTop: '1rem', marginBottom: '0' }}>We are thrilled to announce the upcoming 2024 Spring Table Tennis Tournament! This exciting event will bring together players from various clubs to compete, showcase their skills, and share their passion for the game.</p>
          </Card>
          <Card style={{ padding: '1.5rem', marginBottom: "0.5rem" }}>
            <Stack direction='horizontal' gap={3}>
              <img src={Avatar} alt="" width={40} height={40} />
              <div>
                <p className='font-16 font-bold' style={{ marginBottom: '0', marginLeft: '0.5rem' }}>Jesselball Sport Center, Simpang Ampat</p>
                <p className='font-14 font-italic' style={{ marginBottom: '0.3rem', marginLeft: '0.5rem', color: '#b7b7b7' }}>2 days ago..</p>

              </div>
            </Stack>
            <p className='font-14' style={{ lineHeight: '1.25rem', marginTop: '1rem', marginBottom: '0' }}>We are thrilled to announce the upcoming 2024 Spring Table Tennis Tournament! This exciting event will bring together players from various clubs to compete, showcase their skills, and share their passion for the game.</p>
          </Card>
        </div>}
      </div>
    </Container>
  )
}
