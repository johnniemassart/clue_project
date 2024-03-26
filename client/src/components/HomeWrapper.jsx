import React from "react";
import UserForm from "./UserForm";

const HomeWrapper = () => {
  return (
    <div className="input_wrapper">
      <div className="input_content">
        <h2 className="input_welcome">Welcome to Clue-Less</h2>
        <UserForm />
      </div>
    </div>
  );
};

export default HomeWrapper;
