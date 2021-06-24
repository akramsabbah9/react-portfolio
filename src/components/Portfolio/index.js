/* Portfolio: display project deployment and github links. */
import React, { useState } from "react";
// import Col from "react-bootstrap/Col";
import Project from "../Project";

function Portfolio() {
    const [projects] = useState([
        {
            name: "Parking-Pal",
            github: "https://github.com/akramsabbah9/parking-pal",
            deployed: "http://parking-pal2.herokuapp.com/",
            description: "Parking-share app where users rent out their parking spaces to other users.",
            tools: "MongoDB, Mongoose, Express, React, Node, GraphQL, Stripe, Sass",
            img: "6-bg.png"
        },
        {
            name: "WikiPleiades",
            github: "https://github.com/akramsabbah9/wikipleiades",
            deployed: "https://enigmatic-savannah-82928.herokuapp.com/",
            description: "Wikimedia-style web app for articles on celestial bodies.",
            tools: "Express, Handlebars, MySQL, Sequelize, Javascript, jQuery, Bulma",
            img: "0-bg.png"
        },
        {
            name: "Budget Tracker",
            github: "https://github.com/akramsabbah9/budget-tracker",
            deployed: "https://desolate-inlet-48182.herokuapp.com/",
            description: "Mobile responsive PWA to track budget expenditures.",
            tools: "Express, MongoDB, Mongoose, Javascript, indexedDB, webmanifest",
            img: "1-bg.png"
        },
        {
            name: "Hi, Tech",
            github: "https://github.com/akramsabbah9/hi-tech",
            deployed: "https://morning-plateau-83327.herokuapp.com/",
            description: "CMS-style tech blog with Sequelize backend where users can post and comment.",
            tools: "MySQL, Sequelize, Express, Handlebars, Javascript, CSS3",
            img: "3-bg.png"
        },
        {
            name: "Note Taker",
            github: "https://github.com/akramsabbah9/note-taker",
            deployed: "https://evening-crag-46888.herokuapp.com/",
            description: "Express.js based note taking application.",
            tools: "Express, Node, REST API, Javascript, HTML5, CSS3",
            img: "2-bg.png"
        },
        {
            name: "Recipe Finder",
            github: "https://github.com/pmac16/recipe-finder",
            deployed: "https://pmac16.github.io/recipe-finder/",
            description: "Web app that lets users search for and save recipes.",
            tools: "HTML5, Javascript, Materialize CSS, Web Storage API",
            img: "4-bg.png"
        },
        {
            name: "Weather Dashboard",
            github: "https://github.com/akramsabbah9/weather-dashboard",
            deployed: "https://akramsabbah9.github.io/weather-dashboard/",
            description: "Weekly weather-tracking app powered by OpenWeather API.",
            tools: "Javascript, HTML5, CSS3, OpenWeather API",
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
                        description={project.description}
                        tools={project.tools}
                    />
                ))}
            </div>

            {/* right section: display project links, snapshot, description */}
        </div>
    );
}

export default Portfolio;
