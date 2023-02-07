import React from "react";
import styled from "styled-components";

const RoadComponent = styled.div`
  width: ${(props) => (props.width < 500 ? 400 : 1182)}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Title = styled.div`
  margin: 0 auto;
  margin: 50px;
  font-size: 24;
`;
const EachRoadBox = styled.div`
  width: ${(props) => (props.width < 500 ? 350 : 600)}px;
  height: ${(props) => (props.width < 500 ? 350 : 600)}px;
  background-color: aliceblue;
  border: 1px solid lightgrey;
`;

function Roadmap({ width }) {
  return (
    <RoadComponent width={width}>
      <Title>Roadmap</Title>
      <EachRoadBox width={width}></EachRoadBox>
      <EachRoadBox width={width}></EachRoadBox>
      <EachRoadBox width={width}></EachRoadBox>
      <EachRoadBox width={width}></EachRoadBox>
    </RoadComponent>
  );
}

export default Roadmap;
