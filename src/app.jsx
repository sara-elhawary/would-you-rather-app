import React, { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './components/header'
import LeaderBoard from './pages/leaderboard'
import Login from './pages/login'
import Home from './pages/home'
import NoMatch from './pages/404'
import NewPoll from './pages/new-poll'
import store from './store'
import { getInitialData } from './utils/API'
import { setUsers } from './slices/users'
import { setQuestions } from './slices/questions'
import PollAnswer from './components/poll-answer'

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  // const authUser = useSelector((state) => state.authUser.value)
  const authUser = 'sarahedo'
  // console.log(authUser)

  // console.log(state)

  useEffect(() => {
    getInitialData().then((data) => {
      dispatch(setUsers(data))
      dispatch(setQuestions(data))
    })
  }, [])

  return (
    <BrowserRouter>
      {authUser === null ? (
        <Fragment>
          <Route exact path="/login">
            <Login />
          </Route>
          <Redirect to="/login" />
        </Fragment>
      ) : (
        <Fragment>
          <Header authUser={authUser} />
          <Switch>
            <Route exact path="/404">
              <NoMatch />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/new-poll">
              <NewPoll />
            </Route>
            <Route exact path="/leader-board">
              <LeaderBoard />
            </Route>
            <Route exact path="/question/:id">
              <PollAnswer />
            </Route>
          </Switch>
        </Fragment>
      )}
    </BrowserRouter>
  )
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
)
