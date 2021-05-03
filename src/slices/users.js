import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: {},
  },
  reducers: {
    setUsers: (state, action) => {
      state.value = action.payload.users
    },
    addQuestionToUser: (state, action) => {
      const author = action.payload.author
      const id = action.payload.id

      state.value[author].questions.push(id)
    },
    addAnswerToQuestion: (state, action) => {
      const authedUser = action.payload.authedUser
      const qid = action.payload.qid
      const answer = action.payload.answer

      state.value[authedUser].answers = {
        [qid]: answer,
      }
    },
  },
})

export const {
  setUsers,
  addQuestionToUser,
  addAnswerToQuestion,
} = usersSlice.actions

export default usersSlice.reducer
