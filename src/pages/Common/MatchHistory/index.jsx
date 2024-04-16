import React from 'react'
import Card from 'components/Card'

export default function MatchHistory() {
  return (
    <>
      <Card>
        <img src="" alt="" width={64} height={64} />
        <p>Name 1</p>
        <p>vs</p>
        <img src="" alt="" width={64} height={64} />
        <p>Name 2</p>

        <p>Date: Match Date</p>
        <p>Venue: Match Venue</p>
        <p>Result: Match Result</p>
      </Card>
      <Card>
        <p>Upload File Score Here</p>
      </Card>
      <Card>
        <p>Details</p>
        <p>Section</p>
        <p>Result</p>

        <p>1</p>
        <img src="" alt="" width={32} height={32} />
        <p>Match Section Score</p>
        <img src="" alt="" width={32} height={32} />

        <p>2</p>
        <img src="" alt="" width={32} height={32} />
        <p>Match Section Score</p>
        <img src="" alt="" width={32} height={32} />

        <p>3</p>
        <img src="" alt="" width={32} height={32} />
        <p>Match Section Score</p>
        <img src="" alt="" width={32} height={32} />

        <p>Show More</p>

      </Card>
    </>
  )
}
