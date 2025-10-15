// configureStore 함수
// 리듀서를 받아서 스토어를 생성하는 함수
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authslice";
// 인증 리듀서 불러오기
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
