import React from "react";
import styled from "styled-components";

import Reserve from "../assets/images/reserve.png";

import ReserveInfo from "../assets/images/reserveInfo.png";
import DiscordTitle from "../assets/images/discordTitle.svg";
import ReservationTitle from "../assets/images/RESERVATION.svg";
import SmallDescript_01 from "../assets/images/smallDescript_01.svg";
import SmallDescript_02 from "../assets/images/smallDescript_02.svg";
import ReservationSample from "../assets/images/reservationSample.svg";

const BenefitComponent = styled.div`
  /* width: ${(props) => (props.width < 500 ? 400 : 1182)}px; */
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 500) {
    width: 100vw;
  }
  color: whitesmoke;
`;

const BigTitle = styled.div`
  width: ${(props) => (props.width < 768 ? 350 : 900)}px;
  height: ${(props) => (props.width < 768 ? 350 : 600)}px;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center;
`;
const Title = styled.div`
  width: ${(props) => (props.width < 768 ? 252 : 900)}px;
  height: ${(props) => (props.width < 768 ? 100 : 600)}px;
  margin-bottom: 20px;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center;
`;
const Content = styled.div`
  width: ${(props) => (props.width < 768 ? 295 : 900)}px;
  height: ${(props) => (props.width < 768 ? 366 : 600)}px;
  margin-bottom: 20px;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center;
`;
const Content02 = styled.div`
  width: ${(props) => (props.width < 768 ? 295 : 900)}px;
  height: ${(props) => (props.width < 768 ? 1000 : 600)}px;
  margin-bottom: 20px;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center;
`;

function Benefit({ width }) {
  return (
    <BenefitComponent width={width}>
      <BigTitle width={width} bg={DiscordTitle}></BigTitle>
      <Title width={width} bg={ReservationTitle}></Title>
      <Content width={width} bg={Reserve}></Content>
      <Title width={width} bg={SmallDescript_01}></Title>
      <Content width={width} bg={ReserveInfo}></Content>
      <Title width={width} bg={SmallDescript_02}></Title>
      <Content02 width={width} bg={ReservationSample}></Content02>
    </BenefitComponent>
  );
}

export default Benefit;
