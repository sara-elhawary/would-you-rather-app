import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import classes from './answered-poll.module.css'
import PollResult from './poll-result'

export default function AnsweredPoll({ author, id, optionOne, optionTwo }) {
  const [visible, setVisible] = useState(true)

  const questions = useSelector((state) => state.questions.value)
  const authUser = useSelector((state) => state.authUser.value)
  // console.log(questions)
  // console.log(id)

  const optionOneVotes = questions[id].optionOne.votes
  const optionTwoVotes = questions[id].optionTwo.votes

  //authUserAnswer
  const answer = ([optionOneVotes]) => {
    if (optionOneVotes.includes(authUser)) {
      return 'optionOne'
    } else {
      return 'optionTwo'
    }
  }

  const handleClick = () => {
    setVisible(false)
  }

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
                  src={`assets/icons/${author}.png`}
                  alt=""
                  className={classes.userAvatar}
                />
              </div>
              <div className={classes.qInfo}>
                <h4>Would you rather</h4>
                <div className={classes.q}>
                  <p>
                    {optionOne}
                    <br />
                    or...
                  </p>
                </div>

                <button className={classes.resultBtn} onClick={handleClick}>
                  Results
                </button>
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
          answer={answer([optionOneVotes])}
        />
      )}
    </div>
  )
}
