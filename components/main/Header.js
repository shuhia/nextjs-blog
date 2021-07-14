import React from "react";
import Navbar from "./Navbar";

const Header = (props) => {
  return (
    <>
      <Navbar></Navbar>
      {props.children}
    </>
  );
};
export default Header;
