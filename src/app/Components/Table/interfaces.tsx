export interface ButtonDeleteProps {
  id: number;
}

export interface TableProps {
  id: number;
  nombreCliente: string;
  direccion: string;
  correoElectronico: string;
  telefono: string;
  cantidadBultos: number;
}

export interface TablePropsList {
  tableItems: TableProps[];
}
