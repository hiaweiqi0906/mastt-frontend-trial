import React from 'react'
import TextField from 'components/Input/TextField'
import Button from 'components/Button'
import Card from 'components/Card'
import { Link } from 'react-router-dom'

export default function Login({ userType }) {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{height: '70vh'}}>
        <Card className="card-sm">
          <div style={{ textAlign: 'center', marginBottom: '40px' }} className='font-bold font-24'>Login</div>
          <TextField label="Email" />
          <TextField className={'mg-between-input'} label="Password" />
          <div style={{width: '100%', textAlign: 'right', marginTop: '1rem'}}>
            <Link to='/forgot-password'>Forgot Password?</Link>
            </div>
          <Button className="mg-above-btn" label="Login" />
        </Card>
      </div>
    </>
  )
}
