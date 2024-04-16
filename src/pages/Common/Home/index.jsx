import React from 'react'
import Card from 'components/Card'

export default function Home({ userType }) {
  return (
    <>
      <div>
        <img src="" alt="" width={906} height={260} />
        <Card>
          <p>Announcement</p>
          <p>Announcement Desciption</p>
        </Card>
      </div>
      <p>Upcoming Match</p>
      <Card>
        <p>1. </p>
        <p>Competition 1</p>
        <p>Datetime: Match Datetime</p>
        <p>Venue: Match Venue</p>
        <p>Opponent: </p>
        <img src="" alt="" width={64} height={64} />
        <p> Opponent 1</p>
      </Card>

      <p>Match | Feed</p>
      <Card>
        <div>
          <p>Month</p>
          <p>Competition Name</p>
          <p>Competition Date Range</p>
          <p>Competition Description</p>
          <p>Competition Venue</p>
          <p>Sign Up Now</p>
        </div>
      </Card>
      <div>
        <Card>
          <p>Posted by Club Name</p>
          <p>Posted timeline</p>
          <p>Posted Content</p>
        </Card>
        <Card>
          <p>Posted by Club Name</p>
          <p>Posted timeline</p>
          <p>Posted Content</p>
        </Card>
        <Card>
          <p>Posted by Club Name</p>
          <p>Posted timeline</p>
          <p>Posted Content</p>
        </Card>
      </div>
    </>
  )
}
