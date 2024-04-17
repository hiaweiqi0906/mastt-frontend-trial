import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { useTheme } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import Navbar from 'components/Navbar'
import Home from 'pages/Common/Home';
import MatchDetails from 'pages/Common/MatchDetails';
import MatchHistory from 'pages/Common/MatchHistory';
import Profile from 'pages/Common/Profile';
import ForgotPassword from 'pages/Common/ForgotPassword';
import Login from 'pages/Common/Login';
import SignUp from 'pages/Player/SignUp';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const masttTheme = createTheme({
  palette: {
    primary: {
      main: '#999999',
    },
    secondary: {
      main: '#999999',
    },
  },
});

function App() {

  return (
    <>
    <ThemeProvider theme={masttTheme}>
      <Router>
        <div>
          <Navbar />
          {/* Route configuration */}
          <Container>
            <Routes>
              <Route path="/player/" element={<Home userType="player" />} />
              <Route path="/player/login" element={<Login userType="player" />} />
              <Route path="/player/sign-up" element={<SignUp />} />
              <Route path="/player/profile" element={<Profile userType="player" />} />

              <Route path="/club/" element={<Home userType="club" />} />
              <Route path="/club/login" element={<Login userType="club" />} />
              <Route path="/club/profile" element={<Profile userType="club" />} />

              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/match-history" element={<MatchHistory />} />
              <Route path="/match-details" element={<MatchDetails />} />

              <Route path="/" element={<Home userType="player" />} /> {/* Redirect to home by default */}
            </Routes>
          </Container>
        </div>
      </Router>
      </ThemeProvider>
    </>
  )
}

export default App
