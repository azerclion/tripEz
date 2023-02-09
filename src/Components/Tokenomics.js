import React from "react";
import styled from "styled-components";

const RoadComponent = styled.div`
  /* width: ${(props) => (props.width < 500 ? 400 : 1182)}px; */
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
  font-size: 24;
`;

const EachRoadBox = styled.div`
  width: ${(props) => (props.width < 500 ? 350 : 1184)}px;
  height: ${(props) => (props.width < 500 ? 350 : 738)}px;
  background-color: aliceblue;
  border: 1px solid lightgrey;
`;

function Tokenomics({ width }) {
  return (
    <RoadComponent width={width}>
      <Title>Tokenomics</Title>
      <EachRoadBox width={width}></EachRoadBox>
    </RoadComponent>
  );
}

export default Tokenomics;
