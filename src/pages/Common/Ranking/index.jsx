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
import ListItemText from '@mui/material/ListItemText';
import { Row, Col } from 'react-bootstrap';
import { FixedSizeList } from 'react-window';
function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <Row style={{ width: '100%' }}>
        <Col xs={2}>
          1
        </Col>
        <Col>
          Hia Wei Qi
        </Col>
      </Row>      {/* <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton> */}
    </ListItem>
  );
}

export default function Ranking() {
  return (
    <Container style={{ marginTop: '3rem' }}>
      Ranking
      <Box
        sx={{ width: '100%', height: 540, bgcolor: 'background.paper' }}
      >
        <FixedSizeList
          height={540}
          itemSize={100}
          itemCount={200}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
    </Container>
  )
}
