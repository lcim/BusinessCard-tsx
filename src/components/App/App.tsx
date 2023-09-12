// import React from "react";
import Info from "../Info/Info";
import About from "../About/About";
import Interests from "../Interests/Interests";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  return (
    <div className="app__container ">
      <Info />
      <div className="content">
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
};

export default App;
