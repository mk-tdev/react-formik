import React from "react";
import { Formik, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

const FILE_SIZE = 1600 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

function FormikWithFileInput() {
  const formValidationScheme = Yup.object({
    firstName: Yup.string()
      .max(10, "Must be 10 characters or less")
      .required("Required"),
    idProof: Yup.mixed()
      .required("Required")
      .test({
        message: "File size must be less than 1600KB",
        test: (value, context) => {
          console.log({ value, context });
          return value && value.size <= FILE_SIZE;
        },
      }),
    // .test("fileFormat", "Unsupported Format", (value) => {
    //   return value && SUPPORTED_FORMATS.includes(value.type);
    // })
    // .test("fileSize", "File too large", (value) => {
    //   console.log(value);
    //   console.log(value?.size);
    //   console.log({ FILE_SIZE });
    //   return value && value.size <= FILE_SIZE;
    // }),
  });

  const initialValues = {
    firstName: "",
    idProof: "",
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
            handleSubmit,
            handleReset,
            getFieldProps,
            isValid,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className={`shadow border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    touched.firstName && errors.firstName && "border-red-500"
                  }`}
                />

                <ErrorMessage
                  name="firstName"
                  component="p"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="idProof"
                >
                  ID Proof
                </label>
                <Field
                  name="idProof"
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                />

                <ErrorMessage
                  name="idProof"
                  component="p"
                  className="text-red-500 text-xs italic"
                />
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
              <div>Is Valid: {isValid ? "true" : "false"}</div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormikWithFileInput;
