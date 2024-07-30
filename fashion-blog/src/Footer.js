// src/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer>
      <nav className="footer-nav">
        <ul aria-label="Main Navigation" role="navigation">
          <li><a>Home</a></li>
          <li><a>Women's</a></li>
          <li><a>Men's</a></li>
          <li><a>On the Street</a></li>
          <li><a>The Catwalk</a></li>
          <li><a>AdWatch</a></li>
          <li><a>About</a></li>
        </ul>
      </nav>
      <p className="copyright">© 2013 Valet Industries Inc.</p>
    </footer>
  );
}

export default Footer;
