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
const Pic = styled.div`
  /* width: 50px; */
  height: 200px;
  background-color: teal;
  margin: 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Number = styled.div`
  width: 50px;
  height: 50px;
  font-size: 48px;
  background-color: rebeccapurple;
`;

function SlickPics({ width, rtl }) {
  const [slideNumber, setSlideNumber] = useState(3);

  const settings = {
    dots: true,
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
        <Pic>
          <Number>1</Number>
        </Pic>
        <Pic>
          <Number>2</Number>
        </Pic>
        <Pic>
          <Number>3</Number>
        </Pic>
        <Pic>
          <Number>4</Number>
        </Pic>
        <Pic>
          <Number>5</Number>
        </Pic>
        <Pic>
          <Number>6</Number>
        </Pic>
      </Slider>
    </SlickContainer>
  );
}

export default SlickPics;
