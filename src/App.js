import React, { useEffect, useState } from "react";
// import "bootswatch/dist/[theme]/bootstrap.min.css"; // TODO: replace theme with another thing
import "bootstrap/dist/css/bootstrap.min.css"; //TODO: comment this out when using bootswatch
import Container from "react-bootstrap/Container";
import { Header, Footer, About, Portfolio, Contact, Resume } from "./components";
import "./App.css";

function App() {
    const [sections] = useState([
        {name: "About", title: "About Me"},
        {name: "Portfolio", title: "My Work"},
        {name: "Contact", title: "Contact Me"},
        {name: "Resume", title: "My Resume"}
    ]);
    const [currentSection, setCurrentSection] = useState(sections[0]);

    useEffect(() => {
        document.title = `Akram Sabbah | ${currentSection.name}`
    }, [currentSection]);
    
    const renderCurrent = name => {
        return (name === "Portfolio") ? <Portfolio /> :
        (name === "Contact") ? <Contact /> :
        (name === "Resume") ? <Resume /> : <About />;
    };

    return (
        <>
            <Header
                sections={sections}
                current={currentSection}
                setCurrent={setCurrentSection}
            />

            <Container fluid>
                <main>
                    <h1>{currentSection.title}</h1>
                    {renderCurrent(currentSection.name)}
                </main>
            </Container>

            <Footer />
        </>
    );
}

export default App;
