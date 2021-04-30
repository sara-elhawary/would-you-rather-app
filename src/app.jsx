import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Header from './components/header'
import LeaderBoard from './pages/leaderboard'
import Login from './pages/login'
import Home from './pages/home'
import NewPoll from './pages/new-poll'
import store from './store'
import reducer from './reducers'

// const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
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
    </Provider>
  )
}

render(<App />, document.querySelector('#app'))
