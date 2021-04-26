/* About: an "about me" section featuring picture and bio */
import React from "react";

function About() {
    return (
        <div>{/* TODO: add flex class */}
            <img src={require("../../assets/me.jpg").default} alt="Akram Sabbah" />
            <div>
            <h2>Who Am I?</h2>
            <p>
                I'm a recently-graduated software engineer from UCLA, based in Pleasonton, CA. I specialize in full-stack web development 
                and embedded systems programming. My passion is creating intuitive user-friendly applications 
                with an emphasis on mobile-first paradigms. Feel free to contact me if you have any questions 
                about <span>my portfolio</span> or otherwise.
            </p>
            </div>
        </div>
    )
}

export default About;