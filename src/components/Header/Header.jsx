import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Drawer from "../NavigationDrawer"; // Ensure this component is working properly
import './Header.css';
import MenuCustomList from "../Menu";
import { CDropdown, CDropdownToggle,CDropdownDivider, CDropdownMenu, CDropdownItem } from '@coreui/react';

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems1 = [
    { title: "Home", description: "Go to homepage" },
    { title: "About Us", description: "Learn more about us" },
    { title: "Contact", description: "Get in touch with us" }
  ];

  // Detect scroll and apply background and text color changes
 useEffect(() => {
  const links = document.querySelectorAll('.navbar .nav-link');
  const buttons = document.querySelectorAll('.navbar ul button');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
      links.forEach(link => link.classList.add('text-white'));
      buttons.forEach(btn => btn.classList.add('text-white'));
    } else {
      links.forEach(link => link.classList.remove('text-white', 'bg-black'));
      buttons.forEach(btn => btn.classList.remove('text-white', 'bg-black'));
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'bg-black' : ''}`}>
      <div className="container hdr">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="../Uberms-logo.png" alt="Andeo" className="logo" />
        </Link>

        {/* Hamburger Menu Button for mobile view */}
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
            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown> 
             </li>
            <li className="nav-item">
              <MenuCustomList buttonText="PAGES" className=" mn" menuItems={menuItems1} />
            </li>
            <li className="nav-item">
              <MenuCustomList buttonText="SERVICE" className=" mn" menuItems={menuItems1} />
            </li>
            <li className="nav-item">
              <MenuCustomList buttonText="BLOG" className=" mn" menuItems={menuItems1} />
            </li>
          </ul>

          <ul className="navbar-nav second">
            <li className="nav-item">
              <button
                onClick={toggleDrawer(true)}
                className="text-white sv bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                <img src="/grid.svg" alt="menu-icon" />
              </button>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Contact US
              </Link>
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
