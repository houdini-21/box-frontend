import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "@/Store";
import { addListBox, editListBox, removeListBox } from "@/Store/Form/formSlice";

export function useStep2Logic() {
  const dispatch = useAppDispatch();
  const listBox = useAppSelector((state) => state.form.form.listBox);

  const updateListBox = (index: number, data: any) => {
    dispatch(editListBox({ index, data }));
  };

  const formik = useFormik({
    initialValues: {
      weight: 0,
      content: "",
      length: 0,
      height: 0,
      width: 0,
    },
    onSubmit: (values) => {
      dispatch(addListBox(values));
      formik.resetForm();
    },
  });

  const handleRemoveListBox = (index: number) => {
    dispatch(removeListBox(index));
  };

  return {
    listBox,
    formik,
    updateListBox,
    handleRemoveListBox,
  };
}
