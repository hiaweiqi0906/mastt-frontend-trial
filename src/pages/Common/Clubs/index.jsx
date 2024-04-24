import React from 'react'
import Card from 'components/Card'
import Button from 'components/Button'
import { Row, Col, Container, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Avatar from 'assets/Avatar.png'
import TextField from 'components/Input/TextField'
import ClubLogo from 'assets/club.jpeg'

export default function MatchDetails() {
    return (
        <Container style={{ marginTop: '2rem', marginBottom: '5rem' }}>
            <div style={{ marginTop: "2rem" }}>
                <Card style={{ padding: '1rem', height: '10vh', overflow: "auto" }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                            label="Search by club name"
                            style={{ flexGrow: 1 }}
                        />
                        <Button label="Search" style={{ width: '5rem', marginLeft: '1rem' }} />
                    </div>
                </Card>
            </div>


            <div style={{ marginTop: "4rem" }}>
                <p className='font-16' style={{ marginLeft: '1rem' }}>Clubs Participated</p>
                <Card style={{ padding: '1rem' }}>
                    <Row className='justify-content-center align-items-center' style={{ height: '100%' }}>
                        <Col xs={3}>
                            <div>
                                <Stack direction='vertical' gap={3} style={{ alignItems: 'center' }}>
                                    <img src={ClubLogo} alt="" width={250} height={180} style={{ borderRadius: '10px', border: '0.5px solid #DCDCDC' }} />
                                    <div>
                                        <p style={{ marginBottom: '0rem', marginTop: "0.1rem" }}>Jesselball Sport Center</p>
                                        <p className='font-italic' style={{ color: "#a4a4a4" }}>Simpang Ampat, P. Pinang</p>
                                    </div>
                                </Stack>

                            </div>
                        </Col>
                        <Col xs={3}>
                            <div>
                                <Stack direction='vertical' gap={3} style={{ alignItems: 'center' }}>
                                    <img src={ClubLogo} alt="" width={250} height={180} style={{ borderRadius: '10px', border: '0.5px solid #DCDCDC' }} />
                                    <div>
                                        <p style={{ marginBottom: '0rem', marginTop: "0.1rem" }}>Jesselball Sport Center</p>
                                        <p className='font-italic' style={{ color: "#a4a4a4" }}>Simpang Ampat, P. Pinang</p>
                                    </div>
                                </Stack>

                            </div>
                        </Col>
                        <Col xs={3}>
                            <div>
                                <Stack direction='vertical' gap={3} style={{ alignItems: 'center' }}>
                                    <img src={ClubLogo} alt="" width={250} height={180} style={{ borderRadius: '10px', border: '0.5px solid #DCDCDC' }} />
                                    <div>
                                        <p style={{ marginBottom: '0rem', marginTop: "0.1rem" }}>Jesselball Sport Center</p>
                                        <p className='font-italic' style={{ color: "#a4a4a4" }}>Simpang Ampat, P. Pinang</p>
                                    </div>
                                </Stack>

                            </div>
                        </Col>
                        <Col xs={3}>
                            <div>
                                <Stack direction='vertical' gap={3} style={{ alignItems: 'center' }}>
                                    <img src={ClubLogo} alt="" width={250} height={180} style={{ borderRadius: '10px', border: '0.5px solid #DCDCDC' }} />
                                    <div>
                                        <p style={{ marginBottom: '0rem', marginTop: "0.1rem" }}>Jesselball Sport Center</p>
                                        <p className='font-italic' style={{ color: "#a4a4a4" }}>Simpang Ampat, P. Pinang</p>
                                    </div>
                                </Stack>

                            </div>
                        </Col>
                        <Col xs={3}>
                            <div>
                                <Stack direction='vertical' gap={3} style={{ alignItems: 'center' }}>
                                    <img src={ClubLogo} alt="" width={250} height={180} style={{ borderRadius: '10px', border: '0.5px solid #DCDCDC' }} />
                                    <div>
                                        <p style={{ marginBottom: '0rem', marginTop: "0.1rem" }}>Jesselball Sport Center</p>
                                        <p className='font-italic' style={{ color: "#a4a4a4" }}>Simpang Ampat, P. Pinang</p>
                                    </div>
                                </Stack>

                            </div>
                        </Col>
                        <Col xs={3}>
                            <div>
                                <Stack direction='vertical' gap={3} style={{ alignItems: 'center' }}>
                                    <img src={ClubLogo} alt="" width={250} height={180} style={{ borderRadius: '10px', border: '0.5px solid #DCDCDC' }} />
                                    <div>
                                        <p style={{ marginBottom: '0rem', marginTop: "0.1rem" }}>Jesselball Sport Center</p>
                                        <p className='font-italic' style={{ color: "#a4a4a4" }}>Simpang Ampat, P. Pinang</p>
                                    </div>
                                </Stack>

                            </div>
                        </Col>
                        <Col xs={3}>
                            <div>
                                <Stack direction='vertical' gap={3} style={{ alignItems: 'center' }}>
                                    <img src={ClubLogo} alt="" width={250} height={180} style={{ borderRadius: '10px', border: '0.5px solid #DCDCDC' }} />
                                    <div>
                                        <p style={{ marginBottom: '0rem', marginTop: "0.1rem" }}>Jesselball Sport Center</p>
                                        <p className='font-italic' style={{ color: "#a4a4a4" }}>Simpang Ampat, P. Pinang</p>
                                    </div>
                                </Stack>

                            </div>
                        </Col>
                        <Col xs={3}>
                            <div>
                                <Stack direction='vertical' gap={3} style={{ alignItems: 'center' }}>
                                    <img src={ClubLogo} alt="" width={250} height={180} style={{ borderRadius: '10px', border: '0.5px solid #DCDCDC' }} />
                                    <div>
                                        <p style={{ marginBottom: '0rem', marginTop: "0.1rem" }}>Jesselball Sport Center</p>
                                        <p className='font-italic' style={{ color: "#a4a4a4" }}>Simpang Ampat, P. Pinang</p>
                                    </div>
                                </Stack>

                            </div>
                        </Col>

                    </Row>
                </Card>
            </div>
        </Container>
    )
}
