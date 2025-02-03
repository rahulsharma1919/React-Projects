import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./slices/CounterSlice";

export const store = configureStore({
  //create global store where all centralised data and store is stored
  reducer: {
    counter: CounterSlice, //key name will be equal to the name given is slice
  },
});
