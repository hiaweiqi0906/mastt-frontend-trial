import React from 'react'
import Card from 'components/Card'
import { Row, Col, Stack, Container } from 'react-bootstrap'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Avatar from 'assets/Avatar.png'

function createData(section, results) {
  return { section, results };
}

const rows = [
  createData('1', "7 : 11"),
  createData('2', "7 : 11"),
  createData('3', "7 : 11"),
  createData('4', "7 : 11"),
  createData('5', "7 : 11"),
];

export default function MatchHistory() {
  return (
    <Container style={{marginTop: '3rem'}}>
      <Row>
        <Col xs={4}>
          <Card>
            <Stack direction='horizontal' gap={3} style={{ width: '100%', marginBottom: '2rem' }}>
              <div style={{ display: 'block', margin: 'auto' }}>
                <img src={Avatar} alt="" width={72} height={72} />
                <span className='font-24' style={{ marginLeft: '2rem', marginRight: '2rem' }}>vs</span>
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
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Section</TableCell>
                    <TableCell align="center">Result</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.section}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center" component="th" scope="row" sx={{ border: 'none' }}>
                        {row.section}
                      </TableCell>
                      <TableCell align="center" sx={{ border: 'none', width: '80%' }}>
                        <Stack direction='horizontal' gap={3} style={{justifyContent: 'center'}}>
                          <img src={Avatar} alt="" width={56} height={56} />
                          <span className='font-20 font-bold'>12</span>
                          <span className='font-16'>vs</span>
                          <span className='font-20 font-bold'>10</span>
                          <img src={Avatar} alt="" width={56} height={56} />
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

          </Card>
        </Col>
      </Row>


    </Container>
  )
}
