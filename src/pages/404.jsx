import React from 'react'
import { Link } from 'react-router-dom'

import classes from './404.module.css'

export default function NoMatch() {
  return (
    <div className={classes.container}>
      <h1>404</h1>
      <h4>We are sorry,but the page you are looking for does not exist!</h4>
      <Link to="/" className={classes.link}>
        Home
      </Link>
    </div>
  )
}
