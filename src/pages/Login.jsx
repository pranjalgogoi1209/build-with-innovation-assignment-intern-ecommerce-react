import React, { useState } from "react";
import styled from "styled-components";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(username, password);
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
        console.log(data);
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
