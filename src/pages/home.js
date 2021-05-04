import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import sortBy from 'sort-by'

import AnsweredPoll from '../components/answered-poll'
import Poll from '../components/poll'
import classes from './home.module.css'

export default function Home() {
  const [showDefault, setShowDefault] = useState(true)
  const authUser = useSelector((state) => state.authUser.value)
  const questions = Object.values(useSelector((state) => state.questions.value))
  console.log(questions)

  const answeredQuestions = questions
    .sort(sortBy('-timestamp'))
    .filter(
      (question) =>
        question.optionOne.votes.includes(authUser) ||
        question.optionTwo.votes.includes(authUser)
    )
  const unAnsweredQuestions = questions
    .sort(sortBy('-timestamp'))
    .filter(
      (question) =>
        !question.optionOne.votes.includes(authUser) &&
        !question.optionTwo.votes.includes(authUser)
    )

  const handleUnansweredSection = () => {
    setShowDefault(true)
  }
  const handleAnsweredSection = () => {
    setShowDefault(false)
  }

  return (
    <div className={classes.container}>
      <div className={classes.btns}>
        <button
          className={classes.unansweredBtn}
          onClick={handleUnansweredSection}
        >
          Unanswered
        </button>
        <button className={classes.answeredBtn} onClick={handleAnsweredSection}>
          Answered
        </button>
      </div>
      <div className={classes.polls}>
        {showDefault
          ? unAnsweredQuestions.map((question) => (
              <Poll
                author={question.author}
                key={question.id}
                id={question.id}
                optionOne={question.optionOne.text}
                optionTwo={question.optionTwo.text}
              />
            ))
          : answeredQuestions.map((question) => (
              <AnsweredPoll
                author={question.author}
                key={question.id}
                id={question.id}
                optionOne={question.optionOne.text}
                optionTwo={question.optionTwo.text}
              />
            ))}
      </div>
    </div>
  )
}
