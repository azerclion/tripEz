import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const SlickContainer = styled.div`
  width: ${(props) => (props.width < 500 ? 350 : 1182)}px;
  /* margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; */
  @media (max-width: 500) {
    width: 100vw;
  }
`;
const PicBox = styled.div`
  /* width: 50px; */
  height: 300px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PicItem = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 150px;
  font-size: 48px;
  color: whitesmoke;
  background-color: rebeccapurple;
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
    if (width < 500) {
      setSlideNumber(1);
    } else {
      setSlideNumber(3);
    }
  }, [width]);

  return (
    <SlickContainer width={width}>
      {/* <h2>ZIZZ NFTS</h2> */}
      <Slider {...settings}>
        <PicBox>
          <PicItem>1</PicItem>
        </PicBox>
        <PicBox>
          <PicItem>2</PicItem>
        </PicBox>
        <PicBox>
          <PicItem>3</PicItem>
        </PicBox>
        <PicBox>
          <PicItem>4</PicItem>
        </PicBox>
        <PicBox>
          <PicItem>5</PicItem>
        </PicBox>
        <PicBox>
          <PicItem>6</PicItem>
        </PicBox>
      </Slider>
    </SlickContainer>
  );
}

export default SlickPics;
