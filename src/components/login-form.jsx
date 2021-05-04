import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import classes from './login-form.module.css'
import { setAuthUser } from '../slices/authUser'

export default function LoginForm() {
  const dispatch = useDispatch()
  const history = useHistory()

  const [user, setUser] = useState('')
  const users = Object.keys(useSelector((state) => state.users.value))

  const handleChange = (e) => {
    setUser(e.target.value)
  }

  const handleClick = () => {
    if (user) {
      dispatch(setAuthUser(user))
      // history.push('/')
    } else {
      alert('please Select a user first!')
      console.log('working')
    }
  }
  // console.log(users)
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h3>Welcome to the Would Rather App</h3>
        <p>Please sign in to continue</p>
      </div>
      <div className={classes.avatars}>
        <img
          src={'/assets/icons/sarahedo.png'}
          alt=""
          className={classes.avatar}
        />
        <img
          src={'/assets/icons/sarahedo.png'}
          alt=""
          className={classes.avatar}
        />
        <img
          src={'/assets/icons/johndoe.png'}
          alt=""
          className={classes.avatar}
        />
        <img
          src={'/assets/icons/tylermcginnis.png'}
          alt=""
          className={classes.avatar}
        />
        <img src={'/assets/icons/04.png'} alt="" className={classes.avatar} />
        <img src={'/assets/icons/05.png'} alt="" className={classes.avatar} />
        <img src={'/assets/icons/06.png'} alt="" className={classes.avatar} />
      </div>
      <div className={classes.form}>
        <h1>Sign In</h1>
        <select name="users" onChange={handleChange}>
          <option>Select a Friend</option>
          {users.map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>
        <button className={classes.btn} onClick={handleClick}>
          Login
        </button>
      </div>
    </div>
  )
}
