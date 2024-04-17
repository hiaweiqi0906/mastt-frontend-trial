import React, { useState } from 'react'
import Card from 'components/Card'
import Button from 'components/Button'
import TextField from 'components/Input/TextField'


export default function ForgotPassword() {
  const [page, setPage] = useState(1);

  return (
    <>
      {page === 1 && (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
          <Card cardSize="card-md">
            <div style={{ textAlign: 'left', marginBottom: '10px' }}>
              <button
                onClick={() => { }}
                style={{ border: 'none', background: 'none', cursor: 'pointer' }}
              >
                &#x2190;
              </button>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '40px' }} className="font-bold font-24">
              Forgot Password
            </div>
            <p>Please enter the email address of your account to reset your password.</p>
            <TextField className="mg-between-input" label="Email" />
            <Button className="mg-above-btn" label="Submit" onClick={() => { setPage(2) }} />
          </Card>
        </div>
      )}
      {page === 2 && (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
          <Card cardSize="card-md">
            <div style={{ textAlign: 'left', marginBottom: '10px' }}>
              <button
                onClick={() => { setPage(1) }}
                style={{ border: 'none', background: 'none', cursor: 'pointer' }}
              >
                &#x2190;
              </button>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '40px' }} className="font-bold font-24">
              Forgot Password
            </div>
            <p style={{ color: 'blue' }}>The link already send to abc@abc.com please use the link to reset your password thanks!</p>
            <Button className="mg-above-btn" label="Okay" onClick={() => { setPage(3) }} />
          </Card>
        </div>
      )}
      {page === 3 && (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
          <Card cardSize="card-md">
            <div style={{ textAlign: 'left', marginBottom: '10px' }}>
              <button
                onClick={() => { setPage(1) }}
                style={{ border: 'none', background: 'none', cursor: 'pointer' }}
              >
                &#x2190;
              </button>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '40px' }} className="font-bold font-24">
              Forgot Password
            </div>
            <p>Please enter the new password.</p>
            <TextField className="mg-between-input" label="New Password" />
            <TextField className="mg-between-input" label="Confirm New Password" />
            <Button className="mg-above-btn" label="Submit" />
          </Card>
        </div>
      )}
    </>
  )
}
