import { createSlice } from '@reduxjs/toolkit'

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    value: {},
  },
  reducers: {
    setQuestions: (state, action) => {
      state.value = action.payload.questions
    },
    addQuestion: (state, action) => {
      const question = action.payload
      state.value[question.id] = question
    },
    addAnswerToQuestion: (state, action) => {
      const { qid, authUser, answer } = action.payload
      state.value[qid][answer].votes.push(authUser)
    },
  },
})

export const {
  setQuestions,
  addQuestion,
  addAnswerToQuestion,
} = questionsSlice.actions

export default questionsSlice.reducer
