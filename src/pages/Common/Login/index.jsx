import React from 'react'
import TextField from 'components/Input/TextField'
import Button from 'components/Button'
import Card from 'components/Card'

export default function Login({ userType }) {
  return (
    <>
      <Card>
        <div>{userType} Login</div>
        <TextField label="email"/>
        <TextField label="password"/>
        <Button label="Login"/>
      </Card>
    </>
  )
}
