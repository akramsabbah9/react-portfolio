/* Nav: list all section names and change current section when one is clicked. */
import React from "react";
import Nav from "react-bootstrap/Nav";

function MNav(props) {
    const {sections = [], current, setCurrent} = props;

    return (
        <Nav className="w-100 pt-3 pb-3 justify-content-around text-light col-lg-9 row">
            {sections.map(section => (
                <Nav.Item
                    key={section.name}
                    className={`col-sm text-center ${current.name === section.name && "font-weight-bolder text-white"}`}
                >
                    <span onClick={() => setCurrent(section)}>{section.name}</span>
                </Nav.Item>
            ))}
        </Nav>
    );
}

export default MNav;
