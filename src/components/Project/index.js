/* Project: display a single project card. */
import React from "react";

function Project(props) {
    const { name, github, deployed } = props;
    return (
        <article className="card">
            <div className="card-header">
                <img
                    //src={require(`../../assets/small/${category}/${i}.jpg`).default}
                    alt={name}
                    //onClick={() => toggleDisplay(name)}
                    key={name}
                />
            </div>
            <div className="card-footer">
                <a href={deployed} target="_blank" rel="noreferrer noopener">Try it Here!</a> {/*link*/}
                <a href={github} target="_blank" rel="noreferrer noopener">GitHub</a> {/*github*/}
            </div>
        </article>
    );
}

export default Project;