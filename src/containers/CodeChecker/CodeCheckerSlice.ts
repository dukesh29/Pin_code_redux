import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface StartState {
  accessGranted: boolean;
  clicked: boolean;
  code: string;
  input: string;
  password: string;
}

const initialState: StartState = {
  accessGranted: false,
  clicked: false,
  code: "2904",
  input: "",
  password: "",
};

export const ValidatorSlice = createSlice({
  name: 'codeChecker',
  initialState,
  reducers: {
    AddDigit: (state, action: PayloadAction<string>) => {
      state.clicked = false;
      if (state.input.length < 4) {
        state.input += action.payload;
        state.password += "*";
      }
    },

    RemoveDigit: (state) => {
      if (state.input.length > 0) {
        state.input = state.input.substring(0, state.input.length - 1);
        state.password = state.password.substring(0, state.password.length - 1);
      }
    },

    ResetAll: (state) => {
      state.password = "";
      state.input = "";
      state.accessGranted = false;
      state.clicked = false;
    },

    CheckCode: (state) => {
      state.clicked = true;
      if (state.input === state.code) {
        state.accessGranted = true;
        state.input = "";
        state.password = "";
      } else {
        state.input = "";
        state.password = "";
      }
    },

    ResetCheck: (state) => {
      if (state.accessGranted) {
        state.accessGranted = false;
      }
      state.clicked = false;
    },
  }
});

export const ValidatorReducer = ValidatorSlice.reducer;
export const {AddDigit, ResetAll, RemoveDigit, CheckCode, ResetCheck} = ValidatorSlice.actions;