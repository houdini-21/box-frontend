import { ItemList } from "./interfaces";

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

export default getItems;
