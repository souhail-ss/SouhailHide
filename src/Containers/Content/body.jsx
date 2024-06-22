import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { TiStarburst } from "react-icons/ti";
import { MdSettings } from "react-icons/md";
import { FaFileImport } from "react-icons/fa6";
import {
  AdditionalText,
  AnotherRow,
  Biggertext,
  BodyContainer,
  BodyImage,
  IconContainer,
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
  Smalltext,
  Stackpics,
  StyledCard,
  StyledIcon,
  StyledImage,
  StyledRow,
  TextContainer,
  TextStyled,
  TimeBar,
  TitleContainer,
  Username,
  UsernameContainer,
  UserPic,
} from "../styles/Body.styled.js";
import { FaCircle, FaStar, FaUserFriends } from "react-icons/fa";
import Pic from "../../assets/sukunaHalal.jpg";
// import Pic2 from "../../assets/mashle.jpeg";
// import Pic3 from "../../assets/kimetsu.jpeg";
import numPic from "../../assets/NumPicture.png";
import RdvUsers from "../../components/RdvBar.jsx";
import CardResults from "../../components/CardResults.jsx";
// import ToggleSwitch from "../../components/SwitchButton.jsx";

function Body() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((myjson) => setData(myjson))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    getData();
  }, []);

  const renderRdvUsers = (users) => {
    return users.map((user) => (
      <RdvUsers key={user.id} name={user.username} location={user.location} />
    ));
  };

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

              <CardResults
                cardDetails={"Resultat des entretiens"}
                status={"Status des candidats apres entretien"}
              />
            </StyledCard>
          </Col>

          <Col md={4}>
            <StyledCard>
              <IconContainer>
                <StyledIcon>
                  <FaCircle style={{ color: "#474fff", fontSize: "70px" }} />
                </StyledIcon>
                <StyledIcon>
                  <TiStarburst style={{ color: "#ffffff", fontSize: "40px" }} />
                </StyledIcon>
              </IconContainer>

              <CardResults
                cardDetails={"Resultat des entretiens"}
                status={"Status des candidats apres entretien"}
              />
            </StyledCard>
          </Col>

          <Col md={4}>
            <StyledCard>
              <IconContainer>
                <StyledIcon>
                  <FaCircle style={{ color: "#474fff", fontSize: "70px" }} />
                </StyledIcon>
                <StyledIcon>
                  <FaUserFriends
                    style={{ color: "#ffffff", fontSize: "40px" }}
                  />
                </StyledIcon>
              </IconContainer>

              <CardResults
                cardDetails={"Resultat des entretiens"}
                status={"Status des candidats apres entretien"}
              />
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
                {data.length > 0 && data[0]["Cette semaine"] && (
                  <Col lg={{ span: 6, offset: 0 }} xs={12}>
                    <Smalltext style={{ color: "#a0b0c9" }}>
                      Cette Semaine: 13-17 mai
                    </Smalltext>
                    {data[0]["Cette semaine"].map((user) => (
                      <RdvUsers
                        key={user.id}
                        name={user.username}
                        location={user.location}
                      />
                    ))}
                  </Col>
                )}
                {data.length > 0 && data[1]["la semaine prochaine"] && (
                  <Col lg={{ span: 6, offset: 0 }} xs={12}>
                    <Smalltext style={{ color: "#a0b0c9" }}>
                      La semaine prochaine: 20-24 mai
                    </Smalltext>
                    {/* {renderRdvUsers(data[1]["la semaine prochaine"])} */}
                    {data[0]["Cette semaine"].map((user) => (
                      <RdvUsers
                        key={user.id}
                        name={user.username}
                        location={user.location}
                      />
                    ))}
                  </Col>
                )}
              </Row>
            </RdvCard>
          </Col>

          <Col lg={{ span: 4, offset: 0 }} xs={{ span: 12, offset: 0 }}>
            <StyledCard>
              <ImportIcon style={{ border: "none" }}>
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
