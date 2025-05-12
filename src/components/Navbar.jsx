
import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/sponsor">Become a Sponsor</Link>
            <Link to="/thanks">Thank You</Link>
        </nav>
    );
};

export default Navbar;
