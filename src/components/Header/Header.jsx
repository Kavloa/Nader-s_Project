import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Drawer from "../NavigationDrawer"; // Ensure this component is working properly
import './Header.css';
import HoverDropdown from "../Menu";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: 'Action', href: '#' },
    { label: 'Another action', href: '#' },
    { label: 'Something else here', href: '#' }
  ];

  useEffect(() => {
    const links = document.querySelectorAll('.navbar .nav-link');
    const navbar = document.querySelector('.navbar');
    const buttons = document.querySelectorAll('.nav-link button ');
    const menuIcon = document.querySelector('img[alt="menu-icon"]');
    const LogoIcon = document.querySelector('img[alt="Logo"]');


    const updateMenuIcon = () => {
      const isMobileView = window.innerWidth <= 992;
      const isScrolled = window.scrollY > 50;

      // Check if on root ("/") path
      if (location.pathname === '/') {
        // If not scrolled
        if (!isScrolled) {
          menuIcon.src = '/grid.svg';
          LogoIcon.src = '/nobglogo.png';
        } 
        // If scrolled
        else if (isScrolled) {
          menuIcon.src = '/grid.svg';
          LogoIcon.src = '/Uber(1).png';
        }
      }
      else if (location.pathname === '/Services' ) {
        if (!isScrolled) {
          menuIcon.src = '/grid.svg';
          LogoIcon.src = '/Uber(1).png';
        } 
        // If scrolled
        else if (isScrolled) {
          menuIcon.src = '/grid.svg';
          LogoIcon.src = '/Uber(1).png';
        }  
       }

       else if (location.pathname === '/Blog') {
        if (!isScrolled) {
          menuIcon.src = '/grid2.svg';
          LogoIcon.src = '/nobglogo.png';
        } 
        // If scrolled
        else if (isScrolled) {
          menuIcon.src = '/grid.svg';
          LogoIcon.src = '/Uber(1).png';
        }}
                
    };

    // Add scroll event listener
    window.addEventListener('scroll', updateMenuIcon);
    // Initial check on mount
    updateMenuIcon();

    // Cleanup on component unmount



    const updateNavStyles = () => {
      const pagesConfig = {
        '/Services': {
          scrollStyles: {
            links: 'text-white',
            buttons: 'text-white',
            navbar: ['bg-black'],
          },
          defaultStyles: {
            links: 'text-white',
            buttons: 'text-white',
            navbar: ['bg-transparent'],
          },
        },
        '/Home': {
          scrollStyles: {
            links: 'text-white',
            buttons: 'text-white',
            navbar: ['bg-black'],
          },
          defaultStyles: {
            links: 'text-white',
            buttons: 'text-white',
            navbar: ['bg-transparent'],
          },
        },
        '/': {
          scrollStyles: {
            links: 'text-white',
            buttons: 'text-white',
            navbar: ['bg-black'],
          },
          defaultStyles: {
            links: 'text-white',
            buttons: 'text-white',
            navbar: ['bg-transparent'],
          },
        },
        '/Blog': {
          scrollStyles: {
            links: 'text-white',
            buttons:'text-white',
            navbar: ['bg-black'],
          },
          defaultStyles: {
            links: 'text-black',
            buttons: 'text-black',
            navbar: ['bg-transparent'],
          },
        },
        '/Clients': {
          scrollStyles: {
            links: 'text-white',
            buttons: 'text-white',
            navbar: ['bg-black'],
          },
          defaultStyles: {
            links: 'text-black',
            buttons: 'text-black',
            navbar: ['bg-transparent'],
          },
        },
        '/AboutUS': {
          scrollStyles: {
            links: 'text-white',
            buttons: 'text-white',
            navbar: ['bg-black'],
          },
          defaultStyles: {
            links: 'text-black',
            buttons: 'text-black',
            navbar: ['bg-transparent'],
          },
        },
        '/product': {
          scrollStyles: {
            links: 'text-white',
            buttons: 'text-white',
            navbar: ['bg-black'],
          },
          defaultStyles: {
            links: 'text-black',
            buttons: 'text-black',
            navbar: ['bg-transparent'],
          },
        },
        '/ContactUS': {
          scrollStyles: {
            links: 'text-white',
            buttons: 'text-white',
            navbar: ['bg-black'],
          },
          defaultStyles: {
            links: 'text-black',
            buttons: 'text-black',
            navbar: ['bg-transparent'],
          },
        },
      };
    

  
      const currentPage = pagesConfig[location.pathname];
      if (!currentPage) return;
    
      const isScrolled = window.scrollY > 50;
      setIsScrolled(isScrolled); // Update the state based on scroll
    
      const styles = isScrolled ? currentPage.scrollStyles : currentPage.defaultStyles;
      
  // Update links
  if (styles && links) {
    links.forEach(link => {
      link.classList.remove('text-black', 'text-white');
      link.classList.add(styles.links);
    });
  }

  // Update buttons
  if (styles && buttons) {
    buttons.forEach(btn => {
      btn.classList.remove('text-black', 'text-white'); // Correct removal
      btn.classList.add(styles.buttons);
    });
  }

  // Update navbar styles
  if (styles && navbar) {
    navbar.classList.remove('bg-transparent', 'bg-black', 'bg-white', 'text-black', 'text-white');
    styles.navbar.forEach(navClass => {
      navbar.classList.add(navClass);
    });
  }
    };

    window.addEventListener('scroll', updateNavStyles);
    window.addEventListener('resize', updateMenuIcon);
    
    updateNavStyles(); // Initial call for setting the right style and icon
    updateMenuIcon();

    return () => {
      window.removeEventListener('scroll', updateNavStyles,updateMenuIcon);
      window.removeEventListener('resize', updateMenuIcon);

    };
  }, [location.pathname]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        location.pathname === '/Services'
          ? 'bg-white text-black'
          : location.pathname === '/Blog'
          ? 'bg-black'
          : isScrolled
          ? 'bg-black'
          : ''
      }`}
      style={{
        height: isScrolled ? '80px' : '100px',
        paddingTop:"12px", // Adjust height when scrolled
        transition: 'height 0.9s ease, background-color 0.6s ease, width 1.7s ease',
      }}
    >
      <div className="container hdr">
        <Link className="navbar-brand" to="/">
          <img src="../Uberms-logo.png" alt="Logo" className="logo"
          style={{
            width : isScrolled ? '200px' : '250px',
           transition: ' width 1.0s ease',

          }} />
        </Link>

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
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUS">
                About Us
              </Link>
            </li>
            <li className="nav-item ">
              <HoverDropdown title={"Services"} menuItems={menuItems} />
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Shop">
                Shop
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                onClick={toggleDrawer(true)}
                className="text-white sv bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                <img src="/grid.svg" alt="menu-icon" />
              </button>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
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
