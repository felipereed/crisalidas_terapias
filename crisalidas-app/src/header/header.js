import React from "react";
import Menu from "../menu/menu";
import "./header.css";

function Header({ toggleHandler }) {
  const handleHamburgerToggle = (opened) => {
    toggleHandler(opened);
  };

  return (
    <div className="header">
      <div className="header-menu-container">
        <Menu toggleHandler={handleHamburgerToggle} />
        <img className="butterfly" src="./butterfly.png" alt="" />
      </div>
      <div className="header-logo-container">
        <img className="header-logo" src="./Asset 11.png" alt="logo" />
      </div>
    </div>
  );
}

export default Header;
