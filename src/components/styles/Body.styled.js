import { Card, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import imgg from '../../assets/bodyimage.jpg';
import { StyledIcons } from './Navbar.styled';

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
padding: 0 30px; // kadfa3 l conent li ldakhel margin kadfa3 rassha


`;
export const SearchDiv = styled.div`
  height: 245px;
  background-color: rgba(255, 255, 255,0.5);
  display: flex;
  /* margin-top:60px; */
  border-radius: 15px;
  width: 110%;
  margin-bottom:80px;
  box-shadow: 1px 10px 15px 0px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(40px);
  
`
export const SearchTitle = styled.div`
   height: 180px;
   display: flex;
   flex-direction: column;
   /* margin-left: 35px; */
   justify-content: center;
   padding: 30px;
   /* background-color: black; */
`  
  
export const SearchButton =styled.button`
/*   
  
  font-size: 16px;
  background-color:rgba(59,86,194,1);
  display:flex   ;
  
  color: white;
  
  border: none;
  border-radius: 50px;
   */

  background-color: rgba(71,79,255);
  color: white;
  padding: 0 40px 0;
  border: none;
  border-radius: 40px;
  font-size: 15px;
  height: 40px;
  margin-bottom: 35px;
  flex-direction: column;
   align-items: center;
   justify-content: center;
 
   
  
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  display:flex;

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
  
`
export const StyledCard = styled(Card)`
background-color: white;
height:350px;
width:100%;
flex-direction: column;
   align-items: center;
   justify-content: center;
   
   /* display: flex; */


`
export const StyledRow = styled(Row)`
  /* padding: 11%; */
  margin-top: -60px; //Move this row up to overlap
  /* z-index: 2; //Ensure this row is on top */
  /* position: relative; */
  /* justify-content: space-around ; */
`
// export StyledIcons = styled