import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Departmentos } from "./interfaces";
import { useAppDispatch, useAppSelector } from "@/Store";
import { updateForm } from "@/Store/Form/formSlice";
import { nxtStep } from "@/Store/Step/stepSlice";
import validationSchema from "./validation";

export const useStep1Logic = () => {
  const [departments, setDepartments] = useState<Departmentos[]>([]);
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.form.form);

  const formikStep1 = useFormik({
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

  const getMunicipality = (departmentId: string) => {
    const departmentSelected = departments.find(
      (dep) => dep.id === departmentId
    );

    if (!departmentSelected) return [];

    return departmentSelected.municipios.map((municipio) => ({
      value: municipio.id_mun,
      label: municipio.nombre,
    }));
  };

  const getDepartment = async () => {
    const department = await fetch(
      "https://api.npoint.io/253f0ee259ef1620a547/departamentos",
      {
        cache: "force-cache",
      }
    )
      .then((res) => res.json())
      .then((res) => res);

    setDepartments(department);
  };

  useEffect(() => {
    getDepartment();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { formikStep1, departments, getMunicipality };
};
