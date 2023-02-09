import React from "react";
import styled from "styled-components";

import TextList from "../Components/TextList";

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
// const Title = styled.div`
//   margin: 0 auto;
//   margin: 50px;
//   font-size: 24;
// `;

const EachRoadBox = styled.div`
  width: ${(props) => (props.width < 500 ? 350 : 1184)}px;
  height: ${(props) => (props.width < 500 ? 350 : 738)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  border: 1px solid lightgrey;
`;

const TextBox = styled.div`
  font-size: ${(props) => (props.width > 768 ? "18px" : "14px")};
  line-height: 1.5;
  @media (max-width: ${(props) => props.width}px) {
    width: ${(props) => (props.width > 1023 ? 1024 : props.width)}px;
    padding-left: ${(props) =>
      props.width < 768 ? 10 : props.width > 1023 ? 200 : 110}px;
    padding-right: ${(props) =>
      props.width < 768 ? 10 : props.width > 1023 ? 200 : 110}px;
  }
`;

function Description({ width }) {
  return (
    <RoadComponent width={width}>
      <EachRoadBox width={width}>
        <TextBox width={width}>{TextList.intro.title}</TextBox>
        <TextBox width={width}>{TextList.intro.paragraph}</TextBox>
      </EachRoadBox>
    </RoadComponent>
  );
}

export default Description;
