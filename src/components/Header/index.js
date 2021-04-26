/* Header: top bar of portfolio page, with Nav links. */
import React from "react";
import Nav from "../Nav";

function Header() {
    return (
        <header>
            <h2><a href="/">Akram Sabbah</a></h2>
            <Nav />
        </header>
    );
}

export default Header;
