/* Header: top bar of portfolio page, with Nav links. */
import React from "react";
import Nav from "../Nav";

function Header() {
    return (
        <header>
            <h1><a href="/">Akram Sabbah</a></h1>
            <Nav />
        </header>
    );
}

export default Header;