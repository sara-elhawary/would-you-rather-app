import React from 'react'

import classes from './poll-answer.module.css'

export default function PollAnswer({ optionOne, optionTwo }) {
  return (
    <div>
      <h4>Would you rather</h4>
      <form className={classes.form}>
        <div className={classes.formControl}>
          <input type="radio" />
          <label> {optionOne}</label>
        </div>
        <div className={classes.formControl}>
          <input type="radio" />
          <label> {optionTwo}</label>
        </div>

        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}
