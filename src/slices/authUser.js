import { createSlice } from '@reduxjs/toolkit'

export const authUserSlice = createSlice({
  name: 'authUser',
  initialState: {
    value: '',
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.value = action.payload
    },
    removeAuthUser: (state) => {
      state.value = ''
    },
  },
})

export const { setAuthUser, removeAuthUser } = authUserSlice.actions
export default authUserSlice.reducer
