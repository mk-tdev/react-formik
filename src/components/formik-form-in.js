import React from "react";
import { Formik, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import TextErrorMessage from "./textErrorMessage";

const formValidationScheme = Yup.object({
  firstName: Yup.string()
    .max(10, "Must be 10 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(10, "Must be 10 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  address: Yup.string().required("Required"),
  social: Yup.object().shape({
    twitter: Yup.string()
      .required("Required")
      .max(15, "Must be 15 characters or less"),
    facebook: Yup.string()
      .required("Required")
      .max(15, "Must be 15 characters or less"),
  }),
  // phoneNumbers: Yup.array().of(
  //   Yup.number().required("Required").max(10, "Must be 10 digits or less")
  // ),
});

function FormikFormIn() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    social: {
      twitter: "",
      facebook: "",
    },
    phoneNumbers: ["", ""],
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
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className={`shadow border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    touched.lastName && errors.lastName && "border-red-500"
                  }`}
                />

                {/* <ErrorMessage name="lastName" >
                  {(msg) => <TextErrorMessage>{msg}</TextErrorMessage>}
                </ErrorMessage> */}

                <ErrorMessage
                  name="lastName"
                  component={TextErrorMessage}
                  className="text-red-500 text-xs italic"
                />
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

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <Field name="address">
                  {({ field, meta }) => {
                    return (
                      <div>
                        <input
                          className="shadow border w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                          id="address"
                          type="text"
                          placeholder="Address"
                          {...field}
                        />
                        {meta.touched && meta.error ? (
                          <p className="text-red-500 text-xs italic">
                            {meta.error}
                          </p>
                        ) : null}
                      </div>
                    );
                  }}
                </Field>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="twitter"
                >
                  Twitter
                </label>
                <Field
                  type="text"
                  name="social.twitter"
                  placeholder="Twitter"
                  className={`shadow border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    touched.social?.twitter &&
                    errors.social?.twitter &&
                    "border-red-500"
                  }`}
                />
                <ErrorMessage
                  name="social.twitter"
                  component="p"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="facebook"
                >
                  Facebook
                </label>
                <Field
                  type="text"
                  name="social.facebook"
                  placeholder="Facebook"
                  className={`shadow border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    touched.social?.facebook &&
                    errors.social?.facebook &&
                    "border-red-500"
                  }`}
                />
                <ErrorMessage
                  name="social.facebook"
                  component="p"
                  className="text-red-500 text-xs italic"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="primaryPhone"
                >
                  Primary Phone Number
                </label>
                <Field
                  type="text"
                  name="phoneNumbers[0]"
                  placeholder="Primary Phone Number"
                  className={`shadow border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    touched.phoneNumbers &&
                    touched.phoneNumbers[0] &&
                    errors.phoneNumbers &&
                    errors.phoneNumbers[0] &&
                    "border-red-500"
                  }`}
                />
                {/* <ErrorMessage
                  name="phoneNumbers[0]"
                  component="p"
                  className="text-red-500 text-xs italic"
                /> */}
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="primaryPhone"
                >
                  Secondary Phone Number
                </label>
                <Field
                  type="text"
                  name="phoneNumbers[1]"
                  placeholder="Primary Phone Number"
                  className={`shadow border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    touched.phoneNumbers &&
                    touched.phoneNumbers[0] &&
                    errors.phoneNumbers &&
                    errors.phoneNumbers[0] &&
                    "border-red-500"
                  }`}
                />
                {/* <ErrorMessage
                  name="phoneNumbers[1]"
                  component="p"
                  className="text-red-500 text-xs italic"
                /> */}
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
