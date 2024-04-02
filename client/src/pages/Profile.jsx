import React from "react";
import "../css/Profile.css";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectAuth } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username, character } = useSelector(selectAuth);
  const handleLogout = () => {
    dispatch(logout());
    console.log("log out successful");
    navigate("/login");
  };
  return (
    <div className="profile_wrapper">
      <div>
        Profile:
        <p>username: {username}</p>
        <p>character: {character}</p>
      </div>
      <button onClick={handleLogout}>log out</button>
    </div>
  );
};

export default Profile;
