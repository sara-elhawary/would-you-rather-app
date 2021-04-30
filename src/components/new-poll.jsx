import React from 'react'

import classes from './new-poll.module.css'

export default function NewPoll() {
  return (
    <div className={classes.newPoll}>
      <div className={classes.head}>
        <h3>Create a New Poll</h3>
      </div>
      <div className={classes.newPollInfo}>
        <p>Complete the question: </p>
        <h4 className={classes.subtitle}>Would you rather...</h4>
        <form className={classes.form}>
          <input
            type="text"
            className={classes.input}
            placeholder="Enter option one..."
          />
          <h4>or...</h4>
          <input
            type="text"
            className={classes.input}
            placeholder="Enter option two..."
          />
          <button className={classes.btn}>Submit</button>
        </form>
      </div>
    </div>
  )
}
