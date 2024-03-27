import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userDetails } from "../redux/userSlice";

const UserForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [characters, setCharacters] = useState("");
  useEffect(() => {
    const url = "http://127.0.0.1:8000/characters/";
    const fetchCharacters = async () => {
      const response = await axios.get(url);
      const data = response.data;
      setCharacters(data);
    };
    fetchCharacters();
  }, []);
  const [characterChoice, setCharacterChoice] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(userDetails({ username: username, character: characterChoice }));
    navigate("/welcome");
  };
  return (
    <form className="input_form" onSubmit={handleSubmit}>
      <label>Enter Username:</label>
      <input
        type="text"
        name="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        value={username}
      />
      <div>Select a Character:</div>
      <select
        defaultValue="default"
        onChange={(e) => {
          setCharacterChoice(e.target.value);
        }}
      >
        <option value="default"></option>
        {characters
          ? characters.map((character) => {
              return (
                <option key={character} value={character}>
                  {character}
                </option>
              );
            })
          : null}
      </select>
      <button>JOIN</button>
    </form>
  );
};

export default UserForm;
