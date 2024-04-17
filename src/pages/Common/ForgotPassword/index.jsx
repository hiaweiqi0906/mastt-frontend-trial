import React from 'react'
import Card from 'components/Card'
import Button from 'components/Button'
import TextField from 'components/Input/TextField'

export default function ForgotPassword() {
  return (
    <>
      <Card>
        <img src="" alt="" width={16} height={16} />

        <div>Forgot Password</div>
        <p>Please enter the email address of your account to reset your password.</p>
        <TextField label="email" />
        <p>Account not found</p>

        <p>The link already send to yoour account. Please use the link to reset your password.</p>

        <TextField label="new password" />
        <TextField label="confirm new password" />
        <Button label="Submit" />
        <Button label="Done" />
      </Card>
    </>
  )
}
