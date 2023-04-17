import React from "react";
import styled from "styled-components";

// import TextList from "../data/TextList";
import TripezLogo from "../assets/images/triplEZ_Logo.svg";
import DescriptionText from "../assets/images/descriptionText.svg";
import HotelNumberText from "../assets/images/hotelNumber.svg";
import HotelLogo_01 from "../assets/images/hotelLogo_01.svg";
import HotelLogo_02 from "../assets/images/hotelLogo_02.svg";
import HotelLogo_03 from "../assets/images/hotelLogo_03.svg";
import HotelLogo_04 from "../assets/images/hotelLogo_04.svg";
import HotelLogo_05 from "../assets/images/hotelLogo_05.svg";

const DescriptionComponent = styled.div`
  width: ${(props) => (props.width < 768 ? `100vw` : `1200px`)};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #a7f500;
`;

const EachRoadBox = styled.div`
  width: ${(props) => (props.width < 768 ? `100vw` : `1200px`)};
  height: ${(props) => (props.width < 768 ? `100%` : `100%`)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LogoImage = styled.div`
  width: ${(props) => (props.width < 768 ? 157 : 300)}px;
  height: ${(props) => (props.width < 768 ? 57 : 150)}px;
  margin-top: 40px;
  margin-bottom: 28px;
  background-image: url(${TripezLogo});
  background-size: ${(props) => (props.width < 500 ? 90 : 100)}%;
  background-repeat: no-repeat;
  background-position: center;
`;

const TextBoxNew = styled.div`
  width: ${(props) => (props.width < 768 ? 321 : 600)}px;
  height: ${(props) => (props.width < 768 ? 157 : 200)}px;
  margin-bottom: 60px;
  background-image: url(${DescriptionText});
  background-repeat: no-repeat;
  background-position: center;
`;
const HotelNumber = styled.div`
  width: ${(props) => (props.width < 768 ? 298 : 500)}px;
  height: ${(props) => (props.width < 768 ? 34 : 100)}px;

  background-image: url(${HotelNumberText});
  background-repeat: no-repeat;
  background-position: center;
`;
const HotelLogoBox = styled.div`
  width: 100vw;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HotelLogo = styled.div`
  width: ${(props) => (props.width < 768 ? 80 : 80)}px;
  height: ${(props) => (props.height < 768 ? 40 : 40)}px;

  background-image: url(${(props) => props.logo});
  background-size: ${(props) => (props.width < 768 ? 80.6 : 100)}%;
  background-repeat: no-repeat;
  background-position: center;
`;

const WhiteListButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 112px;
  height: 32px;
  border: 1px solid black;
  border-radius: 6px;
  font-size: 16px;
  color: black;
  background-color: whitesmoke;
  font-family: SBAggroOTFM, sans-serif, Arial;
`;

function Description({ width }) {
  return (
    <DescriptionComponent width={width}>
      <EachRoadBox width={width}>
        <LogoImage width={width}></LogoImage>
        <TextBoxNew width={width}></TextBoxNew>
        <HotelNumber width={width}></HotelNumber>
        <HotelLogoBox>
          <HotelLogo width={width} logo={HotelLogo_01}></HotelLogo>
          <HotelLogo width={width} logo={HotelLogo_02}></HotelLogo>
          <HotelLogo width={width} logo={HotelLogo_03}></HotelLogo>
          <HotelLogo width={width} logo={HotelLogo_04}></HotelLogo>
          <HotelLogo width={width} logo={HotelLogo_05}></HotelLogo>
        </HotelLogoBox>
        {/* <TitleBox width={width}>{TextList.intro.title}</TitleBox> */}
        {/* <TextBox width={width}>{TextList.intro.paragraph}</TextBox> */}
        {/* <TextBox width={width}>{TextList.companyDescription.paragraph}</TextBox> */}
        <WhiteListButton>WHITELIST</WhiteListButton>
      </EachRoadBox>
    </DescriptionComponent>
  );
}

export default Description;
