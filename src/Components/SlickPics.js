import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import zizz_01 from "../assets/images/1.jpg";
import zizz_02 from "../assets/images/2.jpg";
import zizz_03 from "../assets/images/3.jpg";
import zizz_04 from "../assets/images/4.jpg";
import zizz_05 from "../assets/images/5.jpg";
import zizz_06 from "../assets/images/6.jpg";
import zizz_07 from "../assets/images/7.jpg";
import zizz_08 from "../assets/images/8.jpg";
import zizz_09 from "../assets/images/9.jpg";

const SlickContainer = styled.div`
  width: ${(props) => (props.width < 768 ? "100vw" : "1200px")};
  margin-top: 10px;
  margin-bottom: 10px;
`;
const PicBox = styled.div`
  /* width: 50px; */
  height: 200px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PicItem = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 150px;
  border: 4px solid whitesmoke;
  font-size: 48px;
  color: whitesmoke;
  background-color: rebeccapurple;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

function SlickPics({ width, rtl }) {
  const [slideNumber, setSlideNumber] = useState(3);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slideNumber,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: rtl,
    arrows: false,
  };

  useEffect(() => {
    if (width < 768) {
      setSlideNumber(1.5);
    } else {
      setSlideNumber(4);
    }
  }, [width]);

  return (
    <SlickContainer width={width}>
      {/* <h2>ZIZZ NFTS</h2> */}
      <Slider {...settings}>
        <PicBox>
          <PicItem bg={zizz_01}></PicItem>
        </PicBox>
        <PicBox>
          <PicItem bg={zizz_02}></PicItem>
        </PicBox>
        <PicBox>
          <PicItem bg={zizz_03}></PicItem>
        </PicBox>
        <PicBox>
          <PicItem bg={zizz_04}></PicItem>
        </PicBox>
        <PicBox>
          <PicItem bg={zizz_05}></PicItem>
        </PicBox>
        <PicBox>
          <PicItem bg={zizz_06}></PicItem>
        </PicBox>
        <PicBox>
          <PicItem bg={zizz_07}></PicItem>
        </PicBox>
        <PicBox>
          <PicItem bg={zizz_08}></PicItem>
        </PicBox>
        <PicBox>
          <PicItem bg={zizz_09}></PicItem>
        </PicBox>
      </Slider>
    </SlickContainer>
  );
}

export default SlickPics;
