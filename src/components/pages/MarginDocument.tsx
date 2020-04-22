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
          <>ここでは，ビットコインFXを例に証拠金維持率の計算方法をご紹介します．</>
        </Paragraph>
        <Paragraph>
          <>証拠金維持率とは，取引に必要な証拠金に対する純資産総額の割合のことを指します．</>
          <>言い換えると，必要証拠金の額を１としたときに，どれくらいの純資産を持っているかを表す数値です．</>
          <>次の式で表されます．括弧内は単位を表しています．</>
        </Paragraph>
        <Formula>
          <code>証拠金維持率(%) = 純資産総額(JPY) / 必要証拠金(JPY) * 100</code>
        </Formula>
        <Paragraph>
          さらに，必要証拠金は次の式で表されます．
        </Paragraph>
        <Formula>
          <code>必要証拠金(JPY) = 約定レート(JPY/BTC) * 取引数量(BTC) / レバレッジ</code>
        </Formula>
        <Paragraph>
          そして，純資産総額は次の式で表されます．
        </Paragraph>
        <Formula>
          <code>純資産総額(JPY) = 預入証拠金(JPY) + 取引損益(JPY)</code>
        </Formula>
      </TextContainer>
    </>
  );
};

export default MarginDocument;
