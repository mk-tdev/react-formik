import React from "react";

function TextErrorMessage({ children }) {
  return <div className="text-red-500 text-xs italic">{children}</div>;
}

export default TextErrorMessage;
