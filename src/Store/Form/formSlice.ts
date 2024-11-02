import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormStateItem {
  date: Date | string;
  address: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  recipientAddress: string;
  department: string;
  municipality: string;
  zone: string;
  instructions: string;
}

interface FormState {
  form: FormStateItem;
}

const initialState: FormState = {
  form: {
    date: "",
    address: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    recipientAddress: "",
    department: "",
    municipality: "",
    zone: "",
    instructions: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<FormStateItem>) => {
      state.form = action.payload;
    },

    clearForm: (state) => {
      state.form = initialState.form;
    },
  },
});

export const { updateForm, clearForm } = formSlice.actions;

export default formSlice.reducer;
