import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 100
  },
  reducers: {
    changeCounter(state, { payload }: PayloadAction<number>) {
      state.counter = payload
    }
  }
})

export const { changeCounter } = counterSlice.actions
export default counterSlice.reducer
