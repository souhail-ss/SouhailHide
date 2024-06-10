import React from "react";
import styled from "styled-components";
import { Col, Row } from "react-bootstrap";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import {
  BodyContainer,
  BodyImage,
  SearchButton,
  SearchDiv,
  SearchTitle,
  StyledCard,
  StyledRow,
  TitleContainer,
} from "../styles/Body.styled";
import { FaCircle, FaStar } from "react-icons/fa";

const StyledImage = styled.div`
  height: 200px;
  background: linear-gradient(to top, #e4e4e4, rgba(255, 255, 255, 0)),
    url("https://static.vecteezy.com/system/resources/previews/006/240/302/non_2x/abstract-soft-focus-sunset-field-landscape-of-yellow-flowers-and-grass-meadow-warm-golden-hour-sunset-sunrise-time-tranquil-spring-summer-nature-closeup-and-blurred-forest-background-idyllic-nature-photo.jpg")
      no-repeat center/cover;
  z-index: 1454;
  opacity: 1;
`;
const Biggertext = styled.h1`
  font-family: Impact, fantasy;
`;
const Smalltext = styled.h6`
  font-family: Arial, Helvetica, sans-serif;
  
`;
const IconContainer = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 20px;
  width: 50px; /* Adjust based on your icon size */
  height: 50px; /* Adjust based on your icon size */

`;
const StyledIcon = styled.div`
  /* font-size: 50px;  */
  position: absolute; /* Make sure icons overlap *//* Adjust based on your preference */ /* Adjust based on your preference */
`;

function Body() {
  return (
    <>
      <BodyContainer>
        <Row>
          <StyledImage>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <TitleContainer>
                  <h5>text1 jkfg gjh fjg dfj </h5>
                  <h1>Employe polyvalent</h1>
                  <p>text1</p>
                </TitleContainer>
              </Col>
            </Row>
          </StyledImage>
        </Row>

        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <BodyImage>
              <Col lg={6} xs={10}>
                <SearchDiv>
                  <Row>
                    <Col>
                      <SearchTitle>
                        <Biggertext>Chercher des Candidats</Biggertext>

                        <Smalltext>
                          Trouvez automatiquement les talents qui correspondent
                          a vos criteres
                        </Smalltext>
                      </SearchTitle>
                    </Col>

                    <Row>
                      <Col
                        lg={{ span: 5, offset: 7 }}
                        xs={{ span: 6, offset: 5 }}
                      >
                        <SearchButton>Lancer la Recherche</SearchButton>
                      </Col>
                    </Row>
                  </Row>
                </SearchDiv>
              </Col>
            </BodyImage>


            <StyledRow>
              <Col md={4}>
                <StyledCard>
                  {/* <HiOutlineChatBubbleOvalLeftEllipsis style={{color:'#ff0000'}} >
            <FaCircle style={{color:'#474fff'}}/>
                
            </HiOutlineChatBubbleOvalLeftEllipsis> */}
                  <IconContainer >
                    <StyledIcon>
                      <FaCircle style={{ color: "#474fff" ,fontSize:"60px"}} />
                    </StyledIcon>
                    <StyledIcon>
                      <HiOutlineChatBubbleOvalLeftEllipsis
                        style={{ color: "#ffffff",fontSize:"40px" }}
                      />
                    </StyledIcon>
                  </IconContainer>

                  <h3>Resultat des entretiens</h3>
                  <Smalltext style={{color: "#a0b0c9"}}>

                    Status des candidats apres entretien
                  </Smalltext>

                  
                </StyledCard>
              </Col>





              <Col md={4}>
              <StyledCard>
                  {/* <HiOutlineChatBubbleOvalLeftEllipsis style={{color:'#ff0000'}} >
            <FaCircle style={{color:'#474fff'}}/>
                
            </HiOutlineChatBubbleOvalLeftEllipsis> */}
                  <IconContainer >
                    <StyledIcon>
                      <FaCircle style={{ color: "#474fff" ,fontSize:"60px"}} />
                    </StyledIcon>
                    <StyledIcon>
                      <HiOutlineChatBubbleOvalLeftEllipsis
                        style={{ color: "#ffffff",fontSize:"40px" }}
                      />
                    </StyledIcon>
                  </IconContainer>

                  <h3>Resultat des entretiens</h3>
                </StyledCard>
              </Col>
              <Col md={4}>
              <StyledCard>
                  {/* <HiOutlineChatBubbleOvalLeftEllipsis style={{color:'#ff0000'}} >
            <FaCircle style={{color:'#474fff'}}/>
                
            </HiOutlineChatBubbleOvalLeftEllipsis> */}
                  <IconContainer >
                    <StyledIcon>
                      <FaCircle style={{ color: "#474fff" ,fontSize:"60px"}} />
                    </StyledIcon>
                    <StyledIcon>
                      <HiOutlineChatBubbleOvalLeftEllipsis
                        style={{ color: "#ffffff",fontSize:"40px" }}
                      />
                    </StyledIcon>
                  </IconContainer>

                  <h3>Resultat des entretiens</h3>
                </StyledCard>
              </Col>
            </StyledRow>
          </Col>
        </Row>
      </BodyContainer>
    </>
  );
}

export default Body;
