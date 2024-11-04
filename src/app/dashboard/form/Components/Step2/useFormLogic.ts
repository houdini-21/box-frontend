import { useState, useCallback } from "react";
import { debounce } from "lodash";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { ItemListProps } from "./interfaces";
import { useAppDispatch, useAppSelector } from "@/Store";
import { addListBox, editListBox, removeListBox } from "@/Store/Form/formSlice";

export function useStep2Logic() {
  const dispatch = useAppDispatch();
  const listBox = useAppSelector((state) => state.form.form.listBox);

  const [productsList, setProductsList] = useState<ItemListProps[]>(
    listBox || []
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedUpdate = useCallback(
    debounce((index: number, data: ItemListProps) => {
      dispatch(editListBox({ index, data }));
    }, 5000),
    []
  );

  const updateListBox = (index: number, data: ItemListProps) => {
    if (data.lengthValue <= 0) {
      toast.error("El largo debe ser mayor a 0");
      return;
    }

    if (data.height <= 0) {
      toast.error("El alto debe ser mayor a 0");
      return;
    }

    if (data.width <= 0) {
      toast.error("El ancho debe ser mayor a 0");
      return;
    }

    if (data.weight <= 0) {
      toast.error("El peso debe ser mayor a 0");
      return;
    }

    if (data.content === "") {
      toast.error("El contenido no puede estar vacío");
      return;
    }

    debouncedUpdate(index, data);
    setProductsList((prev) => {
      const newList = [...prev];
      newList[index] = data;
      return newList;
    });
  };

  const formikStep2 = useFormik({
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

      setProductsList([...productsList, values]);

      dispatch(addListBox(values));

      formikStep2.resetForm();
    },
  });

  const handleRemoveListBox = (index: number) => {
    setProductsList((prev) => {
      const newList = [...prev];
      newList.splice(index, 1);
      return newList;
    });

    dispatch(removeListBox(index));
  };

  return {
    listBox,
    formikStep2,
    updateListBox,
    handleRemoveListBox,
    productsList,
  };
}
