import "./App.css";
import SimpleForm from "./components/simple-form";
import FormikForm from "./components/formik-form";
import FormikFormIn from "./components/formik-form-in";
import FormikWithFormik from "./components/formik-withFormik";
import FormikWithFileInput from "./components/formik-withfile";

import Todo from "./containers/Todo";
import Demo from "./Demo";

function App() {
  return (
    <>
      {/* <SimpleForm /> */}
      {/* <FormikForm /> */}
      {/* <FormikWithFormik /> */}
      {/* <FormikFormIn /> */}
      {/* <FormikWithFileInput /> */}
      <Demo />
      {/* <Todo /> */}
    </>
  );
}

export default App;
