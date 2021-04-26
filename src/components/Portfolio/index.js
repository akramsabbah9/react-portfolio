/* Portfolio: display project deployment and github links. */
import React, { useState } from "react";
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
            name: "Roshambo",
            github: "https://github.com/akramsabbah9/roshambo",
            deployed: "https://roshambo-ucla.herokuapp.com/",
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
        <div>{/*TODO: flex*/}
            {/* left section: display project cards */}
            <div className="grid-container">{/*TODO: grid*/}
                {projects.map(project => (
                    <Project
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
