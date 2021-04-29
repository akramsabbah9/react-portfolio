import React, { useEffect, useState } from "react";
import "bootswatch/dist/slate/bootstrap.min.css"; // theme: slate
// import "bootstrap/dist/css/bootstrap.min.css"; // comment this out when using bootswatch
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
            <div className="top-content">
            <Header
                sections={sections}
                current={currentSection}
                setCurrent={setCurrentSection}
            />

            <Container className="pl-3 pr-3" fluid>
                <main className="justify-content-center">
                    <h1 className="text-center mb-4">
                        <span className="border-bottom rounded pl-3 pr-3 pt-1 pb-1">{currentSection.title}</span>
                    </h1>
                    {renderCurrent(currentSection.name)}
                </main>
            </Container>
            </div>

            <Footer />
        </>
    );
}

export default App;
