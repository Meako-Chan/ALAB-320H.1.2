// src/Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <h1 className="blog-title">Sartre's List</h1>
      <h2 className="blog-subtitle">Better-Dressed People</h2>
      <nav className="header-nav">
        <ul aria-label="Main Navigation" role="navigation">
          <li>Women's</li>
          <li>Men's</li>
          <li>On the Street</li>
          <li>The Catwalk</li>
          <li>Adwatch</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
