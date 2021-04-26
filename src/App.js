import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import "./App.css";

function App() {
    return (
        <>
            <Header></Header>
            <main>
                {/* TODO: change page state based on info from Nav in Header */}
                <About />
            </main>
            <Footer></Footer>
        </>
    );
}

export default App;
