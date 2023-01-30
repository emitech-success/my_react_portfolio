import React from "react";
import { NavLinks } from "./NavLinks";
import classes from "./Navbar.module.css"
export const Navigation = () => {
  return (
    <>
      <nav className={classes.Navigation}>
        <NavLinks />
      </nav>
    </>
  );
};
