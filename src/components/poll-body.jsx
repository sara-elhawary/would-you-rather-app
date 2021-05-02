import React from 'react'

import classes from './poll-body.module.css'

export default function PollBody({ onAnswer }) {
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
      <button className={classes.answerBtn} onClick={onAnswer}>
        Answer Poll
      </button>
    </div>
  )
}
