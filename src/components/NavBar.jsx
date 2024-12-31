import React, { useContext } from "react";
import "./navbar.css";
import { LanguageContext } from "../contexts/LanguageContext";

export const NavBar = () => {
  const { text } = useContext(LanguageContext);

  return (
    <div className="nav-bar hidden flex-row justify-between md:block md:py-4">
      <div className="left-divison"></div>
      <div className="right-divison flex flex-row justify-end gap-2 md:gap-4">
        <button className="btn btn-outline nav-link">{text.skills}</button>
        <button className="btn btn-outline btn-ghost nav-link">
          {text.projects}
        </button>
        <button className="btn btn-outline btn-primary nav-button">
          {text.hireMe}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
