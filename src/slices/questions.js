import { createSlice } from '@reduxjs/toolkit'

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    value: {},
  },
  reducers: {
    getQuestions: (state, action) => {
      state.value = action.payload.questions
    },
  },
})

export const { getQuestions } = questionsSlice.actions

export default questionsSlice.reducer
