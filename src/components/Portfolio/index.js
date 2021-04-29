/* Portfolio: display project deployment and github links. */
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Project from "../Project";

function Portfolio() {
    const [projects] = useState([
        {
            name: "WikiPleiades",
            github: "https://github.com/akramsabbah9/wikipleiades",
            deployed: "https://enigmatic-savannah-82928.herokuapp.com/",
            description: ""
        },
        {
            name: "Budget Tracker",
            github: "https://github.com/akramsabbah9/budget-tracker",
            deployed: "https://desolate-inlet-48182.herokuapp.com/",
            description: ""
        },
        {
            name: "Note Taker",
            github: "https://github.com/akramsabbah9/note-taker",
            deployed: "https://evening-crag-46888.herokuapp.com/",
            description: ""
        },
        {
            name: "Hi, Tech",
            github: "https://github.com/akramsabbah9/hi-tech",
            deployed: "https://morning-plateau-83327.herokuapp.com/",
            description: ""
        },
        {
            name: "Recipe Finder",
            github: "https://github.com/pmac16/recipe-finder",
            deployed: "https://pmac16.github.io/recipe-finder/",
            description: ""
        },
        {
            name: "Weather Dashboard",
            github: "https://github.com/akramsabbah9/weather-dashboard",
            deployed: "https://akramsabbah9.github.io/weather-dashboard/",
            description: ""
        }
    ]);

    return (
        <div className="d-flex justify-content-center">
            {/* left section: display project cards */}
            <div className="w-100 d-flex flex-wrap justify-content-around">
                {projects.map((project, i) => (
                    <Project
                        num={i}
                        name={project.name}
                        github={project.github}
                        deployed={project.deployed}
                    />
                ))}
            </div>

            {/* right section: display project links, snapshot, description */}
        </div>
    );
}

export default Portfolio;
