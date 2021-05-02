import { configureStore } from '@reduxjs/toolkit'
import authUserSlice from './slices/authUser'
import questionsSlice from './slices/questions'
import usersSlice from './slices/users'

export default configureStore({
  reducer: {
    users: usersSlice,
    questions: questionsSlice,
    authUser: authUserSlice,
  },
})
