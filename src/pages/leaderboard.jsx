import React from 'react'
import { useSelector } from 'react-redux'
import sortBy from 'sort-by'

import BoardCard from '../components/board-card'

export default function LeaderBoard() {
  const users = Object.values(useSelector((state) => state.users.value))
  // console.log(users)

  return (
    <div>
      {users.length > 0 &&
        users
          .map((userId) => ({
            id: userId,
            name: users[userId].name,
            avatarURL: users[userId].avatarURL,
            answeredQuestions: Object.keys(users[userId].answers).length,
            createdQuestions: users[userId].questions.length,
            score:
              Object.keys(users[userId].answers).length +
              users[userId].questions.length,
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
