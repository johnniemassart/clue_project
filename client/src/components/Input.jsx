import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const [username, setUsername] = useState("");
  const [characters, setCharacters] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const url = "http://127.0.0.1:8000/characters/";
    axios.get(url).then((response) => {
      setCharacters(response.data);
    });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, { username, characters });
      navigate("/character");
    } catch (error) {
      console.log(error);
    } finally {
      setUsername("");
    }
  };
  return (
    <>
      <div className="input_wrapper">
        <div className="input_content">
          <h2 className="input_welcome">Welcome to Clue-Less</h2>
          <form className="input_form">
            <label>Enter Username:</label>
            <input
              type="text"
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
            />
            <div>please select character</div>
            <select
              onChange={(e) => {
                console.log(e.target.value);
              }}
              defaultValue="default"
            >
              <option value="default" style={{ textAlign: "center" }}></option>
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
        </div>
      </div>
    </>
  );
};

export default Input;
