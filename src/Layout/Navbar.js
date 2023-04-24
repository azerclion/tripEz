import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { windowDimensionsStateAtom } from "../Recoil";
import CarouselNaviBar from "../Components/CarouselNaviBar";
import navItems from "../data/NavItems";

import logoTripezOnTop from "../assets/images/logoTripezOnTop.png";
import { BsWallet2 } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

import Web3 from "web3";
import Identicon from "react-identicons";

const NavbarContainer = styled.div`
  width: ${(props) => (props.width > 768 ? "1300px" : "100vw")};
  height: 50px;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  background-color: #223656;
  border: none;
  z-index: 10;

  /* @media (max-width: ${(props) => props.width}px) {
    width: ${(props) => (props.width > 1280 ? 1280 : props.width)}px;
  } */
`;
const NavbarInnerContainer = styled.div`
  width: ${(props) => (props.width > 768 ? "1200px" : "100vw")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;
  background-color: transparent;
`;
const LeftNavbarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: whitesmoke;
  background-color: transparent;
  border: none;
`;
const RightNavbarContainer = styled.div`
  /* width: 150px; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: whitesmoke;
  /* background-color: #223656; */
  border: none;
  background-color: transparent;
`;
const IconBoxRight = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
  background-color: transparent;
  cursor: pointer;
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
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 20px;
  padding-left: 20px;
  background-color: whitesmoke;
  z-index: 10;
  ${(props) => (props.move ? `display: none;` : `display: flex;`)}
  ${(props) => (props.extendNavbar ? `display: flex;` : `display: none;`)}
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
const LogoTitle = styled.div`
  width: 100px;
  height: 50px;
  /* margin-left: 10px; */
  background-image: url(${logoTripezOnTop});
  background-size: ${(props) => (props.width < 500 ? 90 : 100)}%;
  background-repeat: no-repeat;
  background-position: center;
`;
const Message = styled.div`
  margin-top: 4px;
  font-size: 12px;
`;

function Navbar(props) {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [move, setMove] = useState(false);
  const windowDimensions = useRecoilValue(windowDimensionsStateAtom);

  const [web3, setWeb3] = useState(null);
  const [message, setMessage] = useState("");
  const [showAccount, setShowAccount] = useState(false);
  const [userAccount, setUserAccount] = useState();

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

  async function walletHandler() {
    try {
      if (typeof window.ethereum !== "undefined") {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setShowAccount(true);
        await getUserAccountInfo();
        setMessage("");
      } else {
        setMessage("Please install MetaMask");
      }
    } catch (err) {
      setMessage(err.message);
    }
  }
  async function getUserAccountInfo() {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    setUserAccount(accounts[0]);
  }
  useEffect(() => {
    try {
      if (typeof window.ethereum !== "undefined") {
        setWeb3(new Web3(window.ethereum));
      }
    } catch (error) {
      setMessage(error.message);
    }
  }, []);

  return (
    <NavbarContainer width={windowDimensions.width}>
      <NavbarInnerContainer
        width={windowDimensions.width}
        extendNavbar={extendNavbar}
      >
        <LeftNavbarContainer>
          <LogoTitle></LogoTitle>
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
          <Message>{message}</Message>
          {showAccount ? (
            <div>
              <span style={{ marginRight: "10px", fontSize: "12px" }}>
                {String(userAccount).slice(0, 6)}...
                {String(userAccount).slice(-5)}
              </span>
              <Identicon
                string={`${userAccount}+randomness+0-`}
                size="15"
                bg="#000000"
                fg="#FFAFB8"
              />
            </div>
          ) : (
            <IconBoxRight onClick={walletHandler}>
              <BsWallet2></BsWallet2>
            </IconBoxRight>
          )}

          <IconBoxRight>
            <AiOutlineGlobal></AiOutlineGlobal>
          </IconBoxRight>
          {/* <LogoImage src={Logo} alt="logo" /> */}
          {windowDimensions.width < 768 ? (
            <HamburgerButton onClick={hamburgerClick}>
              {extendNavbar ? <>&#10005;</> : <> &#9776;</>}
            </HamburgerButton>
          ) : null}
        </RightNavbarContainer>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
}

export default Navbar;
