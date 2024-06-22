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

const CardResults = ({cardDetails,status}) => {
  return (
    <>
      
          
            
            
         
         
        <h3>{cardDetails}</h3>
              <Smalltext style={{ color: "#a0b0c9" }}>
                {status}
              </Smalltext>

    

        <Stackpics direction="horizontal">
          <UserPic src={Pic}></UserPic>
          <UserPic src={Pic2}></UserPic>
          <UserPic src={Pic3}></UserPic>
          <UserPic src={PicNum}></UserPic>
        </Stackpics>

    </>
  );
};

export default CardResults;
