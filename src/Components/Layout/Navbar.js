import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { windowDimensionsStateAtom } from "../../Recoil";
import CarouselNaviBar from "../Carousel/CarouselNaviBar";
// import Logo from "../assets/Logo.png";
import navItems from "../NavItems";

import { BsWallet2 } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

const NavbarContainer = styled.div`
  height: 50px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: lightGrey;
  border: none;
  z-index: 10;
  @media (max-width: ${(props) => props.width}px) {
    width: ${(props) => (props.width > 1280 ? 1280 : props.width)}px;
  }
`;
const NavbarInnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;
`;
const LeftNavbarContainer = styled.div`
  display: flex;
  flex: 70%;
  justify-content: flex-start;
  align-items: flex-start;
  color: black;
  background-color: lightGrey;
  border: none;
`;
const RightNavbarContainer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightGrey;
  border: none;
`;
const HamburgerButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 25px;
  align-self: center;
  cursor: pointer;
  border: none;
  color: white;
  background-color: transparent;
`;
const NavList = styled.div`
  width: 60vw;
  height: 100vh;
  position: absolute;
  top: 50px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 20px;
  padding-left: 20px;
  background-color: yellow;
  z-index: 10;
  ${(props) => (props.move ? `display: none;` : `display: flex;`)}
  ${(props) => (props.extendNavbar ? `display: flex;` : `display: none;`)}
  @media (min-width: 540px) {
    width: 40vw;
  }
  @media (min-width: 768px) {
    width: 40vw;
  }
  @media (min-width: 820px) {
    width: 40vw;
  }
  @media (min-width: 912px) {
    width: 40vw;
  }
  @media (min-width: 1024px) {
    width: 30vw;
  }
  @media (min-width: 1280px) {
    width: 300px;
    left: calc(50% - 640px);
  }
`;
const NavbarLink = styled(Link)`
  color: black;
  font-size: 14px;
  margin: 10px;
  border: none;
  @media (max-width: 360px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;
const LogoTitle = styled.span`
  margin-right: 10px;
  font-size: 12px;
  align-self: center;
  border: none;
`;
// const NavbarExtendedContainer = styled.div`
//   width: 70vw;
//   height: 100vh;
//   padding-top: 50px;
//   padding-left: 5%;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   background-color: dimgray;
// `;

// const LogoImage = styled.img`
//   width: 30px;
//   height: auto;
//   align-self: center;
//   border: none;
// `;
// eslint-disable-next-line

function Navbar(props) {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [move, setMove] = useState(false);
  const windowDimensions = useRecoilValue(windowDimensionsStateAtom);

  const hamburgerClick = () => {
    setExtendNavbar(!extendNavbar);
  };

  const clickMove = () => {
    setMove(!move);
    setExtendNavbar(false);
  };

  useEffect(() => {
    console.log(
      "windowDimensions",
      windowDimensions.width,
      windowDimensions.height
    );
  }, [windowDimensions]);

  return (
    <>
      <NavbarContainer width={windowDimensions.width}>
        <NavbarInnerContainer extendNavbar={extendNavbar}>
          <LeftNavbarContainer>
            <HamburgerButton onClick={hamburgerClick}>
              {extendNavbar ? <>&#10005;</> : <> &#9776;</>}
            </HamburgerButton>
            <NavList move={move} extendNavbar={extendNavbar}>
              {navItems.map((item, index) => (
                <NavbarLink
                  key={index}
                  onClick={clickMove}
                  move={move}
                  to={item.path}
                >
                  {item.title}
                </NavbarLink>
              ))}
            </NavList>
            <CarouselNaviBar width={windowDimensions.width} />
          </LeftNavbarContainer>
          <RightNavbarContainer>
            <LogoTitle>Trip|EZ</LogoTitle>
            <BsWallet2></BsWallet2>
            <AiOutlineGlobal></AiOutlineGlobal>
            {/* <LogoImage src={Logo} alt="logo" /> */}
          </RightNavbarContainer>
        </NavbarInnerContainer>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
