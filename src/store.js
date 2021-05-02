import { configureStore } from '@reduxjs/toolkit'
import questionsSlice from './slices/questions'
import usersSlice from './slices/users'

export default configureStore({
  reducer: {
    users: usersSlice,
    questions: questionsSlice,
  },
})
