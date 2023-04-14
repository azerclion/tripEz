import React from "react";
import styled from "styled-components";

// import TokenmicsSvg from "../assets/images/tokenomics.svg";
import TokenoicsInfo from "../assets/images/tokenoInfo.svg";

const TokenomicsComponent = styled.div`
  width: ${(props) => (props.width < 500 ? `100vw` : `1200px`)};

  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #a7f500;
`;

const EachRoadBox = styled.div`
  width: ${(props) => (props.width < 500 ? 350 : 900)}px;
  height: ${(props) => (props.width < 500 ? 500 : 600)}px;
  background-image: url(${(props) => props.bg});
  /* background-size: 600px; */
  background-repeat: no-repeat;
  background-position: center;
  /* background-color: yellowgreen; */
`;

function Tokenomics({ width }) {
  return (
    <TokenomicsComponent width={width}>
      <EachRoadBox width={width} bg={TokenoicsInfo}></EachRoadBox>
    </TokenomicsComponent>
  );
}

export default Tokenomics;
