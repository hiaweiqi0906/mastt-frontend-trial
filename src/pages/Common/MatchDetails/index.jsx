import React from 'react'
import Card from 'components/Card'
import Button from 'components/Button'


export default function MatchDetails() {
  return (
    <>
      <Card>
        <p>Competition 1</p>
        <p>Competition Date</p>
        <p>Competition Description</p>
      </Card>
      <Card>
        <p>Clubs Participated</p>
        <div>
          <img src="" alt="" width={32} height={32} />
          <p>Club Name</p>
          <p>Club Location</p>
        </div>
        <div>
          <img src="" alt="" width={32} height={32} />
          <p>Club Name</p>
          <p>Club Location</p>
        </div>
        <div>
          <img src="" alt="" width={32} height={32} />
          <p>Club Name</p>
          <p>Club Location</p>
        </div>

      </Card>
      <Button label={"Sign Up"} />

      <Card>
        <p>Match Histories</p>
        <div>
          <p>Match Date</p>
          <p>Match Name</p>
          <p>Match Date time</p>
          <img src="" alt="" width={32} height={32} />
          <p>vs</p>
          <img src="" alt="" width={32} height={32} />
          <p>Match Scores</p>
        </div>
        <div>
          <p>Match Date</p>
          <p>Match Name</p>
          <p>Match Date time</p>
          <img src="" alt="" width={32} height={32} />
          <p>vs</p>
          <img src="" alt="" width={32} height={32} />
          <p>Match Scores</p>
        </div>
        <div>
          <p>Match Date</p>
          <p>Match Name</p>
          <p>Match Date time</p>
          <img src="" alt="" width={32} height={32} />
          <p>vs</p>
          <img src="" alt="" width={32} height={32} />
          <p>Match Scores</p>
        </div>
      </Card>
    </>
  )
}
