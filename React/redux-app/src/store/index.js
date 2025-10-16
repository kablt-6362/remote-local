// configureStore 함수
// 리듀서를 받아서 스토어를 생성하는 함수
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authslice";
// 인증 리듀서 불러오기
import counterReducer from "./counterSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//persist 오류 해결
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authPersistConfig = {
  key: "auth", // 로컬 스토리지 내 속성명(식별자)
  storage: storage, // 어떤 웹 저장소를 사용할것인가? -> 로컬스토리지
  whitelist: ["token"], // 어떤 상태를 저장할것인가? token 상태만 저장
};

// Persist Reducer 생성
// persistReducer: 지속가능한 리듀서를 생성하는 함수
// authPersitConfig: 설정
// authReducer: 원본리듀서
const persisAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: persisAuthReducer,
  },
  // persist 오류 해결. middleware 속성 추가
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// persist 스토어 생성 및 내보내기
export const persistor = persistStore(store);
