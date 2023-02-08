import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

// import CarouselSwiper from "../Components/Carousel/CarouselSwiper";
import { windowDimensionsStateAtom } from "../Recoil";

import TextList from "../Components/TextList";
import Roadmap from "../Components/Roadmap";
import Benefit from "../Components/Benefit";
import Tokenomics from "../Components/Tokenomics";
import SlickPics from "../Components/SlickPics";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IntroBox = styled.div`
  /* width: 1182px; */
  width: ${(props) => (props.width < 500 ? 400 : 1182)};
  height: 605px;
  display: flex;
  /* flex-direction: row; */
  flex-direction: ${(props) => (props) => props.width > 400 ? "row" : "column"};
  justify-content: center;
  align-items: center;
`;
const ItemBox = styled.div`
  width: 100vw;
  height: 605px;
  background-color: ${(props) => props.bg};
`;
const TextBox = styled.div`
  padding: 20px;
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
const OpenButton = styled.button`
  margin-top: 50px;
`;

function Main(props) {
  const windowDimensions = useRecoilValue(windowDimensionsStateAtom);
  // width에 따라 Slick에 갯수를 props로 내려 줄 것!
  return (
    <Container>
      <IntroBox width={windowDimensions.width}>
        <ItemBox bg={"red"}></ItemBox>
        <ItemBox bg={"green"}></ItemBox>
      </IntroBox>
      <TextBox width={windowDimensions.width}>{TextList.intro.title}</TextBox>
      <TextBox width={windowDimensions.width}>
        {TextList.intro.paragraph}
      </TextBox>
      <OpenButton>펼치기</OpenButton>
      <Roadmap width={windowDimensions.width}></Roadmap>
      <Benefit width={windowDimensions.width}></Benefit>
      <Tokenomics width={windowDimensions.width}></Tokenomics>
      <SlickPics width={windowDimensions.width}></SlickPics>
      {/* <CarouselSwiper width={windowDimensions.width} />
      <TextBox width={windowDimensions.width}>
        {TextList.text_02.paragraph}
      </TextBox> */}
    </Container>
  );
}

export default Main;
