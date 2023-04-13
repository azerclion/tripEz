import React from "react";
import styled from "styled-components";

// import TokenmicsSvg from "../assets/images/tokenomics.svg";
import TokenoicsInfo from "../assets/images/tokenoInfo.svg";

const RoadComponent = styled.div`
  /* width: ${(props) => (props.width < 500 ? 400 : 1182)}px; */
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 500) {
    width: 100vw;
  }
`;
const Title = styled.div`
  margin: 0 auto;
  margin: 50px;
  font-size: 24px;
`;

const EachRoadBox = styled.div`
  width: ${(props) => (props.width < 500 ? 350 : 900)}px;
  height: ${(props) => (props.width < 500 ? 350 : 600)}px;
  background-image: url(${(props) => props.bg});
  /* background-size: 600px; */
  background-repeat: no-repeat;
  background-position: center;
  background-color: yellowgreen;
`;

function Tokenomics({ width }) {
  return (
    <RoadComponent width={width}>
      <Title></Title>
      <EachRoadBox width={width} bg={TokenoicsInfo}></EachRoadBox>
    </RoadComponent>
  );
}

export default Tokenomics;
