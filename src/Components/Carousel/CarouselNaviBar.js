import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { windowDimensionsStateAtom } from "../../Recoil";
import { useRecoilValue } from "recoil";
import navItems from "../NavItems";

const CarouselContainer = styled.div`
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: orchid;
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1rem;
    text-align: center;
    background-color: orchid;
    color: white;
    div:first-child {
      margin-left: 10px;
    }
  }
  @media (max-width: 280px) {
    width: 280px;
  }
  @media (max-width: ${(props) => props.width}px) {
    width: ${(props) => (props.width > 1280 ? 1280 : props.width)}px;
  }
`;

function CarouselNaviBar({ width }) {
  const windowDimensions = useRecoilValue(windowDimensionsStateAtom);
  return (
    <CarouselContainer width={windowDimensions.width}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={width > 1279 ? 9 : width > 1023 ? 6 : 4}
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
