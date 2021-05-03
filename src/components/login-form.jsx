import React from 'react'
import { useSelector } from 'react-redux'

import classes from './login-form.module.css'

export default function LoginForm() {
  const users = Object.keys(useSelector((state) => state.users.value))

  // console.log(users)
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h3>Welcome to the Would Rather App</h3>
        <p>Please sign in to continue</p>
      </div>
      <div className={classes.avatars}>
        {/* <img src={'/assets/icons/01.png'} alt="" className={classes.avatar} /> */}
        {/* <img src={img2} alt="" className={classes.avatar} />
        <img src={img3} alt="" className={classes.avatar} />
        <img src={img4} alt="" className={classes.avatar} />
        <img src={img5} alt="" className={classes.avatar} />
        <img src={img6} alt="" className={classes.avatar} />
        <img src={img7} alt="" className={classes.avatar} /> */}
      </div>
      <div className={classes.form}>
        <h1>Sign In</h1>
        <select name="users">
          <option value="">Select a Friend</option>
          {users.map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>
        <button className={classes.btn}>Login</button>
      </div>
    </div>
  )
}
