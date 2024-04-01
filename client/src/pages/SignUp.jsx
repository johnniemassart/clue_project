import React from "react";
import "../css/SignUp.css";
import FormWrapper from "../components/FormWrapper";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <div className="wrapper">
      <FormWrapper>
        <h2 className="sign_up_msg">Sign Up</h2>
        <SignUpForm />
      </FormWrapper>
    </div>
  );
};

export default SignUp;
