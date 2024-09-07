import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "./NavigationDrawer"; // Import the Drawer component
import './Header.css';  // Add custom styles if needed
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="bg-black container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="../Uberms-logo.png" alt="Andeo" className="logo" />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav first">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Menu>
                <MenuHandler>
                  <Button>Menu</Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>Menu Item 1</MenuItem>
                  <MenuItem>Menu Item 2</MenuItem>
                  <MenuItem>Menu Item 3</MenuItem>
                </MenuList>
              </Menu>

            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto flex-end">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                ed
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <button
                onClick={toggleDrawer(true)}  // Open the drawer when clicked
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                About Us
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Drawer Component */}
      <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </nav>
  );
};

export default Header;
