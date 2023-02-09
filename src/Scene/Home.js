import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

// import CarouselSwiper from "../Components/Carousel/CarouselSwiper";
import { windowDimensionsStateAtom } from "../Recoil";

// import TextList from "../Components/TextList";
import Description from "../Components/Description";
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
const Title = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  font-size: 24;
`;
const OpenButton = styled.button`
  margin-top: 10px;
`;

function Main(props) {
  const [openRoadmap, setOpenRoadmap] = useState(false);
  const windowDimensions = useRecoilValue(windowDimensionsStateAtom);
  // width에 따라 Slick에 갯수를 props로 내려 줄 것!
  return (
    <Container>
      <IntroBox width={windowDimensions.width}>
        <ItemBox bg={"red"}></ItemBox>
        <ItemBox bg={"green"}></ItemBox>
      </IntroBox>

      <Description width={windowDimensions.width}></Description>
      <Title>Roadmap</Title>
      <OpenButton onClick={() => setOpenRoadmap(!openRoadmap)}>
        {openRoadmap ? "닫기" : "펼치기"}
      </OpenButton>
      {openRoadmap ? <Roadmap width={windowDimensions.width}></Roadmap> : null}

      <Benefit width={windowDimensions.width}></Benefit>
      <Tokenomics width={windowDimensions.width}></Tokenomics>
      <SlickPics width={windowDimensions.width} rtl={false}></SlickPics>
      <SlickPics width={windowDimensions.width} rtl={true}></SlickPics>
      {/* <CarouselSwiper width={windowDimensions.width} />
      <TextBox width={windowDimensions.width}>
        {TextList.text_02.paragraph}
      </TextBox> */}
    </Container>
  );
}

export default Main;
