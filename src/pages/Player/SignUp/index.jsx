import React, { useState } from 'react';
import TextField from 'components/Input/TextField'
import Button from 'components/Button'
import Card from 'components/Card'
import { Checkbox, Select, MenuItem } from '@mui/material';

// player sign up

export default function SignUp() {

  // State to hold the selected gender
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');


  // Handler function to update the state when the gender is selected
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{ height: '90vh' }}>
        <Card cardSize="card-md">
          <div style={{ textAlign: 'center', marginBottom: '40px' }} className='font-bold font-24'>Register</div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <TextField label="First Name" />
            <TextField label="Last Name" />
          </div>
          <TextField className={'mg-between-input'} label="Email" />
          <TextField className={'mg-between-input'} label="Phone Number" />
          <TextField className={'mg-between-input'} label="Password" />
          <div style={{ display: 'flex', gap: '10px' }} >
            <Select
              className='mg-between-input'
              value={gender}
              onChange={handleGenderChange}
              displayEmpty
              renderValue={(selected) => selected || 'Select Gender'}
              style={{ width: '410px' }} 
            >
              <MenuItem value="" disabled>
                Select gender
              </MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
            <TextField className={'mg-between-input'} label="Date of Birth" />
          </div>
          <TextField className={'mg-between-input'} label="Address" />
          <div style={{ display: 'flex', gap: '10px' }}>
            <TextField className={'mg-between-input'} label="City" />
            <Select
              className='mg-between-input'
              value={country}
              onChange={handleCountryChange}
              displayEmpty
              renderValue={(selected) => selected || 'Select country'}
              style={{ width: '410px' }} 
            >
              <MenuItem value="" disabled>
                Select country
              </MenuItem>
              <MenuItem value="Malaysia">Malaysia</MenuItem>
              <MenuItem value="China">China</MenuItem>
              <MenuItem value="US">US</MenuItem>
              <MenuItem value="UK">UK</MenuItem>
            </Select>
          </div>
          <div className='mg-between-input' style={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox style={{ marginRight: '3px' }} />
            <span>
              I have read and agree to the{' '}
              <a
                href="https://www.google.com"
                style={{ color: 'blue', textDecoration: 'underline' }}
                target="_blank"
              >
                terms and conditions
              </a>
            </span>
          </div>
          <Button className={'mg-between-input'} label="Sign Up" />
        </Card>
      </div>
    </>
  )
}
