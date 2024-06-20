import React from 'react';
import styled from 'styled-components';
import { BsBell, BsChatDotsFill, BsPersonCircle } from 'react-icons/bs';
import fb from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';

// Styled Components
export const FooterWrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  bottom: 0;
  left: 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 4rem;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  text-align: left;
  margin-bottom: 2rem;
`;

const FooterLinkDiv = styled.div`
  width: 150px;
  margin: 1rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: #000000;
`;

const FooterLink = styled.a`
  color: #c3c0c0;
  text-decoration: none;
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 10px;
`;

const FooterBelow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.2rem;
`;

const FooterBelowLinks = styled.div`
  display: flex;
  flex-direction: row;
`;

const FooterLinkText = styled.p`
  font-size: 12px;
  line-height: 15px;
  margin: 0.5rem 0;
  cursor: pointer;
`;

const FooterCopyright = styled.p`
  font-size: 13px;
  line-height: 15px;
  color: rgb(91, 91, 91);
  font-weight: 600;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterLinks>
          <FooterLinkDiv>
            <h3>Legal</h3>
            <FooterLink href=''><FooterLinkText>something</FooterLinkText></FooterLink>
            <FooterLink href=''><FooterLinkText>something</FooterLinkText></FooterLink>
            <FooterLink href=''><FooterLinkText>something</FooterLinkText></FooterLink>
          </FooterLinkDiv>

          <FooterLinkDiv>
            <h3>Confidentiale</h3>
            <FooterLink href=''><FooterLinkText>something</FooterLinkText></FooterLink>
            <FooterLink href=''><FooterLinkText>something</FooterLinkText></FooterLink>
            <FooterLink href=''><FooterLinkText>something</FooterLinkText></FooterLink>
          </FooterLinkDiv>

          <FooterLinkDiv>
            <h3>Compte</h3>
            <FooterLink href=''><FooterLinkText>something</FooterLinkText></FooterLink>
            <FooterLink href=''><FooterLinkText>something</FooterLinkText></FooterLink>
            <FooterLink href=''><FooterLinkText>something</FooterLinkText></FooterLink>
          </FooterLinkDiv>

          <FooterLinkDiv>
            <h3>Aide</h3>
            <FooterLink href=''><FooterLinkText>something</FooterLinkText></FooterLink>
            <FooterLink href=''><FooterLinkText>something</FooterLinkText></FooterLink>
            <FooterLink href=''><FooterLinkText>something</FooterLinkText></FooterLink>
          </FooterLinkDiv>

          <FooterLinkDiv>
            <h3>Newsletter</h3>
            <FooterLink href=''><FooterLinkText>something</FooterLinkText></FooterLink>
          </FooterLinkDiv>
        </FooterLinks>

        <hr style={{ color: 'black', width: '100%' }} />

        <FooterBelow>
          <FooterCopyright>@2020</FooterCopyright>
          <FooterBelowLinks>
            <p><Icon src={fb} alt='Facebook' /></p>
            <p><Icon src={twitter} alt='Twitter' /></p>
            <p><Icon src={linkedin} alt='LinkedIn' /></p>
          </FooterBelowLinks>
        </FooterBelow>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
