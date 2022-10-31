import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  socketData: []
}

const socketSlice = createSlice({
  name: 'socketSlice',
  initialState,
  reducers: {
    getSocketData(state,action) {
        state.socketData = action.payload
    }
  }
})

export const { getSocketData} = socketSlice.actions
export default socketSlice.reducer