export interface Municipios {
  id_mun: string;
  nombre: string;
}

export interface Departmentos {
  id: string;
  nombre: string;
  municipios: Municipios[];
}

export interface OptionsProps {
  id: string;
  nombre: string;
}

export interface SelectProps {
  label: string;
  value: string;
}

export interface Step1Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: any;
  departments: OptionsProps[];
  optionsMunicipality: SelectProps[];
}
