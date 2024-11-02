"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "@/app/Components/Button";
import ButtonLink from "@/app/Components/ButtonLink";
import ListBoxForm from "./ListBoxForm";
import ListBoxItem from "./ListBoxItem";
import { useStep2Logic } from "./useFormLogic";

export default function Step2Page() {
  const { listBox, formik, updateListBox, handleRemoveListBox } =
    useStep2Logic();

  return (
    <div className="w-full flex flex-col lg:p-4 p-0">
      <ListBoxForm formik={formik} />

      <div className="flex flex-col lg:items-start items-center lg:mb-4 mb-2">
        <label className="text-md text-gray-500 font-medium mb-1">
          Lista de bultos
        </label>

        {listBox && listBox.length > 0 ? (
          listBox.map((item, index) => (
            <ListBoxItem
              key={index}
              item={item}
              index={index}
              updateListBox={updateListBox}
              handleRemoveListBox={handleRemoveListBox}
            />
          ))
        ) : (
          <div className="w-full flex justify-center items-center bg-gray-100 p-4 rounded border border-dotted border-gray-300">
            <p className="text-gray-500">No hay bultos agregados</p>
          </div>
        )}
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
