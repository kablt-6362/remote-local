import { createSlice } from "@reduxjs/toolkit";

// 초기 상태 설정
const initialState = {
  count: 0,
};

// 슬라이스 생성
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState, //초기 상태 정의
  // 리듀서와 액션을 정의
  reducers: {
    //상태 counter를 1 증가 시키는 리듀서와 액션 작성
    increment: (state) => {
      // 매개변수 state: 현재 슬라이스에 정의도니 상태를 저장
      /*
      state={count=0,} 즉, {...}객체 자체를 의미한다
      */
      state.count = state.count + 1;
    },
    // 상태 count를 특정 값(외부에서 인자로 전달한)만큼 증가 시키는 리듀서와 액션
    increamentByAmount: (state, action) => {
      // 매개변수 action: 상태를 어떻게 변경할지 정보(무엇을,어떻게,얼마만큼=>payload)를 저장한 객체
      // payload 속성의 값은 문자열, 그래서 숫자형으로 형변환 필요
      state.count = state.count + Number(action.payload);
    },
    //상태 count 를 0으로 만드는 리듀서와 액션코드 작성
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, increamentByAmount, reset } = counterSlice.actions;

export default counterSlice.reducer;
