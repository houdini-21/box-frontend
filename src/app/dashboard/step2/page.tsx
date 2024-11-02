"use client";
import { useRouter } from "next/navigation";
import { RiBox3Fill } from "react-icons/ri";
import { FaArrowLeft, FaArrowRight, FaTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Button from "@/app/Components/Button";
import ButtonLink from "@/app/Components/ButtonLink";
import MultipleTextField from "@/app/Components/MultipleTextField";
import TextField from "@/app/Components/TextField";

export default function Step2Page() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col lg:p-4 p-0">
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
                    onChange: (value) => console.log(value),
                    type: "text",
                    measure: "cm",
                  },
                  {
                    label: "Alto",
                    nameInput: "height",
                    placeholder: "Ingresa el alto",
                    onChange: (value) => console.log(value),
                    type: "text",
                    measure: "cm",
                  },
                  {
                    label: "Ancho",
                    nameInput: "width",
                    placeholder: "Ingresa el ancho",
                    onChange: (value) => console.log(value),
                    type: "text",
                    measure: "cm",
                  },
                ]}
              />
            </div>
            <TextField
              label="Peso en libras"
              nameInput="weight"
              placeholder="Ingresa el peso"
              onChange={(value) => console.log(value)}
              type="text"
              className="lg:w-1/12 w-full"
              value="0"
              error={false}
              errorMessage="some error"
            />
            <TextField
              label="Contenido"
              nameInput="content"
              placeholder="Ingresa el contenido"
              onChange={(value) => console.log(value)}
              type="text"
              className="lg:w-6/12 w-full"
              value=""
              error={false}
              errorMessage="some error"
            />
          </div>

          <Button
            text="Agregar"
            color="bg-gray-300 text-zinc-500 text-semibold"
            icon={<FaPlus className="text-xl" />}
            iconDirection="right"
            onClick={() => console.log("next")}
            loading={false}
            className="lg:w-1/12 w-full mt-12 lg:self-end"
          />
        </div>
      </div>
      <div className="flex flex-col lg:items-start items-center lg:mb-4 mb-2">
        <label className="text-md text-gray-500 font-medium mb-1">
          Agrega tus bultos
        </label>

        <div className="flex flex-col w-full bg-white p-4 rounded border border-emerald-500">
          <div className="w-full flex flex-row lg:flex-nowrap flex-wrap gap-x-6">
            <TextField
              label="Peso en libras"
              nameInput="weight"
              placeholder="Ingresa el peso"
              onChange={(value) => console.log(value)}
              type="text"
              className="lg:w-1/12 w-full"
              value="0"
              error={false}
              errorMessage="some error"
            />
            <TextField
              label="Contenido"
              nameInput="content"
              placeholder="Ingresa el contenido"
              onChange={(value) => console.log(value)}
              type="text"
              className="lg:w-6/12 w-full"
              value=""
              error={false}
              errorMessage="some error"
            />
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
                    onChange: (value) => console.log(value),
                    type: "text",
                    measure: "cm",
                  },
                  {
                    label: "Alto",
                    nameInput: "height",
                    placeholder: "Ingresa el alto",
                    onChange: (value) => console.log(value),
                    type: "text",
                    measure: "cm",
                  },
                  {
                    label: "Ancho",
                    nameInput: "width",
                    placeholder: "Ingresa el ancho",
                    onChange: (value) => console.log(value),
                    type: "text",
                    measure: "cm",
                  },
                ]}
              />
            </div>
          </div>
          <Button
            justIcon
            color="text-red-500 text-semibold"
            icon={<FaTrashAlt className="text-xl" />}
            iconDirection="right"
            onClick={() => console.log("next")}
            loading={false}
            className="lg:w-16 w-full mt-6 lg:self-end hover:text-white hover:bg-red-500"
          />
        </div>
      </div>
      <div className="w-full flex flex-row justify-between mt-10">
        <ButtonLink
          text="Regresar"
          color="bg-gray-200 text-zinc-500"
          icon={<FaArrowLeft className="text-xl" />}
          iconDirection="left"
          href="/dashboard/step1"
          className="lg:w-1/12 w-full"
        />

        <Button
          text="Enviar"
          color="bg-blue-600"
          icon={<FaArrowRight className="text-xl" />}
          iconDirection="right"
          onClick={() => console.log("next")}
          loading={false}
          className="lg:w-1/12 w-full"
        />
      </div>
    </div>
  );
}
