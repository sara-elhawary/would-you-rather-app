import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import classes from './poll-answer.module.css'

export default function PollAnswer() {
  const questions = useSelector((state) => state.questions.value)

  const { id } = useParams()
  // const id = '6ni6ok3ym7mf1p33lnez'
  const optionOne = questions[id].optionOne.text
  const optionTwo = questions[id].optionTwo.text
  const author = questions[id].author

  // console.log(optionTwo, optionOne, author)

  const handleSubmit = (event) => {
    event.preventDefault()
    // const answer = event.target.value
    // console.log(answer)
  }

  return (
    <div className={classes.container}>
      <div className={classes.userCard}>
        <div className={classes.cardHeader}>
          <h4 className={classes.head}>{author} asks</h4>
        </div>

        <div className={classes.cardBody}>
          <div>
            <img
              src={`assets/icons/${author}.png`}
              alt="author-img"
              className={classes.userAvatar}
            />
          </div>
          <div className={classes.qInfo}>
            <h4>Would you rather</h4>
            <form className={classes.form} onSubmit={handleSubmit}>
              <div className={classes.formControl}>
                <input type="radio" />
                <label> {optionOne}</label>
              </div>
              <div className={classes.formControl}>
                <input type="radio" />
                <label> {optionTwo}</label>
              </div>
              <br />
              <button className={classes.submitBtn}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
