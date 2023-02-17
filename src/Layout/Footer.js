import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { windowDimensionsStateAtom } from "../Recoil";

import { BsTwitter, BsInstagram, BsTelegram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const FooterContainer = styled.div`
  width: ${(props) => (props.width < 500 ? 400 : 1182)}px;
  height: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  @media (max-width: ${(props) => props.width}px) {
    width: ${(props) => (props.width > 1280 ? 1280 : props.width)}px;
  }
  div {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: black;
    flex: 1;
  }
  div:last-child {
    margin-bottom: 50px;
  }
`;
const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px; ;
`;
const SocialContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  span {
    width: 50px;
    margin: 4px;
    font-size: 20px;
  }
`;

function Footer(props) {
  const windowDimensions = useRecoilValue(windowDimensionsStateAtom);
  return (
    <FooterContainer width={windowDimensions.width}>
      <div>이용약관 | 개인정보처리방침 </div>
      <CompanyInfo>
        <div>대표 : 김이지</div>
        <div>전화번호 : 010-0987-6543</div>
        <div>사업자번호 : 987-65-43210</div>
        <div>E-mail : tripEZ@hompage.co.kr</div>
      </CompanyInfo>

      <SocialContainer>
        <span>
          <BsTwitter />
        </span>
        <span>
          <BsInstagram />
        </span>
        <span>
          <FaDiscord />
        </span>
        <span>
          <BsTelegram />
        </span>
      </SocialContainer>
    </FooterContainer>
  );
}

export default Footer;
