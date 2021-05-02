import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import avatar1 from '../assets/icons/01.png'
import avatar2 from '../assets/icons/02.png'
import avatar3 from '../assets/icons/03.png'
import classes from './poll.module.css'
import PollAnswer from './poll-answer'
import PollResult from './poll-result'

const avatars = { sarahedo: avatar1, tylermcginnis: avatar2, johndoe: avatar3 }

export default function Poll(props) {
  // const [step, setStep] = useState('body')
  // console.log(props)
  const { author, id, optionOne, optionTwo } = props
  // console.log(avatar)

  return (
    <div className={classes.container}>
      <div className={classes.userCard}>
        <div className={classes.cardHeader}>
          <h4 className={classes.head}>{author} asks</h4>
        </div>

        <div className={classes.cardBody}>
          <div>
            <img src={avatars[id]} alt="" className={classes.userAvatar} />
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
            <button className={classes.answerBtn}>Answer Poll</button>
            {/* {step === 'body' && (
              <PollBody
                optionOne={optionOne}
                onAnswer={() => setStep('answer')}
              />
            )}
            {step === 'answer' && (
              <PollAnswer optionOne={optionOne} optionTwo={optionTwo} />
            )}
            {step === 'result' && <PollResult />} */}
          </div>
        </div>
      </div>
    </div>
  )
}
