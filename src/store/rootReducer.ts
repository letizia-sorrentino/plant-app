import { combineReducers } from "@reduxjs/toolkit";
// Import your slices here
import counterReducer from "../features/counterSlice";

const rootReducer = combineReducers({
  // Add your reducers here
  counter: counterReducer,
});

export default rootReducer;
