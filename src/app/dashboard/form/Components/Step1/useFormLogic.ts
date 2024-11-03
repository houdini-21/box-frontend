import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "@/Store";
import { updateForm } from "@/Store/Form/formSlice";
import { nxtStep } from "@/Store/Step/stepSlice";
import validationSchema from "./validation";

export const useStep1Logic = () => {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.form.form);

  const formik = useFormik({
    initialValues: {
      date: form.date ? new Date(form.date) : new Date(),
      address: form.address || "",
      firstName: form.firstName || "",
      lastName: form.lastName || "",
      email: form.email || "",
      phone: form.phone || "",
      recipientAddress: form.recipientAddress || "",
      department: form.department || {
        label: "",
        value: "",
      },
      municipality: form.municipality || {
        label: "",
        value: "",
      },
      zone: form.zone || "",
      instructions: form.instructions || "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(
        updateForm({
          ...values,
          date: values.date.toISOString(),
        })
      );

      dispatch(nxtStep());
    },
  });

  return { formik };
};
