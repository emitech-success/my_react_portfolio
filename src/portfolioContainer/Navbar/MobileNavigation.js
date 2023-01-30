import React, { useState } from "react";
import { NavLinks } from "./NavLinks";
import classes from "./Navbar.module.css";
import { CgMenuRound} from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";

export const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const hamburgerClose =
  <CgCloseO
    className={classes.Hamburger}
    size="40px"
    color="white"
    onClick={() => setOpen(!open)}
  />
const hamburgerOpen =  <CgMenuRound
    className={classes.Hamburger}
    size="40px"
    color="white"
    onClick={() => setOpen(!open)}
  />

  const closeMobileMenu = ()=> setOpen(false)

  return (
    <>
      <nav className={classes.MobileNavigation}>
       
        {open? hamburgerClose: hamburgerOpen}
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
      </nav>
    </>
  );
};
