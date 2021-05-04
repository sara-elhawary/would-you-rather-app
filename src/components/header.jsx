import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import classes from './header.module.css'
import { removeAuthUser } from '../slices/authUser'

export default function Header() {
  const dispatch = useDispatch()
  const history = useHistory()

  const authUser = useSelector((state) => state.authUser.value)

  const handleLogout = () => {
    // console.log('logged out')
    dispatch(removeAuthUser())
    history.push('/login')
  }

  return (
    <div className={classes.header}>
      <ul className={classes.menu}>
        <li className={classes.item}>
          <NavLink
            exact
            to="/"
            className={classes.link}
            activeStyle={{ color: '#4dac37' }}
          >
            Home
          </NavLink>
        </li>

        <li className={classes.menuItem}>
          <NavLink
            className={classes.link}
            to="/add"
            activeStyle={{ color: '#4dac37' }}
          >
            New Poll
          </NavLink>
        </li>
        <li className={classes.menuItem}>
          <NavLink
            className={classes.link}
            to="/leaderboard"
            activeStyle={{ color: '#4dac37' }}
          >
            Leader Board
          </NavLink>
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
