/* About: an "about me" section featuring picture and bio */
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function About() {
    return (
        <Row>
            <Col className="d-flex justify-content-center" md="6">
                <Image
                    src={require("../../assets/img/me.jpg").default}
                    className="h-75 mt-3"
                    alt="Akram Sabbah"
                    rounded fluid
                />
            </Col>
            <Col md>
                <h2 className="h3 mt-2">Who Am I?</h2>
                <p>
                    I'm a recently-graduated software engineer from UCLA, based in Pleasonton, CA. I specialize 
                    in full-stack web development and embedded systems programming. My passion is creating intuitive 
                    user-friendly applications with an emphasis on mobile-first paradigms. Feel free to contact me 
                    if you have any questions about <span>my portfolio</span> or otherwise.
                </p>
            </Col>
        </Row>
    );
}

export default About;
