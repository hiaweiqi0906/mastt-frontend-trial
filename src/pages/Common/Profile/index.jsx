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

export default function Profile({ userType }) {
  return (
    <Container style={{ marginTop: "3rem" }}>
      {userType === "player" && (
        <>
          <Card className="card-xxl card-height" style={{marginBottom: "24px"}}>
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
              <Card style={{height: "100%"}}>
                <Stack direction="horizontal" gap={2}>
                  <p>Match History</p>
                  <p className="ms-auto">All</p>
                </Stack>
                <div style={{marginBottom: "24px"}}>
                  <Stack direction="horizontal" gap={4}>
                    <img src={testImg} alt="" width={56} height={56} />
                    <span className="font-20 font-bold">11</span>
                    <span className="font-16">vs</span>
                    <span className="font-20 font-bold">7</span>
                    <img src={testImg} alt="" width={56} height={56} />
                    <div className="ms-auto">
                      <img src={ViewIcon} alt="" width={16} height={16} style={{display: "block", marginLeft: "auto"}}/>
                      <p>Match Date Time</p>
                    </div>
                  </Stack>
                </div>
                <div style={{marginBottom: "24px"}}>
                  <Stack direction="horizontal" gap={4}>
                    <img src={testImg} alt="" width={56} height={56} />
                    <span className="font-20 font-bold">11</span>
                    <span className="font-16">vs</span>
                    <span className="font-20 font-bold">7</span>
                    <img src={testImg} alt="" width={56} height={56} />
                    <div className="ms-auto">
                      <img src={ViewIcon} alt="" width={16} height={16} style={{display: "block", marginLeft: "auto"}}/>
                      <p>Match Date Time</p>
                    </div>
                  </Stack>
                </div>
                <div style={{marginBottom: "24px"}}>
                  <Stack direction="horizontal" gap={4}>
                    <img src={testImg} alt="" width={56} height={56} />
                    <span className="font-20 font-bold">11</span>
                    <span className="font-16">vs</span>
                    <span className="font-20 font-bold">7</span>
                    <img src={testImg} alt="" width={56} height={56} />
                    <div className="ms-auto">
                      <img src={ViewIcon} alt="" width={16} height={16} style={{display: "block", marginLeft: "auto"}}/>
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
          <Card>
            <img src="" alt="" width={64} height={64} />
            <p>{"Club's Name"}</p>
            <p>{"Club's Location"}</p>
            <p>{"Club's Joined Date"}</p>
            <p>{"Club's Followers"}</p>
          </Card>
          <Card>
            <p>Booking</p>
            <p>Book Now</p>
            <p>Competition</p>
            <div>
              <img src="" alt="" width={64} height={64} />
              <p>Competition Name</p>
              <p>Competition Datetime</p>
              <p>Sign-Up Now</p>
            </div>
          </Card>
          <Card>
            <p>Posted by Club Name</p>
            <p>Posted timeline</p>
            <p>Posted Content</p>
          </Card>
        </>
      )}
    </Container>
  );
}
