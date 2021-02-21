import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <div>
            <ul className="NavBar">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Resume</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
