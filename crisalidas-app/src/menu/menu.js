import React, { useState, useEffect } from "react";
import "./menu.css";
import MenuList from "./menu-list.js";

export default function Menu({ toggleHandler }) {
  const [dropdownMenu, updateDropdownMenu] = useState("header-hide-dropdown");
  useEffect(() => {}, []);

  const toggleHamburger = () => {
    if (dropdownMenu === "") {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const openDropdown = () => {
    if (!document.querySelector(".hamburger").classList.contains("is-active")) {
      document.querySelector(".hamburger").classList.add("is-active");
    }
    updateDropdownMenu("");
    toggleHandler(true);
  };

  const closeDropdown = () => {
    updateDropdownMenu("header-hide-dropdown");
    toggleHandler(false);
    if (document.querySelector(".hamburger").classList.contains("is-active")) {
      document.querySelector(".hamburger").classList.remove("is-active");
    }
  };
  return (
    <div className="header-menu">
      <button
        className="hamburger hamburger--spring"
        type="button"
        onClick={toggleHamburger}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div className={`header-dropdown-menu ${dropdownMenu}`}>
        <MenuList closeDropdown={closeDropdown} />
      </div>
    </div>
  );
}
