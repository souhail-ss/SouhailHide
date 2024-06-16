import React from "react";
import styled from "styled-components";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { TiStarburst } from "react-icons/ti";
import { MdSettings } from "react-icons/md";
import { FaFileImport } from "react-icons/fa6";

import {
  AdditionalText,
  AnotherRow,
  BodyContainer,
  BodyImage,
  ImportIcon,
  InnerCard,
  InnerCardWrapper,
  RdvBar,
  RdvCard,
  RdvPic,
  SearchButton,
  SearchDiv,
  SearchTitle,
  SettIcon,
  Stackpics,
  StyledCard,
  StyledRow,
  TextContainer,
  TextStyled,
  TimeBar,
  TitleContainer,
  Username,
  UsernameContainer,
  UserPic,
} from "../styles/Body.styled";
import { FaCircle, FaStar, FaUserFriends } from "react-icons/fa";
import Pic from "../../assets/sukunaHalal.jpg";
import Pic2 from "../../assets/mashle.jpeg";
import Pic3 from "../../assets/kimetsu.jpeg";
import numPic from "../../assets/NumPicture.png";
import RdvUsers from "../props.jsx";
import ToggleSwitch from "../Buttons/SwitchButton.jsx";

const StyledImage = styled.div`
  height: 200px;
  width: 100%;
  background: linear-gradient(to top, #e4e4e4, rgba(255, 255, 255, 0)),
    url("https://static.vecteezy.com/system/resources/previews/006/240/302/non_2x/abstract-soft-focus-sunset-field-landscape-of-yellow-flowers-and-grass-meadow-warm-golden-hour-sunset-sunrise-time-tranquil-spring-summer-nature-closeup-and-blurred-forest-background-idyllic-nature-photo.jpg")
      no-repeat center/cover;
  z-index: 3;
  opacity: 1;
  margin-bottom: 20px;
`;
const Biggertext = styled.h1`
  font-family: "Roboto",Arial, Helvetica, sans-serif;
  font-size: 50px;

  font-weight: 700;
`;
const Smalltext = styled.h6`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
`;
const IconContainer = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 60px;
  width: 50px; /* Adjust based on your icon size */
  height: 50px; /* Adjust based on your icon size */
`;
const StyledIcon = styled.div`
  /* font-size: 50px;  */
  position: absolute;

  //Make sure icons overlap Adjust based on your preference /* Adjust based on your preference */
`;

function Body() {
  return (
    <BodyContainer>
      <StyledImage>
        <Col md={{ span: 6, offset: 3 }}>
          <TitleContainer>
            <h5>text1 jkfg gjh fjg dfj </h5>
            <h1>Employe polyvalent</h1>
            <p>text1</p>
          </TitleContainer>
        </Col>
      </StyledImage>

      <Col md={{ span: 10, offset: 1 }}>
        {/* <ToggleSwitch/> */}
        <BodyImage>
          <Col lg={6} xs={10}>
            <SearchDiv>
              <Row>
                <Col>
                  <SearchTitle>
                    <Biggertext>Chercher des candidats</Biggertext>

                    <Smalltext>
                      Trouvez automatiquement les talents qui correspondent a
                      vos criteres
                    </Smalltext>
                  </SearchTitle>
                </Col>

                <Row>
                  <Col lg={{ span: 6, offset: 7 }} xs={{ span: 5, offset: 5 }}>
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
              <IconContainer>
                <StyledIcon>
                  <FaCircle style={{ color: "#474fff", fontSize: "70px" }} />
                </StyledIcon>
                <StyledIcon>
                  <HiOutlineChatBubbleOvalLeftEllipsis
                    style={{ color: "#ffffff", fontSize: "40px" }}
                  />
                </StyledIcon>
              </IconContainer>

              <h3>Resultat des entretiens</h3>
              <Smalltext style={{ color: "#a0b0c9" }}>
                Status des candidats apres entretien
              </Smalltext>

              <Stackpics direction="horizontal">
                <UserPic src={Pic}></UserPic>
                <UserPic src={Pic}></UserPic>
                <UserPic src={Pic}></UserPic>
                <UserPic src={numPic}></UserPic>
              </Stackpics>
            </StyledCard>
          </Col>

          <Col md={4}>
            <StyledCard>
              {/* <HiOutlineChatBubbleOvalLeftEllipsis style={{color:'#ff0000'}} >
            <FaCircle style={{color:'#474fff'}}/>
                
            </HiOutlineChatBubbleOvalLeftEllipsis> */}
              <IconContainer>
                <StyledIcon>
                  <FaCircle style={{ color: "#474fff", fontSize: "60px" }} />
                </StyledIcon>
                <StyledIcon>
                  <TiStarburst style={{ color: "#ffffff", fontSize: "40px" }} />
                </StyledIcon>
              </IconContainer>

              <h3>Resultat des entretiens</h3>
              <Smalltext style={{ color: "#a0b0c9" }}>
                Status des candidats apres entretien
              </Smalltext>

              <Stackpics direction="horizontal">
                <UserPic src={Pic2}></UserPic>
                <UserPic src={Pic2}></UserPic>
                <UserPic src={Pic2}></UserPic>
                <UserPic src={numPic}></UserPic>
              </Stackpics>
            </StyledCard>
          </Col>
          <Col md={4}>
            <StyledCard>
              {/* <HiOutlineChatBubbleOvalLeftEllipsis style={{color:'#ff0000'}} >
            <FaCircle style={{color:'#474fff'}}/>
                
            </HiOutlineChatBubbleOvalLeftEllipsis> */}
              <IconContainer>
                <StyledIcon>
                  <FaCircle style={{ color: "#474fff", fontSize: "60px" }} />
                </StyledIcon>
                <StyledIcon>
                  <FaUserFriends
                    style={{ color: "#ffffff", fontSize: "30px" }}
                  />
                </StyledIcon>
              </IconContainer>

              <h3>Resultat des entretiens</h3>
              <Smalltext style={{ color: "#a0b0c9" }}>
                Status des candidats apres entretien
              </Smalltext>

              <Stackpics direction="horizontal">
                <UserPic src={Pic3}></UserPic>
                <UserPic src={Pic3}></UserPic>
                <UserPic src={Pic3}></UserPic>
                <UserPic src={numPic}></UserPic>
              </Stackpics>
            </StyledCard>
          </Col>
        </StyledRow>
        {/* second Row */}

        <Row style={{ marginTop: "35px", marginBottom: "30px" }}>
          <Col lg={{ span: 8, offset: 0 }} xs={{ span: 12, offset: 0 }}>
            <RdvCard>
              <Row>
                <Col lg={{ span: 11, offset: 0 }} xs={{ span: 11, offset: 0 }}>
                  <h2>Prochain rendez-vous</h2>
                </Col>
              </Row>
              {/* Second Row */}

              <Row>
                <Col lg={{ span: 6, offset: 0 }} xs={12}>
                  <h6 style={{ color: "#a4aab2" }}>Cette semaine:13-17mai</h6>
                  <RdvBar
                  // className="w-100"
                  >
                    <Row>
                      <Col xs={{ span: 2, offset: 0 }}>
                        <RdvPic src={Pic} />
                      </Col>
                      <Col>
                        <UsernameContainer>
                          <Username>
                            <RdvUsers name="Souhail Sukuna" />
                          </Username>
                          <AdditionalText>Paris ,France</AdditionalText>
                        </UsernameContainer>
                      </Col>
                      <TimeBar>
                        13/05/24
                        <br />
                        <a style={{ fontSize: "15px" }}>10h00-11h00</a>
                      </TimeBar>
                    </Row>
                  </RdvBar>
                  <RdvBar
                  // className="w-100"
                  >
                    <Row>
                      <Col xxs xs={2}>
                        <RdvPic src={Pic3} />
                      </Col>
                      <Col>
                        <UsernameContainer>
                          <Username>
                            <RdvUsers name="Yasser gouchia" />
                          </Username>
                          <AdditionalText>Paris ,France</AdditionalText>
                        </UsernameContainer>
                      </Col>
                      <TimeBar>
                        13/05/24
                        <br />
                        <a style={{ fontSize: "15px" }}>10h00-11h00</a>
                      </TimeBar>
                    </Row>
                  </RdvBar>
                  <RdvBar
                  // className="w-100"
                  >
                    <Row>
                      <Col xs={2}>
                        <RdvPic src={Pic2} />
                      </Col>
                      <Col>
                        <UsernameContainer>
                          <Username>
                            <RdvUsers name="Mashle" />
                          </Username>
                          <AdditionalText>Paris ,France</AdditionalText>
                        </UsernameContainer>
                      </Col>
                      <TimeBar>
                        13/05/24
                        <br />
                        <a style={{ fontSize: "15px" }}>10h00-11h00</a>
                      </TimeBar>
                    </Row>
                  </RdvBar>
                </Col>
                <Col lg={{ span: 6, offset: 0 }} xs={12}>
                  <h6 style={{ color: "#a4aab2" }}>
                    La semaine prochaine:13-17mai
                  </h6>
                  <RdvBar
                  // className="w-100"
                  >
                    <Row>
                      <Col xs={2}>
                        <RdvPic src={Pic2} />
                      </Col>
                      <Col>
                        <UsernameContainer>
                          <Username>John Doe</Username>
                          <AdditionalText>Paris ,France</AdditionalText>
                        </UsernameContainer>
                      </Col>
                      <TimeBar>
                        13/05/24
                        <br />
                        <a style={{ fontSize: "15px" }}>10h00-11h00</a>
                      </TimeBar>
                    </Row>
                  </RdvBar>
                  <RdvBar
                  // className="w-100"
                  >
                    <Row>
                      <Col xs={2}>
                        <RdvPic src={Pic2} />
                      </Col>
                      <Col>
                        <UsernameContainer>
                          <Username>Jane Smith</Username>
                          <AdditionalText>Paris ,France</AdditionalText>
                        </UsernameContainer>
                      </Col>
                      <TimeBar>
                        13/05/24
                        <br />
                        <a style={{ fontSize: "15px" }}>10h00-11h00</a>
                      </TimeBar>
                    </Row>
                  </RdvBar>
                  <RdvBar className="w-100">
                    <Row>
                      <Col xs={2}>
                        <RdvPic src={Pic3} />
                      </Col>
                      <Col>
                        <UsernameContainer>
                          <Username>Sam Wilson</Username>
                          <AdditionalText>Paris ,France</AdditionalText>
                        </UsernameContainer>
                      </Col>
                      <TimeBar>
                        13/05/24
                        <br />
                        <a style={{ fontSize: "15px" }}>10h00-11h00</a>
                      </TimeBar>
                    </Row>
                  </RdvBar>
                </Col>
              </Row>
            </RdvCard>
          </Col>

          <Col lg={{ span: 4, offset: 0 }} xs={{ span: 12, offset: 0 }}>
            <StyledCard>
              <ImportIcon>
                <StyledIcon>
                  <FaCircle
                    style={{
                      color: "#474fff",
                      fontSize: "80px",
                      marginLeft: "15px",
                      marginTop: "46px",
                    }}
                  />
                </StyledIcon>
                <StyledIcon>
                  <FaFileImport
                    style={{
                      color: "#ffffff",
                      fontSize: "35px",
                      marginLeft: "34px",
                      marginTop: "68px",
                    }}
                  />
                </StyledIcon>
                <AnotherRow>
                  <h3>Importez des CV</h3>
                  <h6 style={{ color: "#797979" }}>
                    Importez et obtenez un score de match
                  </h6>
                </AnotherRow>
              </ImportIcon>

              <InnerCard>
                <StyledIcon>
                  <FaCircle
                    style={{
                      color: "#ffffff",
                      fontSize: "80px",
                      marginLeft: "15px",
                    }}
                  />
                </StyledIcon>
                <StyledIcon>
                  <MdSettings
                    style={{
                      color: "#474fff",
                      fontSize: "48px",
                      marginLeft: "32px",
                    }}
                  />
                </StyledIcon>

                <TextContainer>
                  <h3>Parametres </h3>
                  <h6> Personnalisez vos preferences</h6>
                </TextContainer>
              </InnerCard>
            </StyledCard>
          </Col>
        </Row>
      </Col>
    </BodyContainer>
  );
}

export default Body;
