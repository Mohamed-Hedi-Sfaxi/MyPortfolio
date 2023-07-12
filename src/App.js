import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import "./styles/app.css";
import Background from "./background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <Router>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Personal Portfolio</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="Get to know me !" />
        </Helmet>
      </div>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PlayerStats />
    </Router>
  );
};

export default App;
