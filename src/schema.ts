import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string()
    .min(5, "Nome precisa ter no mínimo 5 caracteres")
    .required("Campo Obrigatório"),
  email: Yup.string().email().required("Campo Obrigatório"),
});
