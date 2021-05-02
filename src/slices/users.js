import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    value: {},
  },
  reducers: {
    getUsers: (state, action) => {
      state.value = action.payload.users
    },
    addQuestion: (state, action) => {
      const authedUser = action.payload.authedUser
      const questionId = action.payload.qid

      state.value = {
        [authedUser]: action.payload.users[authedUser],
        questions: [action.payload.users[authedUser].questions, questionId],
      }
    },
    answerQuestion: (state, action) => {
      const authedUser = action.payload.authedUser
      const questionId = action.payload.qid

      state.value = {
        [action.payload.authedUser]: action.payload.users[authedUser],
        answers: action.payload.users[authedUser].answers,
        [questionId]: action.payload.answer,
      }
    },
  },
})

export const { getUsers, addQuestion, answerQuestion } = usersSlice.actions

export default usersSlice.reducer
