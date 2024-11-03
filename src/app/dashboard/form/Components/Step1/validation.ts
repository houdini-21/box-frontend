import * as yup from "yup";

const validationSchema = yup.object().shape({
  address: yup.string().required("Dirección es requerida"),
  firstName: yup.string().required("Nombre es requerido"),
  lastName: yup.string().required("Apellido es requerido"),
  email: yup.string().email("Email inválido").required("Email es requerido"),
  phone: yup.string().required("Teléfono es requerido"),
  recipientAddress: yup
    .string()
    .required("Dirección de destinatario es requerida"),
  department: yup
    .object()
    .shape({
      label: yup
        .string()
        .required("Departamento es requerido")
        .notOneOf([""], "Departamento es requerido"),
      value: yup
        .string()
        .required("Departamento es requerido")
        .notOneOf([""], "Departamento es requerido"),
    })
    .required("Municipio es requerido"),
  municipality: yup
    .object()
    .shape({
      label: yup
        .string()
        .required("Municipio es requerido")
        .notOneOf([""], "Municipio es requerido"),
      value: yup
        .string()
        .required("Municipio es requerido")
        .notOneOf([""], "Municipio es requerido"),
    })
    .required("Municipio es requerido"),
  zone: yup.string().required("El punto de referencia es requerido"),
  instructions: yup.string().required("Instrucciones son requeridas"),
});

export default validationSchema;
