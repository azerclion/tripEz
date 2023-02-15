import React from "react";
import styled from "styled-components";

import TextList from "../Components/TextList";
import TripezLogo from "../assets/images/tripezLogo.png";

const RoadComponent = styled.div`
  /* width: ${(props) => (props.width < 500 ? 400 : 1182)}px; */
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 500) {
    width: 100vw;
  }
  background-color: #223656;
`;

const EachRoadBox = styled.div`
  width: ${(props) => (props.width < 500 ? 350 : 1184)}px;
  height: ${(props) => (props.width < 500 ? 350 : 738)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: aliceblue;
  border: 1px solid lightgrey; */
`;
const LogoImage = styled.div`
  width: ${(props) => (props.width < 500 ? 152 : 456)}px;
  height: ${(props) => (props.width < 500 ? 57 : 171)}px;
  background-image: url(${TripezLogo});
  background-size: ${(props) => (props.width < 500 ? 90 : 100)}%;
  background-repeat: no-repeat;
  background-position: center;
`;
const TitleBox = styled.div`
  margin-top: ${(props) => (props.width < 500 ? 50 : 50)}px;
  font-size: ${(props) => (props.width < 500 ? 22 : 30)}px;
  color: #ffdc25;
`;
const TextBox = styled.div`
  width: ${(props) => (props.width < 500 ? 290 : 900)}px;
  font-size: ${(props) => (props.width > 500 ? "18px" : "14px")};
  margin-top: 20px;
  line-height: 1.5;
  text-align: justify;
  @media (max-width: ${(props) => props.width}px) {
    width: ${(props) => (props.width > 1023 ? 1024 : props.width)}px;
    padding-left: ${(props) =>
      props.width < 768 ? 10 : props.width > 1023 ? 200 : 110}px;
    padding-right: ${(props) =>
      props.width < 768 ? 10 : props.width > 1023 ? 200 : 110}px;
  }
  color: whitesmoke;
`;

function Description({ width }) {
  return (
    <RoadComponent width={width}>
      <EachRoadBox width={width}>
        <LogoImage width={width}></LogoImage>
        <TitleBox width={width}>{TextList.intro.title}</TitleBox>
        <TextBox width={width}>{TextList.intro.paragraph}</TextBox>
        <TextBox width={width}>{TextList.companyDescription.paragraph}</TextBox>
      </EachRoadBox>
    </RoadComponent>
  );
}

export default Description;
