import React from "react";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";
import Body from "./components/content/body";
import { Col, Container, Row } from "react-bootstrap";

const App = () => {
  return (
    <>
   
       <Navbar />
      <Body />
      <Footer />
      
    </>

  );
};

export default App;
