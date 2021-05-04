import React from 'react'

import classes from './board-card.module.css'

export default function BoardCard({ name, questions, answers, id }) {
  const score = questions + answers

  return (
    <div className={classes.boardCard}>
      <div className={classes.userInfoDiv}>
        <div className={classes.userAvatarDiv}>
          <img
            src={`assets/icons/${id}.png`}
            alt="profile-img"
            className={classes.userAvatar}
          />
        </div>
        <div className={classes.userInfo}>
          <div className={classes.userName}>
            <h3>{name}</h3>
          </div>
          <div className={classes.qScore}>
            <div className={classes.q}>
              <p>Answered Questions</p>
              <p>{answers}</p>
            </div>
            <hr className={classes.hr} />
            <div className={classes.q}>
              <p>Created Questions</p>
              <p>{questions}</p>
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
            <h4>{score}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
