import { createSlice } from "@reduxjs/toolkit";

// Part 1: 初始狀態
const initialState = {
  comments: [],  
};
const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment: (state,action) => {state.comments.push(action.payload);},
    },
});

// Part 3: 匯出 selector（給元件用來抓 state）
export const {addComment} = commentSlice.actions;


// Part 5: 匯出 reducer（給 store 使用）
export default commentSlice.reducer;
