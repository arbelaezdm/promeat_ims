import * as yup from "yup";

export const SingupValidation = yup.object({
  firstName: yup
    .string()
    .min(3)
    .required("El nombre debe tener minimo 3 caracteres"),
  lastName: yup
    .string()
    .min(3)
    .required("El apellido debe tener minimo 3 caracteres"),
  email: yup
    .string()
    .required("Por favor ingrese un email")
    .email("Por favor ingrese un email valido"),
  password: yup
    .string()
    .min(4, "La contraseña debe tener minimo 4 caracteres ")
    .max(10)
    .required("Debes ingresar una contraseña"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "La contraseña no coincide")
    .required("Ingresa de nuevo la contraseña"),
  userCategory: yup.string().required("Debes seleccionar un tipo de usuario"),
});
