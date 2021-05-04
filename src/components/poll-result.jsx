import React from 'react'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import classes from './poll-result.module.css'

export default function PollResult({
  author,
  optionOne,
  optionTwo,
  optionOneVotes,
  optionTwoVotes,
  answer,
}) {
  const history = useHistory()

  const allVotes = optionOneVotes.length + optionTwoVotes.length
  const optionOnePrecent = ((optionOneVotes.length / allVotes) * 100).toFixed(0)
  const optionTwoPrecent = ((optionTwoVotes.length / allVotes) * 100).toFixed(0)

  const handleClick = () => {
    history.push('/')
  }

  console.log(
    optionTwoVotes,
    optionOneVotes,
    optionOnePrecent,
    optionTwoPrecent
  )
  console.log(answer)
  console.log(optionOne)
  console.log(optionTwo)

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h4>{author} asks:</h4>
      </div>
      <div className={classes.cardBody}>
        <div className={classes.imgDiv}>
          <img
            src={`/assets/icons/${author}.png`}
            alt=""
            className={classes.authorAvatar}
          />
        </div>
        <div className={classes.resultDiv}>
          <h2>Results:</h2>
          <h4>Would you rather</h4>
          <div className={classes.outerOptionOne}>
            <div className={classes.optionOne}>
              <p>{optionOne}</p>
              {answer === 'optionOne' && (
                <div className={classes.userVote}>
                  your vote
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className={classes.checkCircleIcon}
                  />
                </div>
              )}
              <div className={classes.optionOnePrecent}>
                <span>{`${optionOnePrecent}%`}</span>
                <div
                  className={classes.optionOneBar}
                  style={{ width: `${optionOnePrecent}%` }}
                ></div>
              </div>
              <h5>{`${optionOneVotes.length} out of ${allVotes} votes`}</h5>
            </div>
          </div>
          <div className={classes.outerOptionTwo}>
            <div className={classes.optionTwo}>
              <p>{optionTwo}</p>
              {answer === 'optionTwo' && (
                <div className={classes.userVote}>
                  your vote
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className={classes.checkCircleIcon}
                  />
                </div>
              )}

              <div className={classes.optionTwoPrecent}>
                <span>{`${optionTwoPrecent}%`}</span>
                <div
                  className={classes.optionTwoBar}
                  style={{ width: `${optionTwoPrecent}%` }}
                ></div>
              </div>
              <h5>{`${optionTwoVotes.length} out of ${allVotes} votes`}</h5>
            </div>
          </div>
          <button onClick={handleClick}>Back</button>
        </div>
      </div>
    </div>
  )
}
