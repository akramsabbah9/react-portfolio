import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "./App.css";

function App() {
    const [sections] = useState([
        {name: "About", title: "About Me"},
        {name: "Portfolio", title: "Portfolio"},
        {name: "Contact", title: "Contact"},
        {name: "Resume", title: "Resume"}
    ]);
    const [currentSection, setCurrentSection] = useState(sections[0]);
    
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
            <main>
                {renderCurrent(currentSection.name)}
            </main>
            <Footer />
        </>
    );
}

export default App;
