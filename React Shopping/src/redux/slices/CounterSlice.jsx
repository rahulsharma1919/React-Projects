import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //   define functionality or functions
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;
