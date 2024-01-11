import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counterSlice';

const store = configureStore({
  reducer: {
    counterReducerValue: counterReducer,
  },
});

export default store;
