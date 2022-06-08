import { Formik, Field, Form, ErrorMessage, FormikValues } from "formik";
import schema from "./schema";

function App() {
  function onSubmit(values: FormikValues, actions: any) {
    console.log("submit", values);
  }

  return (
    <div className="App">
      <Formik
        onSubmit={onSubmit}
        validationSchema={schema}
        //validateOnMount => mostrar o erro independente se teve interação com o campo obrigatório
        initialValues={{
          name: "",
          email: "",
        }}
        render={({ values, errors, touched, isValid }) => (
          <Form>
            <div>
              <label>Nome</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" />
            </div>
            <div>
              <label>Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" />
            </div>
            <button type="submit" disabled={!isValid}>
              Enviar
            </button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;
