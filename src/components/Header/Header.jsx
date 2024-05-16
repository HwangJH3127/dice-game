import React from "react";
import logo from "../../assets/img/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <h1>
      <img src={logo} alt="주사위 로고" />
      <p>주사위 게임</p>
    </h1>
  );
};

export default Header;
