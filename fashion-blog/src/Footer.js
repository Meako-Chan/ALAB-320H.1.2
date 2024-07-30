// src/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer>
      <nav className="footer-nav">
        <ul aria-label="Main Navigation" role="navigation">
          <li><a href="#">Home</a></li>
          <li><a href="#">Women's</a></li>
          <li><a href="#">Men's</a></li>
          <li><a href="#">On the Street</a></li>
          <li><a href="#">The Catwalk</a></li>
          <li><a href="#">AdWatch</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
      <p className="copyright">© 2013 Valet Industries Inc.</p>
    </footer>
  );
}

export default Footer;
