import { createSlice } from '@reduxjs/toolkit'

export const authUserSlice = createSlice({
  name: 'authUser',
  initialState: {
    value: {},
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.value = action.payload.id
    },
    removeAuthUser: (state, action) => {
      state.value = null
    },
  },
})

export const { setAuthUser, removeAuthUser } = authUserSlice.actions
export default authUserSlice.reducer
