/* About: an "about me" section featuring picture and bio */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import me from "../../assets/img/me.jpg";

function About() {
    return (
        <Container fluid>
        <Row className="load-anim-1">
            <Col className="d-flex justify-content-center" md="6">
                <Image
                    src={me}
                    className="mt-3 mb-2 my-img"
                    alt="Akram Sabbah"
                    rounded
                />
            </Col>
            <Col md>
                <h2 className="h3 mt-2">Who Am I?</h2>
                <p>
                    I'm a recently-graduated software engineer from UCLA, based in Pleasanton, CA. I specialize 
                    in full-stack web development and embedded systems programming. My passion is creating intuitive 
                    user-friendly applications with an emphasis on mobile-first paradigms. Feel free to contact me 
                    if you have any questions about <span>my portfolio</span> or otherwise.

                    You can reach me through the Contact form on this website, or email me directly 
                    at <a href="mailto:akramsabbah9@gmail.com" target="_blank" rel="noreferrer noopener">akramsabbah9@gmail.com</a>.
                </p>
            </Col>
        </Row>
        </Container>
    );
}

export default About;
