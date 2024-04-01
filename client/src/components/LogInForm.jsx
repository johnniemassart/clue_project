import React, { useState } from "react";
import { useDispatch } from "react-redux";

const LogInForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    setUsername("");
    setPassword("");
  };
  return (
    <form className="input_form" onSubmit={handleSubmit}>
      <label>Enter Username:</label>
      <input
        type="text"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <label>Enter Password:</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button>Log In</button>
    </form>
  );
};

export default LogInForm;
