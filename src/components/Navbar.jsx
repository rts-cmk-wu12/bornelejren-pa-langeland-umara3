
/*import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Forside</Link>
            <Link to="/about">Om Os</Link>
            <Link to="/sponsor">Tilmeld som Sponsor</Link>
            <Link to="/thanks">Bornelejren Takker</Link>
        </nav>
    );
};

export default Navbar;*/

import { useState } from 'react';
import { Link } from 'react-router-dom';
 
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
 
  return (
    <div id="wrapper">
      <nav className="nave__bar">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
 
        <div className={`nav__links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav__link" onClick={() => setMenuOpen(false)}>Forside</Link>
          <Link to="/about" className="nav__link" onClick={() => setMenuOpen(false)}>Om os</Link>
          <Link to="/sponsor" className="nav__link" onClick={() => setMenuOpen(false)}>Tilmeld som sponsor</Link>
          <Link to="/thanks" className="nav__link" onClick={() => setMenuOpen(false)}>Børnelejren Takker</Link>
        </div>
      </nav>
    </div>
  );
}
 
