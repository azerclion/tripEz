import React from "react";
import styled from "styled-components";

import Feature_01 from "../assets/images/1.jpg";
import Feature_04 from "../assets/images/4.jpg";
import Feature_08 from "../assets/images/8.jpg";

const FeatureContainer = styled.div`
  width: ${(props) => (props.width < 768 ? "100vw" : "1200px")};
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleBox = styled.div`
  margin-bottom: 50px;
  font-size: 28px;
`;
const BoxContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props) => props.width > 768 ? "row" : "column"};
  justify-content: center;
  align-items: center;
`;
const FeatureBox = styled.div`
  width: ${(props) => (props.width < 768 ? "100vw" : "300px")};
  margin: ${(props) => (props.width < 768 ? "0" : "10px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
const IconBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;

  background-image: url(${(props) => props.logo});
  background-size: ${(props) => (props.width < 768 ? 80.6 : 200)}%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: whitesmoke;
`;
const TextBox = styled.div`
  height: 150px;
  margin-top: 20px;
  font-size: 16px;
`;

function Features({ width }) {
  return (
    <FeatureContainer width={width}>
      <TitleBox>Features</TitleBox>
      <BoxContainer width={width}>
        <FeatureBox>
          <IconBox logo={Feature_01}></IconBox>
          <TextBox>
            Cryptocurrency Payments: TriplEZ enables users to make travel
            reservations with cryptocurrencies, eliminating the need for
            traditional payment methods.
          </TextBox>
        </FeatureBox>
        <FeatureBox>
          <IconBox logo={Feature_04}></IconBox>
          <TextBox>
            Direct Booking Processing: TriplEZ processes bookings directly
            without intermediary fees, ensuring that users receive the best
            possible value for their money.
          </TextBox>
        </FeatureBox>
        <FeatureBox>
          <IconBox logo={Feature_08}></IconBox>
          <TextBox>
            Cashback Rewards: TriplEZ rewards users for holding Triplez NFT
            (ZIZZ) by offering ZZZ Token cashback on their travel bookings.
          </TextBox>
        </FeatureBox>
      </BoxContainer>
    </FeatureContainer>
  );
}

export default Features;
