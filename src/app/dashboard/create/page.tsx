"use client";
import { SelectField, TextField } from "@/app/Components";

export default function CreatePage() {
  return (
    <div>
      <h1>Create Page</h1>
      <TextField
        label="Name"
        placeholder="Enter your name"
        onChange={(e) => console.log(e)}
        error={false}
        errorMessage="This is helper text"
      />

      <SelectField
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
    </div>
  );
}
