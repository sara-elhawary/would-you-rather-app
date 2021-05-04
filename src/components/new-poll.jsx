import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import classes from './new-poll.module.css'
import { formatQuestion } from '../utils/API'
import { useDispatch } from 'react-redux'
import { addQuestion } from '../slices/questions'

export default function NewPoll(props) {
  const questions = useSelector((state) => state.questions.value)
  const authUser = useSelector((state) => state.authUser.value)

  const [optionOne, setOptionOne] = useState('')
  const [optionTwo, setOptionTwo] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  //change handlers for inputs(handleOptionOneChange,...)

  const handleOptionOneChange = (event) => setOptionOne(event.target.value)
  const handleOptionTwoChange = (event) => setOptionTwo(event.target.value)

  //handle form submit(handleSubmit)
  const handleSubmit = (event) => {
    event.preventDefault()
    //formatQuestion

    const question = formatQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authUser,
    })
    //dispatch(addQuestion)
    dispatch(addQuestion(question))
    // console.log('submitted')
    console.log(questions)
    history.push('/')
  }
  const isDisabled = () => !optionOne || !optionTwo

  return (
    <div className={classes.newPoll}>
      <div className={classes.head}>
        <h3>Create a New Poll</h3>
      </div>
      <div className={classes.newPollInfo}>
        <p>Complete the question: </p>
        <h4 className={classes.subtitle}>Would you rather...</h4>
        <form onSubmit={handleSubmit} className={classes.form}>
          <input
            type="text"
            className={classes.input}
            placeholder="Enter option one..."
            onChange={handleOptionOneChange}
            value={optionOne}
          />
          <h4>or...</h4>
          <input
            type="text"
            className={classes.input}
            placeholder="Enter option two..."
            onChange={handleOptionTwoChange}
            value={optionTwo}
          />
          <button className={classes.btn} disabled={isDisabled()}>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
