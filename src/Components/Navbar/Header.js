import React from "react";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import "./Header.css";
import Searchbar from "../Searchbar/Searchbar";

const Header = () => {
  return (
    <nav className="navbar">
      <Logo />
      <Searchbar placeholder="Search a song of your choice"/>
      <Button text="Give Feedback" />
    </nav>
  );
};

export default Header;
