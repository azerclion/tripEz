import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import ImageList from "../ImageList.js";

const CarouselContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 280px) {
    width: 280px;
  }
  @media (min-width: 375px) {
    width: 375px;
  }
  @media (min-width: 390px) {
    width: 390px;
  }
  @media (min-width: 393px) {
    width: 393px;
  }
  @media (min-width: 412px) {
    width: 412px;
  }
  @media (min-width: 414px) {
    width: 414px;
  }
  @media (min-width: 540px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 540px;
  }
  @media (min-width: 820px) {
    width: 540px;
  }
  @media (min-width: 912px) {
    width: 540px;
  }
  @media (min-width: 1024px) {
    width: 600px;
  }
  @media (min-width: 1280px) {
    width: 600px;
  }
`;
const Image = styled.img`
  width: 360px;
  object-fit: cover;
  margin: 0 auto;
  @media (max-width: 280px) {
    width: 280px;
  }
  @media (min-width: 375px) {
    width: 375px;
  }
  @media (min-width: 390px) {
    width: 390px;
  }
  @media (min-width: 393px) {
    width: 393px;
  }
  @media (min-width: 412px) {
    width: 412px;
  }
  @media (min-width: 414px) {
    width: 414px;
  }
  @media (min-width: 540px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 540px;
  }
  @media (min-width: 820px) {
    width: 540px;
  }
  @media (min-width: 912px) {
    width: 540px;
  }
  @media (min-width: 1024px) {
    width: 600px;
  }
  @media (min-width: 1280px) {
    width: 600px;
  }
`;

function CarouselResponse({ width }) {
  return (
    <CarouselContainer width={width}>
      <Carousel
        showStatus={false}
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showThumbs={false}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={true}

        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        {ImageList.map((item, index) => (
          <div key={index}>
            <Image src={item.imgName} />
          </div>
        ))}
      </Carousel>
    </CarouselContainer>
  );
}

export default CarouselResponse;
