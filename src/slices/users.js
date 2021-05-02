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
  },
})

export const { getUsers } = usersSlice.actions

export default usersSlice.reducer
