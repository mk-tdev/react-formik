import { useEffect } from "react";
import { useFormikContext } from "formik";

// https://javascript.plainenglish.io/how-to-listen-to-formik-onchange-event-in-react-df00c4d09be

function FormListener() {
  const { values } = useFormikContext();

  useEffect(() => {
    console.log("FormObserver::values", values);
  }, [values]);

  return null;
}

export default FormListener;
