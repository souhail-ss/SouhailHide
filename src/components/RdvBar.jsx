// import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import {
  AdditionalText,
  RdvBar,
  RdvPic,
  TimeBar,
  Username,
  UsernameContainer,
} from "./styles/Body.styled";
import Pic from "../assets/sukunaHalal.jpg";
import { Col, Row } from "react-bootstrap";
function UserNames({ Picture, name, location }) {
  return (
    <RdvBar>
      <Row>
        <Col xs={2}>
          <RdvPic src={Pic}></RdvPic>
        </Col>
        <Col>
          <UsernameContainer>
            <Username>
              <a>{name}</a>
            </Username>

            <AdditionalText>
              <a>{location}</a>
            </AdditionalText>
          </UsernameContainer>
        </Col>
        <TimeBar>
          13/05/24
          <br />
          <a style={{ fontSize: "15px" }}>10h00-11h00</a>
        </TimeBar>
      </Row>
    </RdvBar>
  );
}
export default UserNames;
