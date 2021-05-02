import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import avatar1 from '../assets/icons/01.png'
import avatar2 from '../assets/icons/02.png'
import avatar3 from '../assets/icons/03.png'
import classes from './poll.module.css'
import PollBody from './poll-body'
import PollAnswer from './poll-answer'
import PollResult from './poll-result'

const avatars = { sarahedo: avatar1 }

export default function Poll(props) {
  const [step, setStep] = useState('body')
  // console.log(props)
  const { name, id } = props
  // console.log(avatar)

  return (
    <div className={classes.container}>
      <div className={classes.userCard}>
        <div className={classes.cardHeader}>
          <h4 className={classes.head}>{name} asks</h4>
        </div>

        <div className={classes.cardBody}>
          <div>
            <img src={avatars[id]} alt="" className={classes.userAvatar} />
          </div>
          <div className={classes.qInfo}>
            {step === 'body' && <PollBody onAnswer={() => setStep('answer')} />}
            {step === 'answer' && <PollAnswer />}
            {step === 'result' && <PollResult />}
          </div>
        </div>
      </div>
    </div>
  )
}
