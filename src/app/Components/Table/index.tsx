import { FaRegTrashAlt } from "react-icons/fa";

interface TableProps {
  id: number;
  nombreCliente: string;
  direccion: string;
  correoElectronico: string;
  telefono: string;
  cantidadBultos: number;
}

interface TablePropsList {
  tableItems: TableProps[];
  // deleteItem: (id: number) => void;
}

const Table = ({ tableItems }: TablePropsList) => {
  return (
    <div className="overflow-x-auto">
      <table className="border-collapse table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Nombre Cliente
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Direccion
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Correo Electronico
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Telefono
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Cantidad de bultos
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {tableItems.map((item: TableProps) => (
            <tr
              key={item.id}
              className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
            >
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static before:content-[attr(data-label)] before:text-gray-500 before:absolute before:left-4 lg:before:content-none">
                <span className="lg:hidden font-bold">Nombre Cliente: </span>
                {item.nombreCliente}
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static before:content-[attr(data-label)] before:text-gray-500 before:absolute before:left-4 lg:before:content-none">
                <span className="lg:hidden font-bold">Direccion: </span>
                {item.direccion}
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static before:content-[attr(data-label)] before:text-gray-500 before:absolute before:left-4 lg:before:content-none">
                <span className="lg:hidden font-bold">
                  Correo Electronico:{" "}
                </span>
                {item.correoElectronico}
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static before:content-[attr(data-label)] before:text-gray-500 before:absolute before:left-4 lg:before:content-none">
                <span className="lg:hidden font-bold">Telefono: </span>
                {item.telefono}
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static before:content-[attr(data-label)] before:text-gray-500 before:absolute before:left-4 lg:before:content-none">
                <span className="lg:hidden font-bold">
                  Cantidad de bultos:{" "}
                </span>
                {item.cantidadBultos}
              </td>

              <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static before:content-[attr(data-label)] before:text-gray-500 before:absolute before:left-4 lg:before:content-none">
                <span className="lg:hidden font-bold">Acciones: </span>
                <button
                  type="button"
                  className="text-red-500 hover:text-red-600 text-xl"
                  // onClick={() => deleteItem(item.id)}
                >
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
