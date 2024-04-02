import React from "react";
import "../css/Profile.css";
import { useSelector } from "react-redux";

const Profile = () => {
  const username = useSelector((state) => state.auth.username);
  const character = useSelector((state) => state.auth.character);
  return (
    <div className="profile_wrapper">
      <div>
        {" "}
        Profile:
        <p>username: {username}</p>
        <p>character: {character}</p>
      </div>
    </div>
  );
};

export default Profile;
