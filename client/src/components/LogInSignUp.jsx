import React from "react";
import { Link } from "react-router-dom";

const LogInSignUp = () => {
  return (
    <div className="li_su_wrapper">
      <Link to="/login" className="link_btn">
        Log In
      </Link>
      <Link to="/signup" className="link_btn">
        Sign Up
      </Link>
    </div>
  );
};

export default LogInSignUp;
