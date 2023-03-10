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
import { picRight } from "../data/ImageList";
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
  /* width: ${(props) => (props.width < 500 ? 400 : 1182)}; */
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
  height: ${(props) => (props.width < 500 ? 500 : 605)}px;
  /* margin-top: ${(props) => props.width < 500 && 300}px; */
  display: flex;
  justify-content: flex-end;
  justify-content: ${(props) => (props.width < 500 ? "center" : "flex-end")};
  align-items: center;
  background-color: ${(props) => props.bg};
  div {
    /* width: 600px; */
    width: ${(props) => (props.width < 500 ? 100 : 40)}vw;
    height: ${(props) => (props.width < 500 ? 400 : 500)}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div:nth-child(1) {
      height: 60px;
      margin-right: ${(props) => (props.width < 500 ? 10 : 0)}px;
      font-size: 70px;
      font-size: ${(props) => (props.width < 500 ? 40 : 70)}px;
      font-weight: 600;
      /* color: #ffdc25; */
      color: #50c5df;
    }
    div:nth-child(2) {
      height: 60px;
      margin-right: ${(props) => (props.width < 500 ? 10 : 0)}px;
      font-size: 25px;
      font-size: ${(props) => (props.width < 500 ? 20 : 25)}px;
      font-weight: 600;
      color: #d4cab4;
    }
    p {
      margin-top: 50px;
      padding: 20px;
      font-size: ${(props) => (props.width < 500 ? 16 : 20)}px;
      font-weight: 600;
      line-height: ${(props) => (props.width < 500 ? 1.5 : 2)}rem;
    }
  }
`;
const ItemBox2 = styled.div`
  width: ${(props) => (props.width < 500 ? 100 : 50)}vw;
  height: 605px;
  /* background-color: ${(props) => props.bg}; */
  display: flex;
  justify-content: ${(props) => (props.width < 500 ? "center" : "flex-start")};
  align-items: center;
  div {
    width: ${(props) => (props.width < 500 ? 350 : 600)}px;
    height: ${(props) => (props.width < 500 ? 350 : 600)}px;
    /* background-color: whitesmoke; */
    background-image: url(${picRight});
    background-size: ${(props) => props.width < 500 && 100}vw;
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
  // width??? ?????? Slick??? ????????? props??? ?????? ??? ???!
  return (
    <Container>
      <IntroBox width={windowDimensions.width}>
        <ItemBox1 bg={"transparent"} width={windowDimensions.width}>
          <div>
            <div>WORLDWIDE</div>
            <div>????????? ??????????????? ??????????????????</div>
            <p>
              ??????????????? ????????????????????? ???????????? ???????????? ???????????? ?????? ??????
              ???????????? ????????? ?????? ???????????? ????????? ???????????? WEB3 ????????? ?????????
              ???????????? ??????????????????.
            </p>
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
    </Container>
  );
}

export default Main;
