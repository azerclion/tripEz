import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { windowDimensionsStateAtom } from "../../Recoil";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  @media (max-width: ${(props) => props.width}px) {
    width: ${(props) => (props.width > 1280 ? 1280 : props.width)}px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
    left: calc(50% - 640px);
  }
`;
const MinBoxContainer = styled.div`
  width: 95%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: hotpink;
  border-radius: 10px;
`;

function MinBox(props) {
  const windowDimensions = useRecoilValue(windowDimensionsStateAtom);
  return (
    <Container width={windowDimensions.width}>
      <MinBoxContainer />
    </Container>
  );
}

export default MinBox;
