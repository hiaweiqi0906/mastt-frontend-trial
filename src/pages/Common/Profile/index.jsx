import React from "react";

import { Col, Row, Container } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";

import TextField from "components/Input/TextField";
import Button from "components/Button";
import Card from "components/Card";
import ViewIcon from "assets/icons/eye.svg";
import FireIcon from "assets/icons/fire.svg";
import LikeIcon from "assets/icons/hand-thumbs-up.svg";
import MaleIcon from "assets/icons/gender-male.svg";
import testImg from "assets/Avatar.png";
import "./Profile.css";
import { Link, useNavigate } from "react-router-dom";

export default function Profile({ userType }) {
  const navigate = useNavigate()
  const handleClickMatch = () => {
    navigate('/match-details')
  }
  return (
    <Container style={{ marginTop: "3rem" }}>
      {userType === "player" && (
        <>
          <Card className="card-xxl card-height" style={{ marginBottom: "24px" }}>
            <Stack direction="horizontal" gap={3}>
              <img src={testImg} alt="" width={100} height={100} />
              <div style={{ marginLeft: "2rem" }}>
                <Stack direction="horizontal" gap={2}>
                  <p
                    className="font-24 font-bold"
                    style={{ marginBottom: "5px" }}
                  >
                    {"Tan YiJoe"}
                  </p>
                  <p className="font-16" style={{ marginBottom: "0" }}>
                    {"21"}
                  </p>
                  <img src={MaleIcon} alt="" width={16} height={16} />
                </Stack>
                <p className="font-16" style={{ color: "#AFAFAF" }}>
                  {"joined from 3 March 2023"}
                </p>
              </div>
              <div className="p-2 ms-auto" style={{ textAlign: "center" }}>
                <img src={FireIcon} alt="" width={36} height={36} />
                <p className="font-16">{"40k"}</p>
              </div>
              <div className="p-2" style={{ textAlign: "center" }}>
                <img src={LikeIcon} alt="" width={36} height={36} />
                <p className="font-16">{"400.1k"}</p>
              </div>
            </Stack>
          </Card>
          <Row>
            <Col xs={4}>
              <Card style={{ height: "100%" }}>
                <p>Points</p>
                <Stack
                  direction="horizontal"
                  gap={2}
                  style={{ justifyContent: "center" }}
                >
                  <p className="font-32 font-bold">2048</p>
                  <p className="font-12" style={{ marginBottom: "5px" }}>
                    Ranked #1 in Penang
                  </p>
                </Stack>
                <p>Badges</p>
                <Row style={{ textAlign: "center" }}>
                  <Col>
                    <img src="" alt="" width={40} height={40} />
                    <p>Badge 1</p>
                  </Col>
                  <Col>
                    <img src="" alt="" width={40} height={40} />
                    <p>Badge 2</p>
                  </Col>
                  <Col>
                    <img src="" alt="" width={40} height={40} />
                    <p>Badge 3</p>
                  </Col>
                </Row>
                <Row style={{ textAlign: "center" }}>
                  <Col>
                    <img src="" alt="" width={40} height={40} />
                    <p>Badge 1</p>
                  </Col>
                  <Col>
                    <img src="" alt="" width={40} height={40} />
                    <p>Badge 2</p>
                  </Col>
                  <Col>
                    <img src="" alt="" width={40} height={40} />
                    <p>Badge 3</p>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={8}>
              <Card style={{ height: "100%" }}>
                <Stack direction="horizontal" gap={2}>
                  <p>Match History</p>
                  <p className="ms-auto">All</p>
                </Stack>
                <div style={{ marginBottom: "24px" }}>
                  <Stack direction="horizontal" gap={4}>
                    <img src={testImg} alt="" width={56} height={56} />
                    <span className="font-20 font-bold">11</span>
                    <span className="font-16">vs</span>
                    <span className="font-20 font-bold">7</span>
                    <img src={testImg} alt="" width={56} height={56} />
                    <div className="ms-auto">
                      <img src={ViewIcon} alt="" width={16} height={16} style={{ display: "block", marginLeft: "auto" }} />
                      <p>Match Date Time</p>
                    </div>
                  </Stack>
                </div>
                <div style={{ marginBottom: "24px" }}>
                  <Stack direction="horizontal" gap={4}>
                    <img src={testImg} alt="" width={56} height={56} />
                    <span className="font-20 font-bold">11</span>
                    <span className="font-16">vs</span>
                    <span className="font-20 font-bold">7</span>
                    <img src={testImg} alt="" width={56} height={56} />
                    <div className="ms-auto">
                      <img src={ViewIcon} alt="" width={16} height={16} style={{ display: "block", marginLeft: "auto" }} />
                      <p>Match Date Time</p>
                    </div>
                  </Stack>
                </div>
                <div style={{ marginBottom: "24px" }}>
                  <Stack direction="horizontal" gap={4}>
                    <img src={testImg} alt="" width={56} height={56} />
                    <span className="font-20 font-bold">11</span>
                    <span className="font-16">vs</span>
                    <span className="font-20 font-bold">7</span>
                    <img src={testImg} alt="" width={56} height={56} />
                    <div className="ms-auto">
                      <img src={ViewIcon} alt="" width={16} height={16} style={{ display: "block", marginLeft: "auto" }} />
                      <p>Match Date Time</p>
                    </div>
                  </Stack>
                </div>
              </Card>
            </Col>
          </Row>
        </>
      )}
      {userType === "club" && (
        <>
          <Card className="card-xxl card-height" style={{ marginBottom: "24px" }}>
            <Stack direction="horizontal" gap={3}>
              <img src={testImg} alt="" width={100} height={100} />
              <div style={{ marginLeft: "2rem" }}>
                <Stack direction="horizontal" gap={2}>
                  <p
                    className="font-24 font-bold"
                    style={{ marginBottom: "5px" }}
                  >
                    {"Jesselball Club"}
                  </p>
                  <p className="font-16" style={{ marginBottom: "0" }}>
                    {", Simpang Ampat"}
                  </p>
                </Stack>
                <p className="font-16" style={{ color: "#AFAFAF" }}>
                  {"joined from 3 March 2023"}
                </p>
              </div>
              <div className="p-2 ms-auto" style={{ textAlign: "center" }}>
                <img src={FireIcon} alt="" width={36} height={36} />
                <p className="font-16">{"40k"}</p>
              </div>
              <div className="p-2" style={{ textAlign: "center" }}>
                <img src={LikeIcon} alt="" width={36} height={36} />
                <p className="font-16">{"400.1k"}</p>
              </div>
            </Stack>
          </Card>
          {/* <Card>
            <img src="" alt="" width={64} height={64} />
            <p>{"Club's Name"}</p>
            <p>{"Club's Location"}</p>
            <p>{"Club's Joined Date"}</p>
            <p>{"Club's Followers"}</p>
          </Card> */}
          <Row>
            <Col xs={4}>
              <Card style={{ height: "100%" }}>
                <Stack direction='horizontal' gap={0}>
                  <p>Booking</p>
                  <div className='ms-auto' style={{ textAlign: 'right' }}>
                    <Link style={{ color: "black" }}><p>Sign Up Now {">"}</p></Link>
                  </div>
                </Stack>
                <Stack
                  direction="horizontal"
                  gap={2}
                  style={{ justifyContent: "center", height: '200px' }}
                >
                  <p className="font-32 font-bold">Price List</p>
                  <p className="font-12" style={{ marginBottom: "5px" }}>
                  </p>
                </Stack>
                <p>Competition</p>
                <div style={{ cursor: "pointer", borderBottom: '#d6d6d6 solid 0.5px', marginBottom: '1rem' }} onClick={handleClickMatch}>
                  <Stack direction="horizontal">
                    <div>
                      <p className='font-bold truncate-1-lines'>Table Tennis Ranking Match - APRIL 2024</p>

                      <Stack direction="horizontal">
                        <p className='truncate-1-lines font-14'>1 May 2024 - 31 May 2024</p>
                        <div className='ms-auto' style={{ textAlign: 'right' }}>
                          <Link style={{ color: "black" }}><p>Sign Up Now {">"}</p></Link>
                        </div>
                      </Stack>
                    </div>
                  </Stack>
                </div>
                <div style={{ cursor: "pointer", borderBottom: '#d6d6d6 solid 0.5px', marginBottom: '1rem' }} onClick={handleClickMatch}>
                  <Stack direction="horizontal">
                    <div>
                      <p className='font-bold truncate-1-lines'>Table Tennis Ranking Match - APRIL 2024</p>

                      <Stack direction="horizontal">
                        <p className='truncate-1-lines font-14'>1 May 2024 - 31 May 2024</p>
                        <div className='ms-auto' style={{ textAlign: 'right' }}>
                          <Link style={{ color: "black" }}><p>Sign Up Now {">"}</p></Link>
                        </div>
                      </Stack>
                    </div>
                  </Stack>
                </div>
                <div style={{ cursor: "pointer" }} onClick={handleClickMatch}>
                  <Stack direction="horizontal">
                    <div>
                      <p className='font-bold truncate-1-lines'>Table Tennis Ranking Match - APRIL 2024</p>

                      <Stack direction="horizontal">
                        <p className='truncate-1-lines font-14'>1 May 2024 - 31 May 2024</p>
                        <div className='ms-auto' style={{ textAlign: 'right' }}>
                          <Link style={{ color: "black" }}><p>Sign Up Now {">"}</p></Link>
                        </div>
                      </Stack>
                    </div>
                  </Stack>
                </div>
              </Card>
            </Col>
            <Col xs={8}>
              <Card style={{ padding: '1.5rem', marginBottom: "0.5rem" }}>
                <Stack direction='horizontal' gap={3}>
                  <img src={testImg} alt="" width={40} height={40} />
                  <div>
                    <p className='font-16 font-bold' style={{ marginBottom: '0', marginLeft: '0.5rem' }}>Jesselball Sport Center, Simpang Ampat</p>
                    <p className='font-14 font-italic' style={{ marginBottom: '0.3rem', marginLeft: '0.5rem', color: '#b7b7b7' }}>Now</p>
                  </div>
                </Stack>
                <textarea className="input-textarea-feed font-14" placeholder="Enter something here..."> </textarea>
                {/* <p className='font-14'>We are thrilled to announce the upcoming 2024 Spring Table Tennis Tournament! This exciting event will bring together players from various clubs to compete, showcase their skills, and share their passion for the game.</p> */}
                <Button variant="primary" label={"Sign Up"} style={{width: '20%', margin: '0'}} className="ms-auto">
              Post
            </Button>
              </Card>
              <Card style={{ padding: '1.5rem', marginBottom: "0.5rem" }}>
                <Stack direction='horizontal' gap={3}>
                  <img src={testImg} alt="" width={40} height={40} />
                  <div>
                    <p className='font-16 font-bold' style={{ marginBottom: '0', marginLeft: '0.5rem' }}>Jesselball Sport Center, Simpang Ampat</p>
                    <p className='font-14 font-italic' style={{ marginBottom: '0.3rem', marginLeft: '0.5rem', color: '#b7b7b7' }}>1 min ago..</p>
                  </div>
                </Stack>
                <p className='font-14' style={{ lineHeight: '1.25rem', marginTop: '1rem', marginBottom: '0' }}>We are thrilled to announce the upcoming 2024 Spring Table Tennis Tournament! This exciting event will bring together players from various clubs to compete, showcase their skills, and share their passion for the game.</p>
              </Card>
              <Card style={{ padding: '1.5rem', marginBottom: "0.5rem" }}>
                <Stack direction='horizontal' gap={3}>
                  <img src={testImg} alt="" width={40} height={40} />
                  <div>
                    <p className='font-16 font-bold' style={{ marginBottom: '0', marginLeft: '0.5rem' }}>Jesselball Sport Center, Simpang Ampat</p>
                    <p className='font-14 font-italic' style={{ marginBottom: '0.3rem', marginLeft: '0.5rem', color: '#b7b7b7' }}>1 min ago..</p>
                  </div>
                </Stack>
                <p className='font-14' style={{ lineHeight: '1.25rem', marginTop: '1rem', marginBottom: '0' }}>We are thrilled to announce the upcoming 2024 Spring Table Tennis Tournament! This exciting event will bring together players from various clubs to compete, showcase their skills, and share their passion for the game.</p>
              </Card>
              <Card style={{ padding: '1.5rem', marginBottom: "0.5rem" }}>
                <Stack direction='horizontal' gap={3}>
                  <img src={testImg} alt="" width={40} height={40} />
                  <div>
                    <p className='font-16 font-bold' style={{ marginBottom: '0', marginLeft: '0.5rem' }}>Jesselball Sport Center, Simpang Ampat</p>
                    <p className='font-14 font-italic' style={{ marginBottom: '0.3rem', marginLeft: '0.5rem', color: '#b7b7b7' }}>1 min ago..</p>
                  </div>
                </Stack>
                <p className='font-14' style={{ lineHeight: '1.25rem', marginTop: '1rem', marginBottom: '0' }}>We are thrilled to announce the upcoming 2024 Spring Table Tennis Tournament! This exciting event will bring together players from various clubs to compete, showcase their skills, and share their passion for the game.</p>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}
