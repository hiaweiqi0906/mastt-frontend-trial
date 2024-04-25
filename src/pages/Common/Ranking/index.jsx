import React from 'react'
import { Container } from 'react-bootstrap'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Paper';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Link, useNavigate } from 'react-router-dom'

import ListItemText from '@mui/material/ListItemText';
import { Row, Col, Stack } from 'react-bootstrap';
import { FixedSizeList } from 'react-window';
import Card from 'components/Card';
import Avatar from 'assets/Avatar.png'

function renderRow(props) {
  const { index, style } = props;
  const navigate = useNavigate()

  const handleClickPlayerProfile = () => {
    navigate('/player/profile')
  }

  return (
    <ListItem style={style} key={index}>
      <Card style={{ padding: '1rem', width: '100%', alignSelf: 'center' }}>
        <Row style={{ width: '100%', alignItems: 'center' }}>
          <Col xs={2}>
            {index + 1}
          </Col>
          <Col>
            <Stack direction='horizontal' gap={0} style={{ alignSelf: 'center', padding: '1rem', cursor: 'pointer' }} onClick={handleClickPlayerProfile}>
              <img src={Avatar} alt="" width={40} height={40} />
              <p className='font-20 font-bold' style={{ marginBottom: '0.3rem', marginLeft: '0.5rem' }}> Opponent 1</p>

            </Stack>          
            </Col>
        </Row>
      </Card>      {/* <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton> */}
    </ListItem>
  );
}

export default function Ranking() {
  return (
    <Container style={{ marginTop: '3rem' }}>
      <FixedSizeList
        height={540}
        itemSize={128}
        itemCount={200}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Container>
  )
}
