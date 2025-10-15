// configureStore 함수
import { configureStore } from "@reduxjs/toolkit";

// 리듀서를 받아서 스토어를 생성하는 함수
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    // 카운터슬라이스 컴포넌트의 reducers를 counter에 저장?
    counter: counterReducer,
  },
});
