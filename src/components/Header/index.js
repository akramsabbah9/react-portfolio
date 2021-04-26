/* Header: top bar of portfolio page, with Nav links. */
import React from "react";
import Nav from "../Nav";

function Header({ sections, current, setCurrent }) {
    return (
        <>
            <header>{/*TODO: flex*/}
                <h2><a href="/">Akram Sabbah</a></h2>
                <Nav sections={sections} current={current} setCurrent={setCurrent} />
            </header>
            <h1>{current.title}</h1>
        </>
    );
}

export default Header;
