import React from "react";
import Navbar from "./Navbar";
import KjLogo from "./KjLogo";
import "../styles/HeaderBlock.css";

const Header = () => {
    return (
        <div className="HeaderBlock">
            <ul>
                <li>
                    <KjLogo />
                </li>
                <li>
                    <Navbar />
                </li>
            </ul>
        </div>
    );
};

export default Header;
