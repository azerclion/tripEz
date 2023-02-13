import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import { windowDimensionsStateAtom } from "../../Recoil";
// import { useRecoilValue } from "recoil";
import navItems from "../NavItems";

const CarouselContainer = styled.div`
  width: ${(props) => (props.width > 800 ? 600 : 0)}px;
  height: 50px;
  /* margin: 0 auto; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: black;
  background-color: lightgrey;
  background-color: #223656;
  div {
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    text-align: center;
    background-color: lightgrey;
    background-color: #223656;
    color: whitesmoke;
    div:first-child {
      /* margin-left: 10px; */
    }
  }
  @media (max-width: 280px) {
    width: 280px;
  }
  /* @media (max-width: ${(props) => props.width}px) {
    width: ${(props) => (props.width > 1280 ? 1280 : props.width)}px;
  } */
`;

function CarouselNaviBar({ width }) {
  // const windowDimensions = useRecoilValue(windowDimensionsStateAtom);
  return (
    <CarouselContainer width={width}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={width > 1279 ? 6 : width > 1023 ? 6 : 6}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        a11y={true}
        //   onSwiper={(swiper) => console.log(swiper)}
        //   onSlideChange={() => console.log("slide change")}
      >
        {navItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <Link to={item.path}>{item.title}</Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
}

export default CarouselNaviBar;
