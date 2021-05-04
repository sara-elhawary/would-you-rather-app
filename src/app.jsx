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
  const authUser = useSelector((state) => state.authUser.value)
  console.log(authUser)

  // console.log(state)

  useEffect(() => {
    getInitialData().then((data) => {
      dispatch(setUsers(data))
      dispatch(setQuestions(data))
    })
  }, [])

  return (
    <BrowserRouter>
      {authUser === '' ? (
        <Fragment>
          <Route exact path="/login">
            <Login />
          </Route>
          <Redirect to="/login" />
        </Fragment>
      ) : (
        <Fragment>
          <Switch>
            <Route exact path="/">
              <Header authUser={authUser} />
              <Home />
            </Route>
            <Route exact path="/add">
              <Header authUser={authUser} />
              <NewPoll />
            </Route>
            <Route exact path="/leaderboard">
              <Header authUser={authUser} />
              <LeaderBoard />
            </Route>
            <Route exact path="/question/:qid">
              <Header authUser={authUser} />
              <PollAnswer authUser={authUser} />
            </Route>
            <Route exact path="/login">
              <Redirect to="/" />
            </Route>
            <Route exact path="*">
              <NoMatch />
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
