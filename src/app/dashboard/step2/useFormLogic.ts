import { useFormik } from "formik";
import { toast } from "react-toastify";
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
      lengthValue: 0,
      height: 0,
      width: 0,
    },
    onSubmit: (values) => {
      if (values.lengthValue <= 0) {
        toast.error("El largo debe ser mayor a 0");
        return;
      }

      if (values.height <= 0) {
        toast.error("El alto debe ser mayor a 0");
        return;
      }

      if (values.width <= 0) {
        toast.error("El ancho debe ser mayor a 0");
        return;
      }

      if (values.weight <= 0) {
        toast.error("El peso debe ser mayor a 0");
        return;
      }

      if (values.content === "") {
        toast.error("El contenido no puede estar vacío");
        return;
      }
      dispatch(
        addListBox({
          ...values,
          length: values.lengthValue,
        })
      );
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
