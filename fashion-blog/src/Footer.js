// src/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer>
      <nav className="footer-nav">
        <ul aria-label="Main Navigation" role="navigation">
          <li>Home</li>
          <li>Women's</li>
          <li>Men's</li>
          <li>On the Street</li>
          <li>The Catwalk</li>
          <li>AdWatch</li>
          <li>About</li>
        </ul>
      </nav>
      <p className="copyright">© 2013 Valet Industries Inc.</p>
    </footer>
  );
}

export default Footer;
