/* Nav: list all section names and change current section when one is clicked. */
import React from "react";
import Nav from "react-bootstrap/Nav";

function MNav(props) {
    const {sections = [], current, setCurrent} = props;

    return (
        <Nav className="w-75 ml-auto justify-content-around">
            {sections.map(section => (
                <Nav.Item key={section.name}>
                    <span onClick={() => setCurrent(section)}>{section.name}</span>
                </Nav.Item>
            ))}
        </Nav>
    );
}

export default MNav;
