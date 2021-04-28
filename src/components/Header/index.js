/* Header: top bar of portfolio page, with Nav links. */
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "../Nav";

function Header({ sections, current, setCurrent }) {
    return (
        <header>
            <Navbar >
                <Navbar.Brand>Akram Sabbah</Navbar.Brand>
                <Nav sections={sections} current={current} setCurrent={setCurrent} />
            </Navbar>
        </header>
    );
}

export default Header;
