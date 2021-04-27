/* Resume: link to resume and list coding proficiencies. */
import React from "react";
import MyResume from "../../assets/docs/resume.pdf";

function Resume() {
    return (
        <>
            <p>View my resume <a href={MyResume} target="_blank" rel="noreferrer noopener">here</a>.</p>
        </>
    );
}

export default Resume;
