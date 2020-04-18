import React from "react";
import styled from "styled-components";
import { device } from "../../styles";

const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 28px;

  @media ${device.tablet} {
    font-size: 32px;
    margin-bottom: 50px;
  }
`;

const MarginDocument: React.FC = () => {
  return (
    <>
      <Title>計算方法</Title>
    </>
  );
};

export default MarginDocument;
