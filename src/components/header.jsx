import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './header.module.css'
import authUserImg from '../assets/icons/01.png'

export default function Header() {
  return (
    <header className={classes.header}>
      <ul className={classes.menu}>
        <li className={classes.item}>
          <Link className={classes.link} to="/home">
            Home
          </Link>
        </li>
        <li className={classes.menuItem}>
          <Link className={classes.link} to="/new-poll">
            New Poll
          </Link>
        </li>
        <li className={classes.menuItem}>
          <Link className={classes.link} to="/leader-board">
            Leader Board
          </Link>
        </li>
        <li className={classes.menuItem}>
          <Link className={classes.link} to="/login">
            Login
          </Link>
        </li>
      </ul>
      <div className={classes.logout}>
        <div className={classes.authUserInfo}>
          <img src={authUserImg} className={classes.authUserImg} />
          <span>Peter</span>
        </div>

        {/* <FontAwesomeIcon icon={['fas', 'sign-out-alt']} /> */}
        <button className={classes.logoutBtn}>Logout</button>
      </div>
    </header>
  )
}
