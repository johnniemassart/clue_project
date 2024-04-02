import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../redux/AuthApi";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/authSlice";
import { jwtDecode } from "jwt-decode";

const LogInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLoginUserMutation();
  const handleSubmit = async (e) => {
    await e.preventDefault();
    if (username && password) {
      await loginUser({ username, password });
    } else {
      console.log("error occured");
    }
  };
  useEffect(() => {
    if (isLoginSuccess) {
      dispatch(
        setUser({
          username: jwtDecode(loginData.access).username,
          character: jwtDecode(loginData.access).character,
          access: loginData.access,
        })
      );
      setUsername("");
      setPassword("");
      console.log("log in success");
      //   console.log(loginData);
      console.log(jwtDecode(loginData.access));
      console.log("username: " + jwtDecode(loginData.access).username);
      console.log("character: " + jwtDecode(loginData.access).character);
      navigate("/profile");
    }
  }, [isLoginSuccess]);
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
