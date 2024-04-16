import React from 'react'
import TextField from 'components/Input/TextField'
import Button from 'components/Button'
import Card from 'components/Card'

export default function SignUp() {
  return (
    <>
      <Card>
        <div>Sign Up</div>
        <TextField label="first name"/>
        <TextField label="last name"/>
        <TextField label="email"/>
        <TextField label="phone number"/>
        <TextField label="password"/>
        <TextField label="gender"/>
        <TextField label="date of birth"/>
        <TextField label="address"/>
        <TextField label="city"/>
        <TextField label="country"/>
        {"I have read and agree to the terms and conditions"}
        <Button label="Login"/>
      </Card>
    </>
  )
}
