import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface StartState {
  accessGranted: boolean;
  clicked: boolean;
  code: string;
  input: string;
}

const initialState: StartState = {
  accessGranted: false,
  clicked: false,
  code: "2904",
  input: "",
};

export const ValidatorSlice = createSlice({
  name: 'codeChecker',
  initialState,
  reducers: {
    AddDigit: (state, action: PayloadAction<string>) => {
      state.clicked = false;
      if (state.input.length < 4) {
        state.input += action.payload;
        console.log(state.clicked);
      }
      if (state.input.length > 4) {
        state.input = "";
      }
    },

    RemoveDigit: (state) => {
      if (state.input.length > 0) {
        state.input = state.input.substring(0, state.input.length - 1);
      }
    },

    ResetDigit: (state) => {
      state.input = "";
      state.accessGranted = false;
      state.clicked = false;
    },

    CheckCode: (state) => {
      state.clicked = true;
      if (state.input === state.code) {
        state.accessGranted = true;
        state.input = "";
      } else {
        state.input = "";
      }
    },
  }
});

export const ValidatorReducer = ValidatorSlice.reducer;
export const {AddDigit, ResetDigit, RemoveDigit, CheckCode} = ValidatorSlice.actions;