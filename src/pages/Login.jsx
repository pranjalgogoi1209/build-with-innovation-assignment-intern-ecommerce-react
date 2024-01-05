import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Already login users cann't access login page
  useEffect(() => {
    if (localStorage.getItem("userDetails")) {
      navigate("/");
    }
  }, [navigate]);

  // post request
  const handleSubmit = e => {
    e.preventDefault();
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          console.log("login again");
          alert("wrong username & password");
        } else {
          console.log("successfully login");
          localStorage.setItem("userDetails", JSON.stringify(data));
          navigate("/");
        }
      });
  };

  return (
    <LoginWrapper>
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <input
            type="text"
            onChange={e => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          <input
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  .Login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    form {
      background-color: #d4dbeb;
      color: #212121;
      border-radius: 1vw;
      border: 1px solid white;
      display: flex;
      flex-direction: column;
      gap: 2vw;
      padding: 2vw;
      margin-top: 10vw;
      input,
      button {
        width: 30vw;
        border: none;
        outline: none;
        padding: 1.2vw;
        border-radius: 1vw;
        font-size: 1.3vw;
        font-weight: bold;
      }
      input:hover,
      button:hover {
        box-shadow: 0 0 0.5vw #212121;
      }
      button {
        cursor: pointer;
        background-color: #212121;
        color: #f1f1f1;
      }
      button:hover {
        background-color: #d4dbeb;
        color: #212121;
      }
    }
  }
`;
