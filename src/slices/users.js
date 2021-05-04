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
    userAnswerQuestion: (state, action) => {
      const authUser = action.payload.authUser
      const qid = action.payload.qid
      const answer = action.payload.answer

      state.value[authUser].answers = {
        [qid]: answer,
      }
    },
  },
})

export const {
  setUsers,
  addQuestionToUser,
  userAnswerQuestion,
} = usersSlice.actions

export default usersSlice.reducer
