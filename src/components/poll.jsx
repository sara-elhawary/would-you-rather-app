import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import classes from './poll.module.css'
import PollAnswer from './poll-answer'
import PollResult from './poll-result'

export default function Poll(props) {
  // const [step, setStep] = useState('body')
  // console.log(props)
  const { author, id, optionOne } = props
  // console.log(avatar)

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
            <Link to={`question/${id}`}>
              <button className={classes.answerBtn}>Answer Poll</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
