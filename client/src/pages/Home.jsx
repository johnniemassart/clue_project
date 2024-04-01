import React from "react";
import "../css/Home.css";
import FormWrapper from "../components/FormWrapper";
import LogInSignUp from "../components/LogInSignUp";

const Home = () => {
  return (
    <div className="wrapper">
      <FormWrapper>
        <h2 className="home_welcome">Welcome to Clue-Less</h2>
        <LogInSignUp />
      </FormWrapper>
    </div>
  );
};

export default Home;
