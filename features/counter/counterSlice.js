import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += parseInt(action.payload);
    },
    multiplyByAmount: (state, action) => {
      state.value *= parseInt(action.payload);
    },
    resetData: (state) => {
      state.value = 0;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  multiplyByAmount,
  resetData,
} = counterSlice.actions;
export default counterSlice.reducer;
