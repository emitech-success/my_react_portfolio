import React from 'react'
import { MobileNavigation } from './MobileNavigation'
import { Navigation } from './Navigation'
import classes from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
    <MobileNavigation />
    <Navigation />
    </nav>
  )
}
