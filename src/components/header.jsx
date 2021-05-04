import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import classes from './header.module.css'
import { removeAuthUser } from '../slices/authUser'

export default function Header({ authUser }) {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = () => {
    // console.log('logged out')
    dispatch(removeAuthUser())
    history.push('/login')
  }

  return (
    <div className={classes.header}>
      <ul className={classes.menu}>
        <li className={classes.item}>
          <Link className={classes.link} to="/">
            Home
          </Link>
        </li>

        <li className={classes.menuItem}>
          <Link className={classes.link} to="/add">
            New Poll
          </Link>
        </li>
        <li className={classes.menuItem}>
          <Link className={classes.link} to="/leaderboard">
            Leader Board
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
        <div className={classes.logout} onClick={handleLogout}>
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
