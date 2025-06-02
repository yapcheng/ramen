import { configureStore } from '@reduxjs/toolkit';
import commentReducer from './commentSlice';
// Part2: Combine Reducers and Create a Store
export const store = configureStore({
reducer: {
comment: commentReducer,
},
});
export default store;