import React from 'react'
import { useSelector } from 'react-redux'
import sortBy from 'sort-by'

import BoardCard from '../components/board-card'

export default function LeaderBoard() {
  const users = Object.values(useSelector((state) => state.users.value))
  console.log(users)
  return (
    <div>
      {users.length > 0 &&
        users
          .map((user) => ({
            ...user,
            answeredQuestions: Object.keys(user.answers).length,
            createdQuestions: user.questions.length,
            score: Object.keys(user.answers).length + user.questions.length,
          }))
          .sort(sortBy('-score'))
          .map((user) => (
            <BoardCard
              name={user.name}
              questions={user.createdQuestions}
              answers={user.answeredQuestions}
              id={user.id}
              key={user.id}
            />
          ))}
    </div>
  )
}
