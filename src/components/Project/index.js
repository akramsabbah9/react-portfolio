/* Project: display a single project card. */
import React, { useState } from "react";

function Project(props) {
    const { name, github, deployed } = props;
    return (
        <div className="card-container">
            <img
                //src={require(`../../assets/small/${category}/${i}.jpg`).default}
                alt={name}
                //onClick={() => toggleDisplay(name)}
                key={name}
            />
            <a href={deployed} target="_blank" rel="noreferrer noopener">Try it Here!</a> {/*link*/}
            <a href={github} target="_blank" rel="noreferrer noopener">GitHub</a> {/*github*/}
        </div>
    );
}

export default Project;