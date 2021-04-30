import React from 'react'

import classes from './poll-body.module.css'

export default function PollBody() {
  return (
    <div>
      <h4>Would you rather</h4>
      <div className={classes.q}>
        <p>
          find $50 yourself
          <br />
          or...
        </p>
      </div>
      <button className={classes.answerBtn}>Answer Poll</button>
    </div>
  )
}
