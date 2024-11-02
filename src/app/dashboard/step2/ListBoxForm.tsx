import { RiBox3Fill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import MultipleTextField from "@/app/Components/MultipleTextField";
import TextField from "@/app/Components/TextField";
import Button from "@/app/Components/Button";

interface ListBoxFormProps {
  formik: any;
}

const ListBoxForm = ({ formik }: ListBoxFormProps) => {
  console.log("listboxform");
  return (
    <div className="flex flex-col lg:items-start items-center lg:mb-4 mb-2">
      <label className="text-md text-gray-500 font-medium mb-1">
        Agrega tus bultos
      </label>

      <div className="flex flex-col w-full bg-gray-100 p-4 rounded border-2 border-dotted border-gray-300">
        <div className="w-full flex flex-row lg:flex-nowrap flex-wrap gap-x-6">
          <div className="lg:w-5/12 w-full flex items-end">
            <div className="flex items-center h-14 w-10">
              <RiBox3Fill className="text-3xl text-gray-500" />
            </div>
            <MultipleTextField
              items={[
                {
                  label: "Largo",
                  nameInput: "length",
                  placeholder: "Ingresa el largo",
                  onChange: formik.handleChange,
                  type: "number",
                  measure: "cm",
                  inputValue: formik.values.length,
                },
                {
                  label: "Alto",
                  nameInput: "height",
                  placeholder: "Ingresa el alto",
                  onChange: formik.handleChange,
                  type: "number",
                  measure: "cm",
                  inputValue: formik.values.height,
                },
                {
                  label: "Ancho",
                  nameInput: "width",
                  placeholder: "Ingresa el ancho",
                  onChange: formik.handleChange,
                  type: "number",
                  measure: "cm",
                  inputValue: formik.values.width,
                },
              ]}
            />
          </div>
          <TextField
            label="Peso en libras"
            nameInput="weight"
            placeholder="Ingresa el peso"
            onChange={formik.handleChange}
            type="number"
            className="lg:w-1/12 w-full"
            value={formik.values.weight}
            error={false}
            errorMessage="This is helper text"
          />
          <TextField
            label="Contenido"
            nameInput="content"
            placeholder="Ingresa el contenido"
            onChange={formik.handleChange}
            type="text"
            className="lg:w-6/12 w-full"
            value={formik.values.content}
            error={false}
            errorMessage="This is helper text"
          />
        </div>

        <Button
          text="Agregar"
          color="bg-gray-300 text-zinc-500 text-semibold"
          icon={<FaPlus className="text-xl" />}
          iconDirection="right"
          onClick={formik.handleSubmit}
          loading={false}
          className="lg:w-1/12 w-full mt-12 lg:self-end"
        />
      </div>
    </div>
  );
};

export default ListBoxForm;
