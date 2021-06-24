/* Project: display a single project card. */
import React from "react";

function Project(props) {
    const { imgUrl, name, github, deployed, description, tools } = props;
    return (
        <article className="card m-2" style={{width: "25rem"}}>
            <div className="card-header h-100">
                <h6 className="card-title text-white">{name}</h6>
                <div className="d-flex justify-content-center align-items-center">
                    <img
                        src={require(`../../assets/img/${imgUrl}`).default}
                        alt={name}
                        className="project-img w-100 h-100"
                        //onClick={() => toggleDisplay(name)}
                    />
                </div>
            </div>
            <div className="card-footer">
                <p className="card-text text-center text-white mb-2">{description}</p>
                <p className="text-center ml-2 mr-2">{tools}</p>
                <div className="d-flex justify-content-between">
                    <a href={deployed} target="_blank" rel="noreferrer noopener">Try it Here!</a> {/*link*/}
                    <a href={github} target="_blank" rel="noreferrer noopener">GitHub</a> {/*github*/}
                </div>
            </div>
        </article>
    );
}

export default Project;
