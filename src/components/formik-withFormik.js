import React from "react";
import { withFormik } from "formik";

function Form(props) {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="shadow border w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        name="name"
        placeholder="name"
      />
      {errors.name && touched.name && (
        <div id="feedback" className="text-red-500 text-xs italic">
          {errors.name}
        </div>
      )}
      <button
        type="submit"
        className="my-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Submit
      </button>
    </form>
  );
}

const FormikWithFormik = withFormik({
  validateOnBlur: true,
  mapPropsToStatus: (props) => {
    console.log(props);
  },
  mapPropsToValues: () => {
    console.log("v");

    return {
      name: "",
    };
  },

  // Custom sync validation
  validate: (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm",
})(Form);

export default FormikWithFormik;
