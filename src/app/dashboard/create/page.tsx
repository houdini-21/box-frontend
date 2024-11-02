"use client";
import { MdLocationOn } from "react-icons/md";
import TextField from "@/app/Components/TextField";
import SelectField from "@/app/Components/SelectField";
import DateField from "@/app/Components/DateField";
import PhoneField from "@/app/Components/PhoneField";
import MultipleTextField from "@/app/Components/MultipleTextField";

export default function CreatePage() {
  return (
    <div>
      <h1>Create Page</h1>
      <TextField
        label="Name"
        type="text"
        placeholder="Enter your name"
        onChange={(e) => console.log(e)}
        error={false}
        errorMessage="This is helper text"
        nameInput="name"
      />

      <TextField
        label="Name"
        type="text"
        placeholder="Enter your name"
        onChange={(e) => console.log(e)}
        error={false}
        errorMessage="This is helper text"
        nameInput="name"
        icon={<MdLocationOn className="text-gray-500 text-3xl" />}
        withIcon
      />

      <SelectField
        nameInput="categoria"
        label="Categoría"
        options={[
          { value: "opcion1", label: "Opción 1" },
          { value: "opcion2", label: "Opción 2" },
          { value: "opcion3", label: "Opción 3" },
        ]}
        onChange={(e) => console.log(e)}
        error={false}
        errorMessage="Debe seleccionar una opción"
      />

      <DateField
        label="Fecha de nacimiento"
        selectedDate={new Date()}
        onChange={(date) => console.log(date)}
        error={false}
        errorMessage="Debe seleccionar una fecha"
      />

      <PhoneField
        label="Teléfono"
        value=""
        onChange={(e) => console.log(e)}
        error={false}
        errorMessage="Debe ingresar un número de teléfono"
      />

      <div className="w-3/12">
        <MultipleTextField
          items={[
            {
              label: "Name",
              nameInput: "name",
              placeholder: "Enter your name",
              onChange: (value) => console.log(value),
              type: "text",
              measure: "cm",
            },
            {
              label: "Name 2",
              nameInput: "name",
              placeholder: "Enter your name",
              onChange: (value) => console.log(value),
              type: "text",
              measure: "cm",
            },
            {
              label: "Name 3",
              nameInput: "name",
              placeholder: "Enter your name",
              onChange: (value) => console.log(value),
              type: "text",
              measure: "cm",
            },
          ]}
        />
      </div>
    </div>
  );
}
