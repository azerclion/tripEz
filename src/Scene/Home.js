import React, { useState, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

// import CarouselSwiper from "../Components/Carousel/CarouselSwiper";
import { windowDimensionsStateAtom } from "../Recoil";

// import TextList from "../Components/TextList";
import Features from "../Components/Features";
import Description from "../Components/Description";
import Roadmap from "../Components/Roadmap";
import Benefit from "../Components/Benefit";
import Tokenomics from "../Components/Tokenomics";
import SlickPics from "../Components/SlickPics";
import FAQ from "../Components/FAQ";

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

const MainBox = styled.div`
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CanvasBox = styled.div``;
const TriplEZ = styled.div`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  z-index: 1;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 40px;
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
  // width에 따라 Slick에 갯수를 props로 내려 줄 것!

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let w = canvas.width;
    let h = canvas.height;
    let particles = [];

    const opts = {
      particleColor: "rgb(200,200,200)",
      lineColor: "rgb(200,200,200)",
      particleAmount: 30,
      defaultSpeed: 1,
      variantSpeed: 1,
      defaultRadius: 2,
      variantRadius: 2,
      linkRadius: 200,
    };

    window.addEventListener("resize", function () {
      deBouncer();
    });

    let deBouncer = function () {
      clearTimeout(tid);
      tid = setTimeout(function () {}, delay);
    };

    let checkDistance = function (x1, y1, x2, y2) {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    let linkPoints = function (point1, hubs) {
      for (let i = 0; i < hubs.length; i++) {
        let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
        let opacity = 1 - distance / opts.linkRadius;
        if (opacity > 0) {
          drawArea.lineWidth = 0.5;
          drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
          drawArea.beginPath();
          drawArea.moveTo(point1.x, point1.y);
          drawArea.lineTo(hubs[i].x, hubs[i].y);
          drawArea.closePath();
          drawArea.stroke();
        }
      }
    };

    let Particle = function (xPos, yPos) {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed;
      this.directionAngle = Math.floor(Math.random() * 360);
      this.color = opts.particleColor;
      this.radius = opts.defaultRadius + Math.random() * opts.variantRadius;
      this.vector = {
        x: Math.cos(this.directionAngle) * this.speed,
        y: Math.sin(this.directionAngle) * this.speed,
      };
      this.update = function () {
        this.border();
        this.x += this.vector.x;
        this.y += this.vector.y;
      };
      this.border = function () {
        if (this.x >= w || this.x <= 0) {
          this.vector.x *= -1;
        }
        if (this.y >= h || this.y <= 0) {
          this.vector.y *= -1;
        }
        if (this.x > w) this.x = w;
        if (this.y > h) this.y = h;
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
      };
      this.draw = function () {
        drawArea.beginPath();
        drawArea.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        drawArea.closePath();
        drawArea.fillStyle = this.color;
        drawArea.fill();
      };
    };

    function setup() {
      for (let i = 0; i < opts.particleAmount; i++) {
        particles.push(new Particle());
      }
      window.requestAnimationFrame(loop);
    }

    function loop() {
      window.requestAnimationFrame(loop);
      drawArea.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      for (let i = 0; i < particles.length; i++) {
        linkPoints(particles[i], particles);
      }
    }

    const drawArea = canvas.getContext("2d");
    let delay = 200,
      tid,
      rgb = opts.lineColor.match(/\d+/g);
    setup();
  });

  return (
    <Container>
      <MainBox>
        <CanvasBox>
          <canvas ref={canvasRef}></canvas>
        </CanvasBox>
        <TriplEZ>
          <div>triplEZ</div>
        </TriplEZ>
      </MainBox>
      <Features width={windowDimensions.width}></Features>
      <IntroBox width={windowDimensions.width}>
        <ItemBox1 bg={"transparent"} width={windowDimensions.width}>
          <div>
            <div>WORLDWIDE</div>
            <div>글로벌 투어리즘을 경험해보세요</div>
            <p>
              트립이지는 플래티노그룹의 블록체인 브랜드로 전통적인 호텔 운영
              판매에서 벗어나 이용 고객에게 혜택을 돌려주는 WEB3 개념을 도입한
              블록체인 브랜드입니다.
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
      <FAQ width={windowDimensions.width}></FAQ>
    </Container>
  );
}

export default Main;
