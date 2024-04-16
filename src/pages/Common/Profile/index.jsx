import React from 'react'
import TextField from 'components/Input/TextField'
import Button from 'components/Button'
import Card from 'components/Card'

export default function Profile({ userType }) {
  return (
    <>
      {userType === "player" &&
        <>
          <Card>
            <img src="" alt="" width={64} height={64} />
            <p>{"Player's Name"}</p>
            <p>{"Player's Age"}</p>
            <p>{"Player's Gender"}</p>
            <p>{"Player's Joined Date"}</p>
            <p>{"Player's Followers"}</p>
            <p>{"Player's Liked"}</p>
          </Card>
          <Card>
            <p>Points</p>
            <p>Player's Points</p>
            <p>Player's Rank</p>
            <p>Badges</p>
            <img src="" alt="" width={64} height={64} />
            <p>Badge Name</p>
          </Card>
          <Card>
            <p>Match History</p>
            <p>All</p>
            <div>
              <img src="" alt="" width={64} height={64} />
              <p>vs</p>
              <img src="" alt="" width={64} height={64} />
              <p>Against ABC</p>
              <img src="" alt="" width={16} height={16} />
              <p>Match Scores</p>
              <p>Match Date Time</p>
            </div>
          </Card>
        </>
      }
      {userType === "club" &&
        <>
          <Card>
            <img src="" alt="" width={64} height={64} />
            <p>{"Club's Name"}</p>
            <p>{"Club's Location"}</p>
            <p>{"Club's Joined Date"}</p>
            <p>{"Club's Followers"}</p>
          </Card>
          <Card>
            <p>Booking</p>
            <p>Book Now</p>
            <p>Competition</p>
            <div>
              <img src="" alt="" width={64} height={64} />
              <p>Competition Name</p>
              <p>Competition Datetime</p>
              <p>Sign-Up Now</p>
            </div>
          </Card>
          <Card>
            <p>Posted by Club Name</p>
            <p>Posted timeline</p>
            <p>Posted Content</p>
          </Card>
        </>
      }
    </>
  )
}
