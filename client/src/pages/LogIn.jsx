import React from "react";
import "../css/LogIn.css";
import FormWrapper from "../components/FormWrapper";
import LogInForm from "../components/LogInForm";

const LogIn = () => {
  return (
    <div className="wrapper">
      <FormWrapper>
        <h2 className="log_in_msg">Log In</h2>
        <LogInForm />
      </FormWrapper>
    </div>
  );
};

export default LogIn;
