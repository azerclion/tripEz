import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { windowDimensionsStateAtom } from "../../Recoil";

const FooterContainer = styled.div`
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

function Footer(props) {
  const windowDimensions = useRecoilValue(windowDimensionsStateAtom);
  return (
    <FooterContainer width={windowDimensions.width}>
      <div>이용약관 | 개인정보처리방침 | 지점안내</div>
      <div>회사소개 1.</div>
      <div>회사소개 2.</div>
    </FooterContainer>
  );
}

export default Footer;
