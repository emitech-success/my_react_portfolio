import React from "react";

export const NavLinks = (props) => {
  return (
    <>
      <ul className="nav-menu">
        <li className="nav-item" 
        onClick={()=> props.isMobile && props.closeMobileMenu()}
        >
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item"
        onClick={()=> props.isMobile && props.closeMobileMenu()}>
          <a href="./#about" className="nav-link">
            About Me
          </a>
        </li>
        <li className="nav-item"
        onClick={()=> props.isMobile && props.closeMobileMenu()}
        >
          <a href="./#skill" className="nav-link">
            Skill
          </a>
        </li>
        <li className="nav-item"
        onClick={()=> props.isMobile && props.closeMobileMenu()}
        >
          <a href="./#work" className="nav-link">
            Work
          </a>
        </li>
        <li className="nav-item"
        onClick={()=> props.isMobile && props.closeMobileMenu()}
        >
          <a href="./#contact-form" className="nav-link">
            Contact Us
          </a>
        </li>
      </ul>
    </>
  );
};
