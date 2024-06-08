import React from 'react';
import { BsChatDotsFill, BsBell, BsPersonCircle } from "react-icons/bs";
import logo from "../../assets/image.png";
import { Container, Row, Col } from 'react-bootstrap';
import { StyledNavbar, StyledIcons, StyledLogo, LogoImage } from '../styles/Navbar.styled';

function Navbar() {
  return (
    <>

    <StyledNavbar>
      <Container>
        <Row className="align-items-center">
          <Col>
            <a href='/'><LogoImage src={logo} alt="Logo" /></a>
          </Col>
          <Col xs="auto">
          <StyledIcons>

              <BsBell />
                  <BsChatDotsFill />
                  <BsPersonCircle />
          </StyledIcons>
            
          </Col>

        </Row>
      </Container>
    </StyledNavbar>
    </>
  );
}

export default Navbar;



    // <header className='header'>
    //     <a href='/' className='logo' ><img src={logo} style={{ 
    //       height:"50px",
    //       width:"170px",
    //       display:"flex",
    //     }} /></a>
    //     <nav className='navbar'>
    //         <a href='/'><BsBell /></a>
    //         <a href='/'><BsChatDotsFill /></a>
    //         <a href='/'><BsPersonCircle /></a>
    //         {/* <a href='/'></a> */}

    //     </nav>
    // </header>

//   )
// }

// export default Navbar