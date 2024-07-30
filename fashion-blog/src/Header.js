// src/Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <h1 className="blog-title">Sartre's List</h1>
      <h2 className="blog-subtitle">Better-Dressed People</h2>
      <nav className="header-nav">
        <ul aria-label="Main Navigation" role="navigation">
          <li><a href="">Women's</a></li>
          <li><a href="">Men's</a></li>
          <li><a href="">On the Street</a></li>
          <li><a href="">The Catwalk</a></li>
          <li><a href="">Adwatch</a></li>
          <li><a href="">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
