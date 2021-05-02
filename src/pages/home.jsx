import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import Poll from '../components/poll'
import classes from './home.module.css'

export default function Home() {
  //users cuz of reducer name
  const users = Object.values(useSelector((state) => state.users.value))
  const questions = useSelector((state) => state.questions.value)
  console.log(questions)
  console.log(users)

  return (
    <div className={classes.container}>
      <div className={classes.btns}>
        <button className={classes.unansweredBtn}>Unanswered</button>
        <button className={classes.answeredBtn}>Answered</button>
      </div>
      {/* {JSON.stringify(users, null, 2)} */}
      <div className={classes.polls}></div>
      {users.map((user) => (
        <Poll name={user.name} key={user.id} id={user.id} />
      ))}
    </div>
  )
}
