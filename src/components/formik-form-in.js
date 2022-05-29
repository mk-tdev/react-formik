import React from "react";
import { Formik } from "formik";

import * as Yup from "yup";

const formValidationScheme = Yup.object({
  firstName: Yup.string()
    .max(10, "Must be 10 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(10, "Must be 10 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

function FormikFormIn() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const onSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2));
  };

  return (
    <div>
      <h2 className="text-2xl">Formik Form</h2>

      <div className="my-3 mx-3">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={formValidationScheme}
          onReset={() => {}}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            getFieldProps,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    touched.firstName && errors.firstName && "border-red-500"
                  }`}
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  {...getFieldProps("firstName")}
                />
                {touched.firstName && errors.firstName ? (
                  <p className="text-red-500 text-xs italic">
                    {errors.firstName}
                  </p>
                ) : null}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="shadow border w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outlin"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  {...getFieldProps("lastName")}
                />
                {touched.lastName && errors.lastName ? (
                  <p className="text-red-500 text-xs italic">
                    {errors.lastName}
                  </p>
                ) : null}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow border w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...getFieldProps("email")}
                />
                {touched.email && errors.email ? (
                  <p className="text-red-500 text-xs italic">{errors.email}</p>
                ) : null}
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>

                <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  type="button"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>

              <div>Values: {JSON.stringify(values, null, 2)}</div>
              <div>Touch: {JSON.stringify(touched, null, 2)}</div>
              <div>Errors: {JSON.stringify(errors, null, 2)}</div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormikFormIn;
