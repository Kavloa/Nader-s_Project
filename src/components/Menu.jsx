import React, { useState, useEffect } from 'react';
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider
} from '@coreui/react';
import { useLocation } from 'react-router-dom';
import './menu.css'; // Import the CSS file

function HoverDropdown({ menuItems, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get the current path

  // Configuration for different pages
  const pagesConfig = {
    '/Services': {
      links: 'text-white',
      buttons: 'text-white',
      navbar: ['bg-white', 'text-white'],
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
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Track if the user has scrolled
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Determine the current styles based on the route and scroll state
  const currentPageConfig = pagesConfig[location.pathname];
  const styles = isScrolled && currentPageConfig.scrollStyles ? currentPageConfig.scrollStyles : currentPageConfig.defaultStyles || currentPageConfig;

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <CDropdown
      className={`nav-link m-0 p-0 h-0 ${styles.dropdown}`} // Apply dynamic dropdown class
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      show={isOpen} // Correct visibility control
    >
      <CDropdownToggle
        className={`svs bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 ${styles.buttons}`} // Apply dynamic button styles
        style={{
          '--bs-btn-color': isScrolled ? 'white' : location.pathname === '/Services' ? 'black' : 'white'
        }}
      >
        {title}
      </CDropdownToggle>
      <CDropdownMenu className="mt-2">
        {menuItems.map((item, index) =>
          item === 'divider' ? (
            <CDropdownDivider key={index} />
          ) : (
            <CDropdownItem key={index} href={item.href}>
              {item.label}
            </CDropdownItem>
          )
        )}
      </CDropdownMenu>
    </CDropdown>
  );
}

export default HoverDropdown;
