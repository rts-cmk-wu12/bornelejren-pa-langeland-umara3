
import React from "react";
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

export default Navbar;
