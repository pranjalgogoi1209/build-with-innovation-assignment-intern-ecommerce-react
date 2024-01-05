import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <LogoutWrapper>
      <div className="Logout">
        <button onClick={handleClick}>Logout</button>
      </div>
    </LogoutWrapper>
  );
}

const LogoutWrapper = styled.div`
  .Logout {
    button {
      border: none;
      outline: none;
      padding: 0.7vw;
      border-radius: 0.5vw;
      cursor: pointer;
    }
  }
`;
