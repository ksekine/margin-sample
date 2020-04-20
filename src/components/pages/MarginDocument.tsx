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

const TextContainer = styled.div`
  width: 100%;
  max-width: 700px;
`

const Paragraph = styled.p`
  line-height: 1.7;
  margin-bottom: 30px;
`;

const Formula = styled.p`
  margin-bottom: 30px;
  background-color: #E5E5E5;
  padding: 20px 16px;
  line-height: 1.7;
  border-radius: 5px;
`;

const MarginDocument: React.FC = () => {
  return (
    <>
      <Title>計算方法</Title>
      <TextContainer>
        <Paragraph>
          <>FXにおいて，証拠金維持率は重要な数値です．</>
          <>証拠金維持率の値によって，追証やロスカットの適用が決まります．</>
          <>取引の前に現在のレートがどれくらい変化した場合に，どれくらいの証拠金維持率になるのかを把握しておくことは非常に重要です．</>
          <br />
          <>ここでは，証拠金維持率の計算方法をご紹介します．</>
        </Paragraph>
        <Paragraph>
          <>証拠金維持率とは，取引に必要な証拠金に対する純資産総額の割合のことを指します．</>
          <>言い換えると，必要証拠金の額を１としたときに，どれくらいの純資産を持っているかを表す数値です．</>
          <>次の式で表されます．</>
        </Paragraph>
        <Formula>
          証拠金維持率 = 純資産総額 / 必要証拠金 * 100
        </Formula>
        <Formula>
          純資産総額 = 預入証拠金 + 取引損益
        </Formula>
        <Formula>
          必要証拠金 = 約定レート * 取引数量 / レバレッジ
        </Formula>
      </TextContainer>
    </>
  );
};

export default MarginDocument;
