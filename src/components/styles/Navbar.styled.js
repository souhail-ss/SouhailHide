import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 10%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  /* border-radius: 10% 10% 10% 70%; */
  border-bottom-left-radius: 7px ;
  border-bottom-right-radius: 7px ;
  box-shadow: 1px 1px 10px 0px gray;
 
`;

export const StyledLogo = styled.div`
  font-size: 32px;
  color: rgb(26, 91, 255);
  font-weight: 700;
`;

export const LogoImage = styled.img`
  height: 40px;
  width: 150px;
`;

export const StyledIcons = styled.div`
  font-size: 21px; /* Increase the icon size */
  display: flex;
  color: #6F6F6F;
 gap: 20px;

 
  cursor: pointer; /* Add cursor pointer to indicate clickability */



`;
