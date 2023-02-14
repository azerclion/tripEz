import React from "react";
import styled from "styled-components";

import RoadMap_01 from "../assets/images/roadMap_01.png";
import RoadMap_02 from "../assets/images/roadMap_02.png";
const RoadComponent = styled.div`
  /* width: ${(props) => (props.width < 500 ? 400 : 1182)}px; */
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 500) {
    width: 100vw;
  }
  color: whitesmoke;
`;
// const Title = styled.div`
//   margin: 0 auto;
//   font-size: 24;
// `;
const EachRoadBox = styled.div`
  width: ${(props) => (props.width < 500 ? 350 : 900)}px;
  height: ${(props) => (props.width < 500 ? 350 : 600)}px;
  background-image: url(${(props) => props.bg});
  /* background-size: 600px; */
  background-repeat: no-repeat;
  background-position: center;
`;

function Roadmap({ width }) {
  return (
    <RoadComponent width={width}>
      <EachRoadBox width={width} bg={RoadMap_01}></EachRoadBox>
      <EachRoadBox width={width} bg={RoadMap_02}></EachRoadBox>
    </RoadComponent>
  );
}

export default Roadmap;
