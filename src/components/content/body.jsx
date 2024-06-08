import React from "react";
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
import { BodyContainer, TitleContainer } from "../styles/Body.styled";


// Styled component for the text

// Styled Components
// const BodyContainer = styled(Container)`
//   background-color: #e4e4e4;
//   width: 100%;
//   min-height: 1000px;
// `;
const StyledImage = styled.div`
    height: 200px;
    background: 
      linear-gradient(to top, #e4e4e4, rgba(255, 255, 255, 0)),
      url('https://static.vecteezy.com/system/resources/previews/006/240/302/non_2x/abstract-soft-focus-sunset-field-landscape-of-yellow-flowers-and-grass-meadow-warm-golden-hour-sunset-sunrise-time-tranquil-spring-summer-nature-closeup-and-blurred-forest-background-idyllic-nature-photo.jpg') no-repeat center/cover;
    z-index: 1454;
    opacity: 1;
`


function Body() {
    return (
        <>

            <BodyContainer>

                <Row>
                   

                        <StyledImage> 

                        <Row>
                            <Col md={{ span: 4, offset: 4 }}>
                            <TitleContainer>
                            <h5>text1 jkfg gjh fjg dfj </h5>
                                <h1>E'ploye polyvalent</h1>
                                <p>text1</p>
                            </TitleContainer>
                            </Col>
                        </Row>
                        </StyledImage>

                            
                        
                    




                </Row>


                <Row>
                    <Col>
                        <h2>Your Title Here</h2>

                    </Col>
                </Row>
                <Row>

                </Row>
            </BodyContainer>
        </>
    );
}

export default Body;
