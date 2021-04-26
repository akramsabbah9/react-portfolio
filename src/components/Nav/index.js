/* Nav: list all section names and change current section when one is clicked. */
import React from "react";

function Nav(props) {
    const {sections = [], current, setCurrent} = props;

    return (
        <nav>
            <ul>{/*TODO: flex*/}
                {sections.map(section => (
                    // make a list element with an onClick listener to change the current section
                    <li
                        key={section.name}
                    >
                        <span onClick={() => setCurrent(section)}>{section.title}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
