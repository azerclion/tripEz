import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
`;

function Event() {
  return <Container>Coming soon</Container>;
}

export default Event;
