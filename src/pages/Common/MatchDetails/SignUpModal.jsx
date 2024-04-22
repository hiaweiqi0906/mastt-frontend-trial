import React from 'react'
// import Modal from 'react-bootstrap/Modal';
import TextField from 'components/Input/TextField'
import Button from 'components/Button'
import Select from 'components/Input/Select'
import Modal from 'components/Modal'
import { Row, Col } from 'react-bootstrap';

export default function SignUpModal({ show, handleClose, ...props }) {
  return (
    <>
      <Modal show={show} handleClose={handleClose} title={"Sign Up Competition"} confirmLabel="Sign Up">
        <div>
          <p style={{ color: "#646464" }}>Personal Details: </p>
          <div style={{ padding: "0 1rem" }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <TextField label="First Name" />
              <TextField label="Last Name" />
            </div>

            <div style={{ display: 'flex', gap: '10px' }} >
              <Select
                className='mg-between-input'
                value={props.gender}
                onChange={props.handleGenderChange}
                style={{ width: '100%' }}
                label="Select Gender"
                menu={[{
                  value: "male", label: 'Male'
                },
                {
                  value: "female", label: 'Female'
                },
                {
                  value: "other", label: 'Other'
                }]}
              />
              <TextField className={'mg-between-input'} label="Age" />
            </div>
          </div>
        </div>
        <div style={{ marginTop: '2rem' }} >
          <p style={{ color: "#646464" }}>Clubs: </p>
          <div style={{ padding: "0 1rem" }}>
            <Select
              value={props.gender}
              onChange={props.handleGenderChange}
              style={{ width: '100%' }}
              label="Select Gender"
              menu={[{
                value: "male", label: 'Male'
              },
              {
                value: "female", label: 'Female'
              },
              {
                value: "other", label: 'Other'
              }]}
            />
          </div>
        </div>

        <div style={{ marginTop: '2rem' }} >
          <p style={{ color: "#646464" }}>DateTime: </p>
          <div style={{ padding: "0 1.5rem" }}>
            <p style={{ color: "#666" }}>1 Apr 2024 - 31 May 2024</p>
          </div>
        </div>
      </Modal>
    </>
  )
}
