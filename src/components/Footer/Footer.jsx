import React from 'react';
import './Footer.css'; // Make sure to style the footer appropriately

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Meet our team</a></li>
            <li><a href="#">Case stories</a></li>
            <li><a href="#">Latest news</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Other Link</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">Disclaimer</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
        <ul>
          <li>Uber Marketing Solutions, 462, Anand Nagar, Bangalore: 560024</li>
          <li>Email: <a href="mailto:nadir@uberms.com">nadir@uberms.com</a></li>
          <li>Phone: +919886317061</li>
        </ul>
      </div>

      </div>

      <div className="footer-bottom">
        <p>All rights reserved 2023</p>
        <div className="footer-links">
          <a href="#">Terms of use</a>
          <a href="#">Privacy Policy</a>



        </div>
      </div>
    </footer>
  );
}

export default Footer;
