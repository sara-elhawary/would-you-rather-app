import React from 'react'

import classes from './poll-result.module.css'

export default function PollResult() {
  return (
    <div>
      <h2>Results:</h2>
      <h4>Would you rather</h4>
      <div className={classes.resultScore}>
        <p> find $50 yourself</p>
        <h5>0 out of 3 votes</h5>
      </div>
      <div className={classes.resultScore}>
        <p>let your friend find you $50</p>
        <h5>2 out of 3 votes</h5>
      </div>
      <button>Back</button>
    </div>
  )
}
