import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import Poll from '../components/poll'

export default function Home() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const inc = () => dispatch({ type: 'INCREMENT', step: 1 })
  const dec = () => dispatch({ type: 'DECREMENT', step: 1 })

  return (
    <div>
      <Poll />
      <div>
        <h1>Count:{count}</h1>
        <button onClick={inc}>inc</button>
        <button onClick={dec}>dec</button>
      </div>
    </div>
  )
}
