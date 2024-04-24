import React from 'react'
import Card from 'components/Card'
import { Row, Col, Stack } from 'react-bootstrap'

import Avatar from 'assets/Avatar.png'

export default function MatchHistory() {
  return (
    <>
      <Row>
        <Col xs={4}>
          <Card>
            <Stack direction='horizontal' gap={3} style={{ width: '100%', marginBottom: '2rem' }}>
              <div style={{display: 'block', margin: 'auto'}}>
                <img src={Avatar} alt="" width={72} height={72} />
                <span className='font-24' style={{marginLeft: '2rem', marginRight: '2rem'}}>vs</span>
                <img src={Avatar} alt="" width={72} height={72} />
              </div>
            </Stack>
            <p className='font-20' style={{ marginBottom: '0.3rem' }}>Final Round Match 1</p>
              <div style={{ paddingLeft: '0.3rem' }}>
                <Row>
                  <Col xs={4}>
                    <p className='font-16' style={{ marginBottom: '0.3rem' }}>Datetime: </p>
                  </Col>
                  <Col>
                    <p className='font-bold font-16' style={{ marginBottom: '0.3rem' }}>29 April 2024, 9:30 AM</p>
                  </Col>
                </Row>

                <Row>
                  <Col xs={4}>
                    <p className='font-16' style={{ marginBottom: '0.3rem' }}>Venue: </p>
                  </Col>
                  <Col>
                    <p className='font-bold font-16' style={{ marginBottom: '0.5rem' }}>Jesselball Sport Center, Simpang Ampat</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>
                    <p className='font-16' style={{ marginBottom: '0.3rem' }}>Result: </p>
                  </Col>
                  <Col>
                    <Stack direction='horizontal' gap={0} style={{ alignSelf: 'center' }}>
                      <p className='font-24 font-bold' style={{ marginBottom: '0.3rem', marginLeft: '0.5rem' }}> 3 : 7 </p>
                    </Stack>
                  </Col>
                </Row>
              </div>


          </Card>
          <Card>
            <p>Upload File Score Here</p>
          </Card>
        </Col>
        <Col>
          <Card>
            <p>Details</p>
            <p>Section</p>
            <p>Result</p>

            <p>1</p>
            <img src="" alt="" width={32} height={32} />
            <p>Match Section Score</p>
            <img src="" alt="" width={32} height={32} />

            <p>2</p>
            <img src="" alt="" width={32} height={32} />
            <p>Match Section Score</p>
            <img src="" alt="" width={32} height={32} />

            <p>3</p>
            <img src="" alt="" width={32} height={32} />
            <p>Match Section Score</p>
            <img src="" alt="" width={32} height={32} />

            <p>Show More</p>

          </Card>
        </Col>
      </Row>


    </>
  )
}
