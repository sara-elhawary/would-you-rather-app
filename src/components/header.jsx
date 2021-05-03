import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import classes from './header.module.css'

export default function Header({ authUser }) {
  return (
    <div className={classes.header}>
      <ul className={classes.menu}>
        <li className={classes.item}>
          <Link className={classes.link} to="/">
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
          <Link className={classes.link} to="/404">
            404
          </Link>
        </li>
      </ul>
      <div className={classes.auth}>
        <div className={classes.authUserInfo}>
          <img
            src={`assets/icons/${authUser}.png`}
            className={classes.authUserImg}
          />
          <span>{authUser}</span>
        </div>
        <div className={classes.logout}>
          <p className={classes.logoutBtn}>Logout</p>
          <div className={classes.iconDiv}>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              className={classes.signOutIcon}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
