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

// import CockerImage from "../assets/images/cockerSpanielOnPlane.png";
import picRight from "../assets/images/picRight.png";
// import picLeft from "../assets/images/picLeft.png";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
`;
const IntroBox = styled.div`
  /* width: 1182px; */
  width: ${(props) => (props.width < 500 ? 400 : 1182)};
  height: 605px;
  margin-top: 50px;
  display: flex;
  /* flex-direction: row; */
  flex-direction: ${(props) => (props) => props.width > 400 ? "row" : "column"};
  justify-content: center;
  align-items: center;
`;
const ItemBox1 = styled.div`
  width: ${(props) => (props.width < 500 ? 100 : 50)}vw;
  height: 605px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${(props) => props.bg};
  div {
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: black; */
    div:nth-child(1) {
      height: 60px;
      font-size: 50px;
      font-weight: 600;
      /* color: #ffdc25; */
      color: #50c5df;
    }
    div:nth-child(2) {
      height: 60px;
      font-size: 25px;
      font-weight: 600;
      color: #d4cab4;
    }
  }
`;
const ItemBox2 = styled.div`
  width: ${(props) => (props.width < 500 ? 100 : 50)}vw;
  height: 605px;
  /* background-color: ${(props) => props.bg}; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    width: 600px;
    height: 600px;
    /* background-color: whitesmoke; */
    background-image: url(${picRight});
    background-size: 600px;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
const Title = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  font-size: 24px;
`;
const OpenButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 140px;
  height: 40px;
  border: 1px solid transparent;
  border-radius: 80px;
  font-size: 20px;
  color: whitesmoke;
  background-color: hotpink;
`;

function Main(props) {
  const [openRoadmap, setOpenRoadmap] = useState(false);
  const windowDimensions = useRecoilValue(windowDimensionsStateAtom);
  // width에 따라 Slick에 갯수를 props로 내려 줄 것!
  return (
    <Container>
      <IntroBox width={windowDimensions.width}>
        <ItemBox1 bg={"transparent"} width={windowDimensions.width}>
          <div>
            <div>WORLDWIDE</div>
            <div>글로벌 투어리즘을 경험해보세요</div>
          </div>
        </ItemBox1>
        <ItemBox2 bg={"green"} width={windowDimensions.width}>
          <div></div>
        </ItemBox2>
      </IntroBox>
      <Description width={windowDimensions.width}></Description>
      <Title>Roadmap</Title>
      <OpenButton onClick={() => setOpenRoadmap(!openRoadmap)}>
        {openRoadmap ? "CLOSE" : "OPEN"}
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
