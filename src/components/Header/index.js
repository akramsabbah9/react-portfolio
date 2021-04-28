/* Header: top bar of portfolio page, with Nav links. */
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "../Nav";

function Header({ sections, current, setCurrent }) {
    return (
        <header>
            <Navbar className="bg-secondary justify-content-center border-0 rounded-0 p-0 mb-3 flex-wrap row">
                <Navbar.Brand className="text-white bg-info pt-3 pb-3 pl-5 pr-5 m-0 h-100 rounded-right col-lg">Akram Sabbah</Navbar.Brand>
                <Nav sections={sections} current={current} setCurrent={setCurrent} />
            </Navbar>
        </header>
    );
}

export default Header;
