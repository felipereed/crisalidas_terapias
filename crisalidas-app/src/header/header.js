import React from "react";
import './header.css'

function Header() {
  return (
    <div className="header">
      <div>
        <img className="header-logo" src="./logocrisalidas.png" alt="logo" />
      </div>
      <div className="header-links">
        <a href="">SOBRE MIM</a>
        <a href="">SERVIÇOS</a>
        <a href="">BLOG</a>
        <a href="">CONTATO</a>
      </div>
    </div>
  );
}

export default Header;