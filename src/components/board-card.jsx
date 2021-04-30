import React from 'react'

import classes from './board-card.module.css'
import img1 from '../assets/icons/02.png'

export default function BoardCard() {
  return (
    <div className={classes.boardCard}>
      <div className={classes.userInfoDiv}>
        <div className={classes.userAvatarDiv}>
          <img src={img1} alt="" className={classes.userAvatar} />
        </div>
        <div className={classes.userInfo}>
          <div className={classes.userName}>
            <h3>Brittini</h3>
          </div>
          <div className={classes.qScore}>
            <div className={classes.q}>
              <p>Answered Questions</p>
              <p>4</p>
            </div>
            <hr className={classes.hr} />
            <div className={classes.q}>
              <p>Created Questions</p>
              <p>4</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.scoreDiv}>
        <div className={classes.userScore}>
          <div className={classes.head}>
            <h4>Score</h4>
          </div>
          <div className={classes.score}>
            <h4>8</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
