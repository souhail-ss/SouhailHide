import React from "react";
import {
  IconContainer,
  Smalltext,
  Stackpics,
  StyledCard,
  StyledIcon,
  UserPic,
} from "../Containers/styles/Body.styled";
import { FaCircle } from "react-icons/fa";
import { TiStarburst } from "react-icons/ti";

import Pic from "../assets/sukunaHalal.jpg";

import Pic2 from "../assets/kimetsu.jpeg";
import Pic3 from "../assets/mashle.jpeg";

// import NumPic from "../assets/mashle.jpeg";
import PicNum from"../assets/NumPicture.png";

const CardResults = (Logo) => {
  return (
    <>
      <StyledCard>
        <IconContainer>
            
          <StyledIcon>
            <FaCircle style={{ color: "#474fff", fontSize: "60px" }} />
          </StyledIcon>
          <StyledIcon>
            <TiStarburst style={{ color: "#ffffff", fontSize: "40px" }} />
          </StyledIcon>
          {/* <IconContainer>
                <StyledIcon>
                  <FaCircle style={{ color: "#474fff", fontSize: "60px" }} />
                </StyledIcon>
                <StyledIcon>
                  <TiStarburst style={{ color: "#ffffff", fontSize: "40px" }} />
                </StyledIcon>

              </IconContainer> */}
              {/* <IconContainer>
                <StyledIcon>
                  <FaCircle style={{ color: "#474fff", fontSize: "70px" }} />
                </StyledIcon>
                <StyledIcon>
                  <HiOutlineChatBubbleOvalLeftEllipsis
                    style={{ color: "#ffffff", fontSize: "40px" }}
                  />
                </StyledIcon>
              </IconContainer> */}
        </IconContainer>

        <h3>Resultat des entretiens</h3>
        <Smalltext style={{ color: "#a0b0c9" }}>
          Status des candidats apres entretien
        </Smalltext>

        <Stackpics direction="horizontal">
          <UserPic src={Pic}></UserPic>
          <UserPic src={Pic2}></UserPic>
          <UserPic src={Pic3}></UserPic>
          <UserPic src={PicNum}></UserPic>
        </Stackpics>
      </StyledCard>
    </>
  );
};

export default CardResults;
