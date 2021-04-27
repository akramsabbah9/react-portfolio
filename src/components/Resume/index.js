/* Resume: link to resume and list coding proficiencies. */
import React, { useState } from "react";
import MyResume from "../../assets/docs/resume.pdf";

function Resume() {
    const [skills] = useState({
        frontend: ["Javascript", "HTML", "CSS", "React", "jQuery", "Bootstrap", "Bulma", "Handlebars"],
        backend: ["Python", "Node.js", "Express", "Django", "MySQL", "Sequelize", "MongoDB", "Mongoose", "REST APIs", "Jest"]
    });

    return (
        <>
            <p>View my resume <a href={MyResume} target="_blank" rel="noreferrer noopener">here</a>.</p>

            <h2>Front-End Skills</h2>
            <ul>
                {skills.frontend.map(skill => <li>{skill}</li>)}
            </ul>

            <h2>Back-End Skills</h2>
            <ul>
                {skills.backend.map(skill => <li>{skill}</li>)}
            </ul>
        </>
    );
}

export default Resume;
