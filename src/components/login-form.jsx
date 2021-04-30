import React from 'react'

import classes from './login-form.module.css'
import img1 from '../assets/icons/01.png'
import img2 from '../assets/icons/02.png'
import img3 from '../assets/icons/03.png'
import img4 from '../assets/icons/04.png'
import img5 from '../assets/icons/05.png'
import img6 from '../assets/icons/06.png'
import img7 from '../assets/icons/07.png'

export default function LoginForm() {
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h3>Welcome to the Would Rather App</h3>
        <p>Please sign in to continue</p>
      </div>
      <div className={classes.avatars}>
        <img src={img1} alt="" className={classes.avatar} />
        <img src={img2} alt="" className={classes.avatar} />
        <img src={img3} alt="" className={classes.avatar} />
        <img src={img4} alt="" className={classes.avatar} />
        <img src={img5} alt="" className={classes.avatar} />
        <img src={img6} alt="" className={classes.avatar} />
        <img src={img7} alt="" className={classes.avatar} />
      </div>
      <div className={classes.form}>
        <h1>Sign In</h1>
        {/* <input type="text" placeholder="Select a Friend" /> */}
        <select name="users">
          <option value="">Select a Friend</option>
          <option value="user 1">user 1</option>
          <option value="user 2">user 2</option>
          <option value="user 3">user 3</option>
          <option value="user 4">user 4</option>
        </select>
        <button className={classes.btn}>Login</button>
      </div>
    </div>
  )
}
