import React, {useState} from 'react'
import Card from 'components/Card'
import Button from 'components/Button'
import { Row, Col, Container, Stack } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Avatar from 'assets/Avatar.png'
import SignUpModal from './SignUpModal'

export default function MatchDetails() {
  const navigate = useNavigate()
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleCloseSignUpModal = () => setShowSignUpModal(false);
  const handleShowSignUpModal = () => setShowSignUpModal(true);

  const handleClickMatchHistory = () => {
    navigate('/match-history')
  }

  return (
    <Container style={{ marginTop: '2rem', marginBottom: '5rem' }}>
      <div style={{ marginTop: "2rem" }}>
        <p className='font-16' style={{ marginLeft: '1rem' }}>Competition Information</p>
        <Card style={{ padding: '1rem', height: '25vh', overflow: "auto" }}>
          <Stack direction='horizontal' gap={0}>
            <p className='font-bold'>Table Tennis Ranking Match - APRIL 2024</p>
            <div className='ms-auto' style={{ textAlign: 'right' }}>
              <p >1 May 2024 - 31 May 2024</p>
            </div>
          </Stack>
          <p className='font-14'>
            Join us for the highly anticipated Table Tennis Ranking Match, a pivotal event designed to determine the rankings of table tennis players within our league. This event serves as a cornerstone for both amateur and professional table tennis players seeking to establish or improve their positions in the regional and national standings.

            Competitive Structure: Players will compete in a series of matches organized into divisions based on their current skill level and ranking. Each match will contribute to the overall standings, providing a transparent and progressive pathway for ranking improvements.

            Open to All: Whether you are an up-and-coming player or a seasoned professional, this event is open to anyone who is a member of the club. New players will have the opportunity to earn their initial ranking, while veteran players can defend or improve their current positions.
          </p>
        </Card>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <p className='font-16' style={{ marginLeft: '1rem' }}>Clubs Participated</p>
        <Card style={{ padding: '1rem' }}>
          <Row>
            <Col xs={4}>
              <div>
                <Stack direction='horizontal' style={{ alignSelf: 'center' }} gap={3}>
                  <img src="" alt="" width={64} height={64} />
                  <div>
                    <p style={{ marginBottom: '0rem', marginTop: "1rem" }}>Jesselball Sport Center</p>
                    <p className='font-italic' style={{ color: "#a4a4a4" }}>Simpang Ampat, P. Pinang</p>
                  </div>
                </Stack>

              </div>
            </Col>
            <Col xs={4}>
              <div>
                <Stack direction='horizontal' style={{ alignSelf: 'center' }} gap={3}>
                  <img src="" alt="" width={64} height={64} />
                  <div>
                    <p style={{ marginBottom: '0rem', marginTop: "1rem" }}>Jesselball Sport Center</p>
                    <p className='font-italic' style={{ color: "#a4a4a4" }}>Simpang Ampat, P. Pinang</p>
                  </div>
                </Stack>

              </div>
            </Col>
            <Col xs={4}>
              <div>
                <Stack direction='horizontal' style={{ alignSelf: 'center' }} gap={3}>
                  <img src="" alt="" width={64} height={64} />
                  <div>
                    <p style={{ marginBottom: '0rem', marginTop: "1rem" }}>Jesselball Sport Center</p>
                    <p className='font-italic' style={{ color: "#a4a4a4" }}>Simpang Ampat, P. Pinang</p>
                  </div>
                </Stack>

              </div>
            </Col>
            <Col xs={4}>
              <div>
                <Stack direction='horizontal' style={{ alignSelf: 'center' }} gap={3}>
                  <img src="" alt="" width={64} height={64} />
                  <div>
                    <p style={{ marginBottom: '0rem', marginTop: "1rem" }}>Jesselball Sport Center</p>
                    <p className='font-italic' style={{ color: "#a4a4a4" }}>Simpang Ampat, P. Pinang</p>
                  </div>
                </Stack>

              </div>
            </Col>
          </Row>
        </Card>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <p className='font-16' style={{ marginLeft: '1rem' }}>Match Histories</p>
        <Card style={{ padding: '1rem' }}>

          <Row>
            <Col xs={2} style={{ borderRight: '1px solid grey' }}>
              <div>
                <p className='font-bold font-16' style={{ marginLeft: '2rem' }}>29 April 2024</p>
              </div>
            </Col>
            <Col style={{ marginLeft: '1rem', marginBottom: "1.5rem" }}>
              <div style={{ cursor: "pointer" }}  onClick={handleClickMatchHistory}>
                <Stack direction='horizontal' gap={0}>
                  <p className='font-bold'>Final Round Match 1</p>
                  <div className='ms-auto' style={{ textAlign: 'right' }}>
                    <p >29 April 2024, 9:30 AM</p>
                  </div>
                </Stack>
                <Stack direction='horizontal' gap={0}>
                  <p className='font-italic'>Venue: <span className='font-bold'>Jesselball Sport Center, Simpang Ampat</span></p>
                  <div className='ms-auto' style={{ textAlign: 'right' }}>
                  </div>
                </Stack>
                <Stack direction='horizontal' gap={0}>
                  <p className='font-italic'>Players: </p>

                  <Stack direction='horizontal' gap={3} style={{ marginLeft: "1rem" }}>
                    <img src={Avatar} alt="" width={56} height={56} />
                    <span className='font-20 font-bold'>11</span>
                    <span className='font-16'>vs</span>
                    <span className='font-20 font-bold'>7</span>

                    <img src={Avatar} alt="" width={56} height={56} />

                  </Stack>
                </Stack>

              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={2} style={{ borderRight: '1px solid grey' }}>
              <div>
                <p className='font-bold font-16' style={{ marginLeft: '2rem' }}>30 April 2024</p>
              </div>
            </Col>
            <Col style={{ marginLeft: '1rem', marginBottom: "1.5rem" }}>
              <div style={{ cursor: "pointer" }} onClick={handleClickMatchHistory}>
                <Stack direction='horizontal' gap={0}>
                  <p className='font-bold'>Final Round Match 2</p>
                  <div className='ms-auto' style={{ textAlign: 'right' }}>
                    <p >30 April 2024, 9:30 AM</p>
                  </div>
                </Stack>
                <Stack direction='horizontal' gap={0}>
                  <p className='font-italic'>Venue: <span className='font-bold'>Jesselball Sport Center, Simpang Ampat</span></p>
                  <div className='ms-auto' style={{ textAlign: 'right' }}>
                  </div>
                </Stack>
                <Stack direction='horizontal' gap={0}>
                  <p className='font-italic'>Players: </p>

                  <Stack direction='horizontal' gap={3} style={{ marginLeft: "1rem" }}>
                    <img src={Avatar} alt="" width={56} height={56} />
                    <span className='font-20 font-bold'>12</span>
                    <span className='font-16'>vs</span>
                    <span className='font-20 font-bold'>10</span>

                    <img src={Avatar} alt="" width={56} height={56} />

                  </Stack>
                </Stack>

              </div>
            </Col>
          </Row>
        </Card>
      </div>

      <div style={{ position: 'fixed', bottom: '0', left: 0, right: 0, paddingBottom: "1rem", backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,1))" }} >

        <Button className="mg-above-btn" style={{ width: '30%' }} label={"Sign Up"} onClick={handleShowSignUpModal}/>
        <SignUpModal show={showSignUpModal} handleClose={handleCloseSignUpModal} />
      </div>
    </Container>
  )
}
