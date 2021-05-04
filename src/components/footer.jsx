import React from 'react'

import classes from './footer.module.css'

export default function Footer() {
  return (
    <div className={classes.footer}>
      <span> Would you Rather Game</span>
      <p>
        © 2021
        <a href="https://www.linkedin.com/in/sara-elhawary/">Sara Elhawary</a>
        .All Rights Reserved
      </p>
    </div>
  )
}
