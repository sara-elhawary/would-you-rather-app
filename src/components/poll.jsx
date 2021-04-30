import React from 'react'

import userAvatar from '../assets/icons/02.png'
import classes from './poll.module.css'
import PollBody from './poll-body'
import PollAnswer from './poll-answer'

export default function Poll() {
  return (
    <div className={classes.container}>
      <div className={classes.userCard}>
        <div className={classes.cardHeader}>
          <h4 className={classes.head}>Ifenna asks</h4>
        </div>

        <div className={classes.cardBody}>
          <div>
            <img src={userAvatar} alt="" className={classes.userAvatar} />
          </div>
          <div className={classes.qInfo}>
            <PollBody />
            {/* <PollAnswer /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
