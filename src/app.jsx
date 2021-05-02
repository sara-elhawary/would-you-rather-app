import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    getInitialData().then((data) => {
      dispatch(setUsers(data))
      dispatch(setQuestions(data))
    })
  }, [])

  return (
    <BrowserRouter>
      <Header />
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
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
)
