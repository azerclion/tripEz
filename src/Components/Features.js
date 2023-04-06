import React from "react";
import styled from "styled-components";

const FeatureContainer = styled.div`
  width: ${(props) => (props.width < 768 ? "100vw" : "1200px")};
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleBox = styled.div`
  margin-bottom: 50px;
  font-size: 28px;
`;
const BoxContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  flex-direction: ${(props) => (props) => props.width > 768 ? "row" : "column"};
  justify-content: center;
  align-items: center;
`;
const FeatureBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IconBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: whitesmoke;
`;
const TextBox = styled.div`
  height: 200px;
  padding: 30px;
`;

function Features({ width }) {
  return (
    <FeatureContainer width={width}>
      <TitleBox>Features</TitleBox>
      <BoxContainer width={width}>
        <FeatureBox>
          <IconBox></IconBox>
          <TextBox>
            플래티노 코리아는 세계적인 체인 호텔 그룹인 진장 인터네셔널 호텔
            그룹의 한국 법인으로 세계적인 호텔 브랜드를 한국에 도입하여 국내
            비즈니스 호텔분야의 세계화와 고급화를 선도해 나가고 있습니다.
          </TextBox>
        </FeatureBox>
        <FeatureBox>
          <IconBox></IconBox>
          <TextBox>
            플래티노 코리아는 세계적인 체인 호텔 그룹인 진장 인터네셔널 호텔
            그룹의 한국 법인으로 세계적인 호텔 브랜드를 한국에 도입하여 국내
            비즈니스 호텔분야의 세계화와 고급화를 선도해 나가고 있습니다.
          </TextBox>
        </FeatureBox>
        <FeatureBox>
          <IconBox></IconBox>
          <TextBox>
            플래티노 코리아는 세계적인 체인 호텔 그룹인 진장 인터네셔널 호텔
            그룹의 한국 법인으로 세계적인 호텔 브랜드를 한국에 도입하여 국내
            비즈니스 호텔분야의 세계화와 고급화를 선도해 나가고 있습니다.
          </TextBox>
        </FeatureBox>
      </BoxContainer>
    </FeatureContainer>
  );
}

export default Features;
