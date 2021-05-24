/* Portfolio: display project deployment and github links. */
import React, { useState } from "react";
// import Col from "react-bootstrap/Col";
import Project from "../Project";

function Portfolio() {
    const [projects] = useState([
        {
            name: "Parking-Pal",
            github: "https://github.com/the-glorious-4/parking-pal",
            deployed: "http://parking-palz.herokuapp.com/",
            description: "",
            img: "6-bg.png"
        },
        {
            name: "WikiPleiades",
            github: "https://github.com/akramsabbah9/wikipleiades",
            deployed: "https://enigmatic-savannah-82928.herokuapp.com/",
            description: "",
            img: "0-bg.png"
        },
        {
            name: "Budget Tracker",
            github: "https://github.com/akramsabbah9/budget-tracker",
            deployed: "https://desolate-inlet-48182.herokuapp.com/",
            description: "",
            img: "1-bg.png"
        },
        {
            name: "Note Taker",
            github: "https://github.com/akramsabbah9/note-taker",
            deployed: "https://evening-crag-46888.herokuapp.com/",
            description: "",
            img: "2-bg.png"
        },
        {
            name: "Hi, Tech",
            github: "https://github.com/akramsabbah9/hi-tech",
            deployed: "https://morning-plateau-83327.herokuapp.com/",
            description: "",
            img: "3-bg.png"
        },
        {
            name: "Recipe Finder",
            github: "https://github.com/pmac16/recipe-finder",
            deployed: "https://pmac16.github.io/recipe-finder/",
            description: "",
            img: "4-bg.png"
        },
        {
            name: "Weather Dashboard",
            github: "https://github.com/akramsabbah9/weather-dashboard",
            deployed: "https://akramsabbah9.github.io/weather-dashboard/",
            description: "",
            img: "5-bg.png"
        }
    ]);

    return (
        <div className="d-flex justify-content-center load-anim-1">
            {/* left section: display project cards */}
            <div className="w-100 d-flex flex-wrap justify-content-around">
                {projects.map((project, i) => (
                    <Project
                        key={i}
                        imgUrl={project.img}
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
