import React from 'react'
import { useSelector } from 'react-redux'

import BoardCard from '../components/board-card'

export default function LeaderBoard() {
  const users = Object.values(useSelector((state) => state.users.value))
  console.log(users)

  return (
    <div>
      {users.map((user) => (
        <BoardCard
          questions={user.questions.length}
          answers={Object.keys(user.answers).length}
          key={user.id}
          name={user.name}
          id={user.id}
        />
      ))}
    </div>
  )

  // return <BoardCard />
}
