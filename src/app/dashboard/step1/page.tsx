"use client";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "@/Store";
import { updateForm } from "@/Store/Form/formSlice";
import { MdLocationOn } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import TextField from "@/app/Components/TextField";
import SelectField from "@/app/Components/SelectField";
import DateField from "@/app/Components/DateField";
import PhoneField from "@/app/Components/PhoneField";
import Button from "@/app/Components/Button";

export default function Step1Page() {
  const router = useRouter();
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
      department: form.department || "",
      municipality: form.municipality || "",
      zone: form.zone || "",
      instructions: form.instructions || "",
    },
    onSubmit: (values) => {
      dispatch(
        updateForm({
          ...values,
          date: values.date.toISOString(),
        })
      );

      router.push("/dashboard/step2");
    },
  });

  return (
    <div className="w-full flex flex-col lg:p-4 p-0">
      <div className="w-full flex flex-row lg:flex-nowrap flex-wrap gap-x-6 mt-4">
        <TextField
          label="📍 Dirección de recolección"
          type="text"
          placeholder="Ingrese la dirección de recolección"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={false}
          errorMessage="This is helper text"
          nameInput="address"
          className="lg:w-9/12 w-full"
        />

        <DateField
          label="📅 Fecha Programada"
          selectedDate={formik.values.date}
          onChange={(date) => formik.setFieldValue("date", date)}
          error={false}
          errorMessage="Debe seleccionar una fecha"
          className="lg:w-3/12 w-full"
        />
      </div>

      <div className="w-full flex flex-row lg:flex-nowrap flex-wrap gap-x-6 mt-4">
        <TextField
          label="Nombres"
          type="text"
          placeholder="Ingrese los nombres"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={false}
          errorMessage="This is helper text"
          nameInput="firstName"
          className="lg:w-4/12 w-full"
        />

        <TextField
          label="Apellidos"
          type="text"
          placeholder="Ingrese los apellidos"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={false}
          errorMessage="This is helper text"
          nameInput="lastName"
          className="lg:w-4/12 w-full"
        />

        <TextField
          label="Correo Electrónico"
          type="email"
          placeholder="Ingrese el correo electrónico"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={false}
          errorMessage="This is helper text"
          nameInput="email"
          className="lg:w-4/12 w-full"
        />
      </div>
      <div className="w-full flex flex-row lg:flex-nowrap flex-wrap gap-x-6 mt-4">
        <PhoneField
          label="Teléfono"
          value={formik.values.phone}
          onChange={(e) => formik.setFieldValue("phone", e)}
          error={false}
          errorMessage="Debe ingresar un número de teléfono"
          className="lg:w-4/12 w-full"
        />

        <TextField
          label="Dirección del destinatario"
          type="text"
          placeholder="Ingrese la dirección del destinatario"
          value={formik.values.recipientAddress}
          onChange={formik.handleChange}
          error={false}
          errorMessage="This is helper text"
          nameInput="recipientAddress"
          icon={<MdLocationOn className="text-gray-500 text-3xl" />}
          withIcon
          className="lg:w-8/12 w-full"
        />
      </div>
      <div className="w-full flex flex-row lg:flex-nowrap flex-wrap gap-x-6 mt-4">
        <SelectField
          nameInput="departamento"
          label="Departamento"
          options={[
            { value: "opcion1", label: "Opción 1" },
            { value: "opcion2", label: "Opción 2" },
            { value: "opcion3", label: "Opción 3" },
          ]}
          value={formik.values.department}
          onChange={(e) => formik.setFieldValue("department", e)}
          error={false}
          errorMessage="Debe seleccionar una opción"
          className="lg:w-4/12 w-full"
        />
        <SelectField
          nameInput="municipio"
          label="Municipio"
          options={[
            { value: "opcion1", label: "Opción 1" },
            { value: "opcion2", label: "Opción 2" },
            { value: "opcion3", label: "Opción 3" },
          ]}
          value={formik.values.municipality}
          onChange={(e) => formik.setFieldValue("municipality", e)}
          error={false}
          errorMessage="Debe seleccionar una opción"
          className="lg:w-4/12 w-full"
        />
        <TextField
          label="Punto de Referencia"
          type="text"
          placeholder="Ingrese un punto de referencia"
          value={formik.values.zone}
          onChange={formik.handleChange}
          error={false}
          errorMessage="This is helper text"
          nameInput="zone"
          className="lg:w-4/12 w-full"
        />
      </div>
      <div className="w-full flex flex-row gap-x-6 mt-4">
        <TextField
          label="Indicaciones"
          type="text"
          placeholder="Ingrese las indicaciones"
          value={formik.values.instructions}
          onChange={formik.handleChange}
          error={false}
          errorMessage="This is helper text"
          nameInput="instructions"
          className="w-full"
        />
      </div>

      <Button
        text="Siguiente"
        color="bg-blue-500"
        icon={<FaArrowRight className="w-5 h-5" />}
        iconDirection="right"
        onClick={() => formik.handleSubmit()}
        loading={false}
        className="lg:w-1/12 w-full mt-12 lg:self-end"
      />
    </div>
  );
}
