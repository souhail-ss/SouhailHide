import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import imgg from '../../assets/bodyimage.jpg';

export const BodyContainer = styled(Container)`
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
   /* background-color: white; */
 `;

 export const BodyImage = styled.div`
 height:380px;
 background: url(${imgg});
border-radius: 30px;
background-repeat: no-repeat; 
background-size: cover;
background-position:center;
display: flex; //ila bghiti 
align-items: center;
padding: 0 40px; // kadfa3 l conent li ldakhel margin kadfa3 rassha


`;
export const SearchDiv = styled.div`
  height: 215px;
  background-color: rgba(255, 255, 255,0.5);
  display: flex;
  /* margin-top:60px; */
  border-radius: 15px;
  margin-bottom: 40px;
  box-shadow: 1px 10px 15px 0px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(40px);
`
export const SearchTitle = styled.div`
   height: 200px;
   display: flex;
   flex-direction: column;
   margin-left: 35px;
   justify-content: center;
   /* background-color: black; */
`  
  
export const SearchButton =styled.button`
  background-color: rgba(88, 122, 220); /* Primary blue color */
  color: white; /* Text color */
  padding: 10px 20px; /* Padding for button size */
  border: none; /* Remove default border */
  border-radius: 5px; /* Rounded corners */
  font-size: 16px; /* Font size */
  font-weight: bold; /* Bold text */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s, transform 0.3s; /* Smooth transition for hover effects */
 height: 45px;
 width:200px;
  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
    transform: scale(1.05); /* Slightly enlarge on hover */
  }

  &:active {
    background-color: #003f7f; /* Even darker blue on click */
    transform: scale(1); /* Reset size on click */
  }

  &:focus {
    outline: none; /* Remove focus outline */
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5); /* Add focus shadow */
  }

`