import { FaPlus } from "react-icons/fa6";
import { ItemList } from "./interfaces";
import Table from "@/app/Components/Table";
import ButtonLink from "@/app/Components/ButtonLink";
import Title from "../form/Components/Title";

const getItems = async () => {
  const response = await fetch(
    "https://boxfulbackend.houdini-21.me/form-state-item"
  ).then((res) => res.json());

  const items = response.map((item: ItemList) => ({
    id: item.id,
    nombreCliente: `${item.firstName} ${item.lastName}`,
    direccion: item.address,
    correoElectronico: item.email,
    telefono: item.phone,
    cantidadBultos: item.listBox.length,
  }));

  return items;
};

export default async function ListPage() {
  const tableItems = await getItems();
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
          <Table tableItems={tableItems} />
        </div>
      </div>
    </div>
  );
}
