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
        } else {
          console.log("successfully login");
          localStorage.setItem("userDetails", JSON.stringify(data));
          navigate("/");
        }
      });
  };

  return (
    <LoginWrapper>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setUsername(e.target.value)} />
        <input type="password" onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    gap: 2vw;
    padding: 2vw;
    margin-top: 10vw;
  }
`;
