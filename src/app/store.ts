import {configureStore} from "@reduxjs/toolkit";
import {ValidatorReducer} from "../containers/CodeChecker/CodeCheckerSlice";

export const store = configureStore({
  reducer: {
    CodeValidator: ValidatorReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;