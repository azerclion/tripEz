import React from "react";
import styled from "styled-components";

const FaqContainer = styled.div`
  width: ${(props) => (props.width < 768 ? "100vw" : "900px")};
  margin-top: 0px;
  margin-bottom: 50px;
`;
const FaqBox = styled.div`
  margin-top: 20px;
  padding: 10px;
`;
const Query = styled.div`
  margin-bottom: 10px;
`;
const Answer = styled.div`
  font-size: 14px;
`;

function FAQ({ width }) {
  return (
    <FaqContainer width={width}>
      <FaqBox>
        <Query>► 플래티노 코리아에 대해서 알려주세요.</Query>
        <Answer>
          플래티노 코리아는 JINJIANG INTERNATIONAL(진장 인터네셔널)의 한국
          법인입니다. 진장 인터네셔널은 아시아 1위 체인 호텔 프렌차이즈
          그룹입니다. 매년 발행되는 HOTEL Ranking의 보고서에 따르면 메리어트,
          쉐라톤등의 브랜드를 보유한 MARRIOT INTERNATIONAL이 가장 많은 호텔
          객실을 보유하고 있으며, 그 뒤를 이어 J-hotel, Radisson, Plateno,
          Ruvre, Vienna 등의 호텔 그룹을 인수한 JINJIANG INTERNATIONAL이 2위에
          랭크되었습니다. [Hotel Ranking Link (Pg34) :
          https://tinyurl.com/2lkolz8e]
        </Answer>
      </FaqBox>
      <FaqBox>
        <Query>
          ► 플래티노 코리아와 트립이지 24x7의 관계에 대해서 알려주세요.
        </Query>
        <Answer>
          트립이지 24x7 (Trip l EZ 24x7)은 플래티노 코리아의 크립토 프로젝트
          브랜드 입니다. 트립이지 24x7 브랜드는 국˙내외 블록체인 프로젝트팀과
          협업하여 중간 업체 수수료가 난무하는 전통적인 호텔 운영 판매에서
          벗어나 이용 고객에게 혜택을 돌려주는 WEB3 개념을 도입하기 위하여
          런칭한 크립토 브랜드입니다.
        </Answer>
      </FaqBox>
    </FaqContainer>
  );
}

export default FAQ;
