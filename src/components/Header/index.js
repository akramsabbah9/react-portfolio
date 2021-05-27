/* Header: top bar of portfolio page, with Nav links. */
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "../Nav";
import Container from "react-bootstrap/Container";

function Header({ sections, current, setCurrent }) {
    return (
        <header>
            <Container fluid>
            <Navbar className="bg-secondary justify-content-center border-0 rounded-0 p-0 mb-3 flex-wrap row">
                <Navbar.Brand className="text-white bg-info pt-2 pb-2 pl-5 pr-5 m-0 h-100 rounded-right col-lg">Akram Sabbah</Navbar.Brand>
                <Nav sections={sections} current={current} setCurrent={setCurrent} />
            </Navbar>
            </Container>
        </header>
    );
}

export default Header;
