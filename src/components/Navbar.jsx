import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Logout from "./Logout";

export default function Navbar() {
  const location = useLocation();
  console.log(location);
  return (
    location.pathname !== "/login" && (
      <NavbarWrapper>
        <div className="Navbar">
          <Link to={"/"}>
            <div className="logo">
              <img
                src="https://media.licdn.com/dms/image/D4D0BAQFkRXLKcwF7KQ/company-logo_200_200/0/1681210220454?e=1712793600&v=beta&t=i0P-AJXNBrYWpagkaSMPf6Mk7w_8xIDFhQrPOESsx2M"
                alt="logo"
              />
            </div>
          </Link>

          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/about"}>
              <li>About</li>
            </Link>
            <Link to={"/cart"}>
              <li>Cart</li>
            </Link>

            <Link to={"/profile"}>
              <li>Profile</li>
            </Link>

            <Logout />
          </ul>
        </div>
      </NavbarWrapper>
    )
  );
}

const NavbarWrapper = styled.header`
  .Navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2vw;
    .logo {
      img {
        height: 7vw;
        width: 7vw;
        border-radius: 50%;
      }
    }
    ul {
      display: flex;
      align-items: center;
      gap: 10vw;
      a {
        text-decoration: none;
      }
      li {
        font-size: 3vw;
        list-style-type: none;
        color: #f1f1f1;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
