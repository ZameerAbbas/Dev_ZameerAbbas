import React from "react";
import "./App.css";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import GoToTop from "./components/gototop/GoToTop";

const App = () => {
  return (
    <div className="App">
      <Main>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact/>
        <Footer/>
        <GoToTop/>
        {/* <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
        </Routes> */}
      </Main>
    </div>
  );
};

export default App;
