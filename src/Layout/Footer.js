import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { windowDimensionsStateAtom } from "../Recoil";

import { BsTwitter, BsInstagram, BsTelegram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const FooterContainer = styled.div`
  width: 100vw;
  height: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: black; */
`;
const CompanyInfo = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    /* background-color: black; */
  }
`;
const SocialContainer = styled.div`
  width: ${(props) => (props.width > 768 ? "1200px" : "100vw")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const SocialIcon = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  /* background-color: black; */
  font-size: 25px;
`;

function Footer(props) {
  const windowDimensions = useRecoilValue(windowDimensionsStateAtom);
  return (
    <FooterContainer width={windowDimensions.width}>
      <SocialContainer width={windowDimensions.width}>
        <SocialIcon>
          <BsTwitter />
        </SocialIcon>
        <SocialIcon>
          <BsInstagram />
        </SocialIcon>
        <SocialIcon>
          <FaDiscord />
        </SocialIcon>
        <SocialIcon>
          <BsTelegram />
        </SocialIcon>
      </SocialContainer>

      <CompanyInfo>
        <div style={{ fontSize: "18px", marginBottom: "30px" }}>
          이용약관 | 개인정보처리방침{" "}
        </div>
        <div>대표 : 김이지</div>
        <div>전화번호 : 010-0987-6543</div>
        <div>사업자번호 : 987-65-43210</div>
        <div>E-mail : tripEZ@hompage.co.kr</div>
      </CompanyInfo>
    </FooterContainer>
  );
}

export default Footer;
