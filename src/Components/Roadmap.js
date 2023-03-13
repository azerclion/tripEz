import React from "react";
import styled from "styled-components";

// import RoadMap_01 from "../assets/images/roadMap_01.png";
// import RoadMap_02 from "../assets/images/roadMap_02.png";

const RoadComponent = styled.div`
  /* width: ${(props) => (props.width < 500 ? 400 : 1182)}px; */
  /* margin: 0 auto; */
  margin-top: 50px;
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
  @media (max-width: 500) {
    width: 100vw;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  div {
    padding: 6px;
    font-size: 14px;
  }
`;

function Roadmap({ width }) {
  return (
    <RoadComponent width={width}>
      <EachRoadBox>
        <div>2023. 03 TripEz Landing page launching</div>
        <div>2023. 04 Discord Bot launching</div>
        <div>2023. 05 zizz Token mint</div>
        <div>2023. 06 Dynamic NFT with ChainLink</div>
        <div>2023. 06 zizz NFT sale for O.G</div>
        <div>2023. 07 Open zizz NFT public minting service</div>
        <div>2023. 08 Listing on a zizz Token Exchange</div>
        <div>2023. 09 DOTW </div>
        <div>2023. 10 Membership program</div>
        <div>2023. 11 Price comparison</div>
        <div>2023. 12 Ai assistant</div>
        <div>...</div>
        <div>2024. 01 Travel Insurance option</div>
        <div>2024. 02 Multi Language Support</div>
        <div>2024. 03 Customizable Travel preference</div>
        <div>2024. 04 Group Booking Support</div>
        <div>2024. 05 Partnership with Global DAO</div>
      </EachRoadBox>
    </RoadComponent>
  );
}

export default Roadmap;
