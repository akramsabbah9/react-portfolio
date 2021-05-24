/* Resume: link to resume and list coding proficiencies. */
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyResume from "../../assets/docs/resume.pdf";

function Resume() {
    const [skills] = useState({
        frontend: ["Javascript", "HTML", "CSS", "React", "jQuery", "Bootstrap", "Bulma", "Handlebars", "Sass"],
        backend: ["Python", "Node.js", "Express", "Django", "MySQL / Sequelize", "MongoDB / Mongoose", "GraphQL / Apollo", "REST APIs", "Jest"]
    });

    return (
        <>
            <div className="text-center load-anim-1">
                <p>View my resume <a href={MyResume} target="_blank" rel="noreferrer noopener">here</a>.</p>
            </div>

            <Row className="load-anim-1">
                <Col className="d-flex justify-content-center" xs>
                <div>
                <h2 className="h3 skill-header">Front-End Skills</h2>
                <ul>
                    {skills.frontend.map(skill => <li key={skill} className="skill-list">{skill}</li>)}
                </ul>
                </div>
                </Col>

                <Col className="d-flex justify-content-center" xs>
                <div>
                <h2 className="h3 skill-header">Back-End Skills</h2>
                <ul>
                    {skills.backend.map(skill => <li key={skill} className="skill-list">{skill}</li>)}
                </ul>
                </div>
                </Col>
            </Row>
        </>
    );
}

export default Resume;
