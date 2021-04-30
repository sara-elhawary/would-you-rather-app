import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import Poll from '../components/poll'
import classes from './home.module.css'

export default function Home() {
  const users = useSelector((state) => state)
  // const dispatch = useDispatch()

  // console.log(users)

  return (
    <div className={classes.container}>
      <div className={classes.btns}>
        <button className={classes.unansweredBtn}>Unanswered</button>
        <button className={classes.answeredBtn}>Answered</button>
      </div>
      <div className={classes.polls}></div>
      <Poll />
    </div>
  )
}
