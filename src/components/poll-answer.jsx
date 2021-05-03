import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import classes from './poll-answer.module.css'

export default function PollAnswer() {
  const optionOne = 'op 1'
  const optionTwo = 'op 2'
  const { id } = useParams()

  const questions = useSelector((state) => state.questions.value)

  return (
    <div>
      <h4>Would you rather</h4>
      {JSON.stringify(questions[id])}
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
