import React from "react";
import "../css/Welcome.css";
import { useSelector } from "react-redux";

const Welcome = () => {
  const username = useSelector((state) => state.user.userInfo.username);
  return <div className="welcome_wrapper">Welcome {username}</div>;
};

export default Welcome;
