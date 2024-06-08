import React from 'react';
import Navbar from './components/Nav/Navbar';
import Footer from './components/Footer/Footer';
import Body from './components/content/body';
import { Container, Row } from 'react-bootstrap';

const App = () => {
  return (
    <>
    
      
      
        
        <Navbar />

      
      
      <Row>

          <Body />

      </Row>
        
        
      <Row>
        <Footer />
      </Row>

     
    
    </>
  );
};


export default App;
