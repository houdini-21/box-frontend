import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectOption {
  label: string;
  value: string;
}

interface FormListBox {
  length: number;
  height: number;
  width: number;
  content: string;
}

interface FormStateItem {
  date: Date | string;
  address: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  recipientAddress: string;
  department: SelectOption;
  municipality: SelectOption;
  zone: string;
  instructions: string;
  listBox?: FormListBox[];
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
    department: {
      label: "",
      value: "",
    },
    municipality: {
      label: "",
      value: "",
    },
    zone: "",
    instructions: "",
    listBox: [],
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

    addListBox: (state, action: PayloadAction<FormListBox>) => {
      state.form.listBox?.push(action.payload);
    },

    removeListBox: (state, action: PayloadAction<number>) => {
      state.form.listBox?.splice(action.payload, 1);
    },

    editListBox: (
      state,
      action: PayloadAction<{ index: number; data: FormListBox }>
    ) => {
      state.form.listBox?.splice(action.payload.index, 1, action.payload.data);
    },
  },
});

export const { updateForm, clearForm } = formSlice.actions;

export default formSlice.reducer;
