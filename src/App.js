import React from "react";
import Header from "./components/Header";
// import HomePage from "./components/HomePage";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ContactPage from './components/ContactPage';

export default function App() {
  
  return (
    <>
    <Header />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </main>
      <Footer></Footer>
    </>
  );
  
}
