import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StepState {
  step: number;
}

const initialState: StepState = {
  step: 1,
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    nxtStep: (state) => {
      state.step += 1;
    },

    prvStep: (state) => {
      state.step -= 1;
    },

    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },

    resetStep: (state) => {
      state.step = 1;
    },
  },
});

export const { nxtStep, prvStep, setStep, resetStep } = stepSlice.actions;

export default stepSlice.reducer;
