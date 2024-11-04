"use client";
import { FaPlus } from "react-icons/fa6";
import Table from "@/app/Components/Table";
import ButtonLink from "@/app/Components/ButtonLink";
import Title from "../form/Components/Title";

const tableItems = [
  {
    id: 1,
    nombreCliente: "Juan Perez",
    direccion: "Calle 123",
    correoElectronico: "juanperez@gmail.com",
    telefono: "123456789",
    cantidadBultos: 5,
  },
  {
    id: 2,
    nombreCliente: "Pedro Perez",
    direccion: "Calle 456",
    correoElectronico: "pedroperez@gmail.com",
    telefono: "987654321",
    cantidadBultos: 10,
  },
];

const deleteItem = (id: number) => {
  console.log("Item deleted", id);
};

export default function ListPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center lg:p-4 p-0">
      <div className="w-3/4">
        <Title
          title="Lista de Ordenes"
          subTitle={
            <>
              Dale una ventaja competitiva a tu negocio con entregas
              <span className="font-bold"> el mismo día</span> y (Área
              Metropolitana) y
              <span className="font-bold"> el día siguiente </span>a nivel
              nacional.{" "}
            </>
          }
        />

        <div className="w-full bg-white rounded-lg shadow-sm lg:px-10 p-8">
          <div className="flex justify-end mb-8">
            <ButtonLink
              color="bg-blue-500"
              href="/dashboard/form"
              text="Crear Orden"
              icon={<FaPlus className="text-white" />}
            />
          </div>
          <Table tableItems={tableItems} deleteItem={deleteItem} />
        </div>
      </div>
    </div>
  );
}
