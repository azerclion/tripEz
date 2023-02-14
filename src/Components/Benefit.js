import React from "react";
import styled from "styled-components";

import TextList from "../Components/TextList";
import BenefitRebate from "../assets/images/benifitRebate.png";
import HolderParty from "../assets/images/holderPart.png";
import MysteryBox from "../assets/images/mysteryBox.png";

const RoadComponent = styled.div`
  /* width: ${(props) => (props.width < 500 ? 400 : 1182)}px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 500) {
    width: 100vw;
  }
  color: whitesmoke;
`;
const Title = styled.div`
  margin: 0 auto;
  margin: 50px;
  font-size: 24px;
`;
const TextBox = styled.div`
  padding: 20px;
  font-size: ${(props) => (props.width > 768 ? "18px" : "1rem")};
  line-height: 1.5;
  @media (max-width: ${(props) => props.width}px) {
    width: ${(props) => (props.width > 1023 ? 1024 : props.width)}px;
    padding-left: ${(props) =>
      props.width < 768 ? 10 : props.width > 1023 ? 200 : 110}px;
    padding-right: ${(props) =>
      props.width < 768 ? 10 : props.width > 1023 ? 200 : 110}px;
  }
`;
const EachRoadBox = styled.div`
  width: ${(props) => (props.width < 500 ? 350 : 900)}px;
  height: ${(props) => (props.width < 500 ? 350 : 600)}px;
  background-image: url(${(props) => props.bg});
  /* background-size: 600px; */
  background-repeat: no-repeat;
  background-position: center;
`;

function Benefit({ width }) {
  return (
    <RoadComponent width={width}>
      <Title>Benefit</Title>
      <TextBox width={width}>{TextList.rebateSystem.title}</TextBox>
      <TextBox width={width}>{TextList.rebateSystem.paragraph}</TextBox>
      <EachRoadBox width={width} bg={BenefitRebate}></EachRoadBox>
      <TextBox width={width}>{TextList.holderParty.title}</TextBox>
      <TextBox width={width}>{TextList.holderParty.paragraph}</TextBox>
      <EachRoadBox width={width} bg={HolderParty}></EachRoadBox>
      <TextBox width={width}>{TextList.mysteryBox.title}</TextBox>
      <TextBox width={width}>{TextList.mysteryBox.paragraph}</TextBox>
      <EachRoadBox width={width} bg={MysteryBox}></EachRoadBox>
    </RoadComponent>
  );
}

export default Benefit;
