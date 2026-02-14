import React from "react";
import "./fu.css";
const Footer = () => {
  let fostyle = {
    position: "relative",
    top: "100vh",
    width: "100%",
    // marginRight: "10px",
    // marginLeft: "10px"
  };
  return (
    <footer className="nm" style={fostyle}>
      <p>Copyright &copy; MyToDoList.com</p>
    </footer>
  );
};

export default Footer;
