import { Card, Container, Row, Stack } from "react-bootstrap";
import styled from "styled-components";
import imgg from "../../assets/bodyimage.jpg";

export const BodyContainer = styled.div`
  background-color: #e4e4e4;
  width: 100%;
  min-height: 1000px;
`;
export const TitleContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  /* background-color: white; */
`;

export const BodyImage = styled.div`
  height: 380px;
  background: url(${imgg});
  border-radius: 30px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex; //ila bghiti
  align-items: center;
  padding: 0 30px; // kadfa3 l conent li ldakhel margin kadfa3 rassha
`;
export const SearchDiv = styled.div`
  height: 245px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  /* margin-top:60px; */
  border-radius: 15px;
  width: 105%;
  margin-bottom: 80px;
  box-shadow: 1px 10px 15px 0px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(40px);
`;
export const SearchTitle = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  /* margin-left: 35px; */
  justify-content: center;
  padding: 30px;
  /* background-color: black; */
`;

export const SearchButton = styled.button`
  /*   
  
  font-size: 16px;
  background-color:rgba(59,86,194,1);
  display:flex   ;
  
  color: white;
  
  border: none;
  border-radius: 50px;
   */

  background-color: rgba(71, 79, 255);
  color: white;
  padding: 0 40px 0;
  border: none;
  border-radius: 40px;
  font-size: 18px;
  height: 50px;
  margin-right: 15px;
  margin-bottom: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  display: flex;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    background-color: #003f7f;
    transform: scale(1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
  }
`;
export const StyledCard = styled(Card)`
  background-color: white;
  height: 350px;
  width: 100%;
  border-radius: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  display: flex;
  
`;

export const InnerCard = styled(Card)`
  /* margin-top: 40%; */
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */

  position: absolute;
  bottom: -1px; /* Adjust this value as needed */
  background-color: rgba(71, 79, 255);
  width: 101%; /* Adjust width as needed */
  display: flex;
  justify-content: center;
`;

export const StyledRow = styled(Row)`
  /* padding: 11%; */
  margin-top: -60px; //Move this row up to overlap
  /* z-index: 2; //Ensure this row is on top */
  /* position: relative; */
  /* justify-content: space-around ; */
`;

export const UserPic = styled.img`
  width: 50px; /* Adjust as needed */
  height: 50px; /* Adjust as needed */
  border-radius: 50%; /* To make the images circular */
  object-fit: cover;
  margin-left: -15px; /* Adjust the overlap by changing this value */
  border: 2px solid #f0f0f0;
  ///* Optional: To create a border around each image */&:first-child {margin-left: 0; /* Remove margin for the first image */}
`;
export const Stackpics = styled(Stack)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
`;
export const TextContainer = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  margin-left: 30%;
  justify-content: center;
  color: #ffffff;
  /* background-color: white; */
`;
export const ImportIcon = styled.div`
  /* margin-top: 40%; */
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */

  position: absolute;
  bottom: 168px; /* Adjust this value as needed */

  width: 101%; /* Adjust width as needed */
  display: flex;
`;
export const AnotherRow = styled(Row)`
  height: 180px;
  display: flex;
  flex-direction: column;
  margin-left: 28%;
  justify-content: center;
  color: black;
`;
export const RdvBar = styled.div`
  height: 60px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  width: 100%;
  margin-bottom: 30px;
  padding: 0 19px;
  border: 1px solid #e0e0e0;
  padding-top: 5px;

  // Full width on xs screens
  @media (max-width: 576px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
export const RdvCard = styled(Card)`
  /* height: auto;  */
  background-color: rgba(255, 255, 255);
  border-radius: 30px;
  width: 100%;
  margin-bottom: 30px;
  padding: 0 19px;
  border: px solid #e0e0e1;
  padding-top: 5px;
  display: flex;
   flex-direction: column; 
  /* Stack content vertically */
`;
export const TimeBar = styled(Card)`
  background-color: rgba(71, 79, 255);
  color: white;

  border-radius: 40px;
  
  /* font-size: 15px; */
  height: 50px;
  width: 130px;

  display: flex;
  

  flex-direction: column;
  text-align: center;
  justify-content: center;
`;
export const UsernameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Username = styled.span`
margin-top: 5px;
  font-size: 16px;
  font-weight: bold;
`;

export const AdditionalText = styled.span`
  font-size: 12px;
  margin-top: -2px;
`;
export const RdvPic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  /* margin-right: -20px; */
`;
export const StyledImage = styled.div`
  height: 200px;
  width: 100%;
  background: linear-gradient(to top, #e4e4e4, rgba(255, 255, 255, 0)),
    url("https://static.vecteezy.com/system/resources/previews/006/240/302/non_2x/abstract-soft-focus-sunset-field-landscape-of-yellow-flowers-and-grass-meadow-warm-golden-hour-sunset-sunrise-time-tranquil-spring-summer-nature-closeup-and-blurred-forest-background-idyllic-nature-photo.jpg")
      no-repeat center/cover;
  z-index: 3;
  opacity: 1;
  margin-bottom: 20px;
`;
export const Biggertext = styled.h1`
font-family: "Roboto", Arial, Helvetica, sans-serif;
font-size: 50px;

font-weight: 700;
`;
export const Smalltext = styled.h6`
font-family: Arial, Helvetica, sans-serif;
font-size: 16px;
`;

export const IconContainer = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 60px;
  width: 50px; /* Adjust based on your icon size */
  height: 50px; /* Adjust based on your icon size */
`;
export const StyledIcon = styled.div`
  /* font-size: 50px;  */
  position: absolute;

  //Make sure icons overlap Adjust based on your preference /* Adjust based on your preference */
`;
