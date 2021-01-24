import React from "react";
import "./styles/App.css";
import Header from "./Header";
import About from "./About";
import Technical from "./Technical";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";
import { Cube } from "react-preloaders";

function App() {
  return (
    <>
      <Cube
        className="hidden-screen"
        color={"#FFAA96"}
        background="#253245"
        time={1800}
        animation="slide"
      />
      <Header />
      <About />
      <Technical />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
