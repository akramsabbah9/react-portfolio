/* Project: display a single project card. */
import React from "react";

function Project(props) {
    const { imgUrl, name, github, deployed } = props;
    return (
        <article className="card m-2">
            <div className="card-header h-100">
                <h6 className="card-title text-white">{name}</h6>
                <div className="d-flex justify-content-center align-items-center">
                    <img
                        // key={num}
                        src={require(`../../assets/img/${imgUrl}`).default}
                        alt={name}
                        className="project-img w-100 h-100"
                        //onClick={() => toggleDisplay(name)}
                    />
                </div>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <a href={deployed} target="_blank" rel="noreferrer noopener">Try it Here!</a> {/*link*/}
                <a href={github} target="_blank" rel="noreferrer noopener">GitHub</a> {/*github*/}
            </div>
        </article>
    );
}

export default Project;
