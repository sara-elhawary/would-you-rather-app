import React from 'react'

import classes from './poll-answer.module.css'

export default function PollAnswer() {
  return (
    <div>
      <h4>Would you rather</h4>
      <form className={classes.form}>
        <div className={classes.formControl}>
          <input type="radio" />
          <label> find $50 yourself</label>
        </div>
        <div className={classes.formControl}>
          <input type="radio" />
          <label> let your friend find you $50 </label>
        </div>

        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
