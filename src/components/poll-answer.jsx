import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import classes from './poll-answer.module.css'
import PollResult from './poll-result'
import { addAnswerToQuestion } from '../slices/questions'
import { userAnswerQuestion } from '../slices/users'

export default function PollAnswer() {
  const dispatch = useDispatch()

  const [answer, setAnswer] = useState('')
  const [visible, setVisible] = useState(true)
  const questions = useSelector((state) => state.questions.value)
  const authUser = useSelector((state) => state.authUser.value)

  const { qid } = useParams()
  // const id = '6ni6ok3ym7mf1p33lnez'
  console.log(qid)
  const optionOne = questions[qid].optionOne.text
  const optionTwo = questions[qid].optionTwo.text
  const author = questions[qid].author
  const optionOneVotes = questions[qid].optionOne.votes
  const optionTwoVotes = questions[qid].optionTwo.votes

  // console.log(optionTwo, optionOne, author)
  const handleClick = (e) => {
    const chosen = e.target.value
    setAnswer(chosen)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(answer)
    setVisible(false)
    dispatch(addAnswerToQuestion({ qid, authUser, answer }))
    dispatch(userAnswerQuestion({ qid, authUser, answer }))
  }

  if (!authUser === author) return <Redirect to="/bad" />

  return (
    <div>
      {visible ? (
        <div className={classes.container}>
          <div className={classes.userCard}>
            <div className={classes.cardHeader}>
              <h4 className={classes.head}>{author} asks</h4>
            </div>

            <div className={classes.cardBody}>
              <div>
                <img
                  src={`../assets/icons/${author}.png`}
                  alt="author-img"
                  className={classes.userAvatar}
                />
              </div>
              <div className={classes.qInfo}>
                <h4>Would you rather</h4>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <div className={classes.formControl}>
                    <input
                      type="radio"
                      onClick={handleClick}
                      value="optionOne"
                      name="vote"
                      id="optionOne"
                      required
                    />
                    <label htmlFor="optionOne"> {optionOne}</label>
                  </div>
                  <div className={classes.formControl}>
                    <input
                      type="radio"
                      onClick={handleClick}
                      value="optionTwo"
                      name="vote"
                      id="optionTwo"
                      required
                    />
                    <label htmlFor="optionTwo"> {optionTwo}</label>
                  </div>
                  <br />
                  <button className={classes.submitBtn}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PollResult
          author={author}
          optionOne={optionOne}
          optionTwo={optionTwo}
          optionOneVotes={optionOneVotes}
          optionTwoVotes={optionTwoVotes}
          answer={answer}
        />
      )}
    </div>
  )
}
