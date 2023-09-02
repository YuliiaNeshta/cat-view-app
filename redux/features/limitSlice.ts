import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 10,
};

export const counterSlice = createSlice({
  name: 'limits',
  initialState,
  reducers: {
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { setCount } = counterSlice.actions;
export default counterSlice.reducer;
