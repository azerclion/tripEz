import React from "react";
import styled from "styled-components";

import BenefitTitle from "../assets/images/BENEFIT.svg";
import RebatePic from "../assets/images/REBATE.svg";
import HolderParty from "../assets/images/HORDERPARTY.svg";
import MysteryBox from "../assets/images/MYSTERYBOX.svg";

const BenefitComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: whitesmoke;
  background-color: #426bff;
`;

const Title = styled.div`
  width: ${(props) => (props.width < 768 ? `100vw` : `1200px`)};
  height: ${(props) => (props.width < 768 ? 50 : 100)}px;
  margin-top: 50px;
  margin-bottom: 20px;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center;
`;
const BigTitle = styled.div`
  width: ${(props) => (props.width < 768 ? `100vw` : `1200px`)};
  height: ${(props) => (props.width < 768 ? 350 : 350)}px;
  margin-bottom: 20px;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: center;
`;

function Benefit({ width }) {
  return (
    <BenefitComponent width={width}>
      <Title width={width} bg={BenefitTitle}></Title>
      <BigTitle width={width} bg={RebatePic}></BigTitle>
      <BigTitle width={width} bg={HolderParty}></BigTitle>
      <BigTitle width={width} bg={MysteryBox}></BigTitle>
    </BenefitComponent>
  );
}

export default Benefit;
