import { withFormik, FormikProps } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  title?: string;
}

interface MyFormProps {
  initialEmail?: string;
  initialPassword?: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    title,
  } = props;

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
        </div>

        <button
          type="submit"
          disabled={
            isSubmitting ||
            !!(errors.email && touched.email) ||
            !!(errors.password && touched.password)
          }
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

const OtherApp = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || "",
    password: props.initialPassword || "",
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
    password: Yup.string()
      .length(8, "É MAIOR QUE 8")
      .required("Password is required"),
  }),

  handleSubmit(
    { email, password }: FormValues,
    { props, setSubmitting, setErrors }
  ) {
    console.log(email, password);
  },
})(InnerForm);

export default OtherApp;
