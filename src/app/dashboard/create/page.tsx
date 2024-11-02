"use client";
import { DateField, SelectField, TextField } from "@/app/Components";

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
    </div>
  );
}
