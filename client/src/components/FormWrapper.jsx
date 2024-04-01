import React from "react";

const FormWrapper = ({ children }) => {
  return (
    <div className="input_wrapper">
      <div className="input_content">{children}</div>
    </div>
  );
};

export default FormWrapper;
