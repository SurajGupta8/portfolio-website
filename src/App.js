import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
