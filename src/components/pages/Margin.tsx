import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
} from "@material-ui/core";
import styled from "styled-components";
import TableContent from "../molecules/TableContent";
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

const Form = styled.form`
  margin-bottom: 50px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FieldContainer = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;

  @media ${device.laptop} {
    margin-bottom: 30px;
  }
`;

const ErrorContainer = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const RequiredContainer = styled.div`
  display: flex;
  border: solid 1px rgba(224, 224, 224, 1);
  border-radius: 5px;
  padding: 30px 16px;
  margin-bottom: 30px;
  font-size: 14px;

  @media ${device.tablet} {
    display: inline-flex;
    font-size: 1rem;
  }
`;

const RequiredText = styled.div`
  width: 100%;

  @media ${device.tablet} {
    margin-right: 100px;
    width: auto;
  }
`;

const RequiredNum = styled.div`
  width: 100%;
  text-align: right;

  @media ${device.tablet} {
    width: auto;
  }
`;

const TableContainer = styled.div`
  margin-bottom: 50px;
`;

type FormData = {
  depositeMargin: number;
  execRate: number;
  quantity: number;
  leverage: number;
  position: string;
};

interface Data {
  marginRate: number;
  exchangeRate: number;
  profitAndLoss: number;
}

const radioList: string[] = ["買い", "売り"];

const calcExchangeRate = (
  position: string,
  marginRate: number,
  leverage: number,
  execRate: number,
  depositeMargin: number,
  quantity: number
) => {
  let exchangeRate: number;
  let profitAndLoss: number;

  if (position === radioList[0]) {
    exchangeRate =
      Math.round(
        ((1.0 + marginRate / leverage) * execRate - depositeMargin / quantity) *
          100
      ) / 100;
    profitAndLoss = Math.floor((exchangeRate - execRate) * quantity);
  } else {
    exchangeRate =
      Math.round(
        ((1.0 - marginRate / leverage) * execRate + depositeMargin / quantity) *
          100
      ) / 100;
    profitAndLoss = Math.floor((execRate - exchangeRate) * quantity);
  }

  return {
    exchangeRate,
    profitAndLoss,
  };
};

const Margin: React.FC = () => {
  const marginRateList = [0.3, 0.5, 1.0, 2.0];
  const [data, setData] = useState<Data[]>([
    { marginRate: 0.3, exchangeRate: -1, profitAndLoss: -1 },
    { marginRate: 0.5, exchangeRate: -1, profitAndLoss: -1 },
    { marginRate: 1.0, exchangeRate: -1, profitAndLoss: -1 },
    { marginRate: 2.0, exchangeRate: -1, profitAndLoss: -1 },
  ]);
  const [required, setRequired] = useState<number>(0);
  const { register, handleSubmit, control, errors } = useForm<FormData>();
  const onSubmit = handleSubmit(
    ({ depositeMargin, execRate, quantity, leverage, position }) => {
      const tmpData: Data[] = [];
      marginRateList.map((marginRate) => {
        const { exchangeRate, profitAndLoss } = calcExchangeRate(
          position,
          marginRate,
          leverage,
          execRate,
          depositeMargin,
          quantity
        );

        tmpData.push({
          marginRate,
          exchangeRate,
          profitAndLoss,
        });
      });
      setData(tmpData);

      const req: number = Math.ceil((execRate * quantity) / leverage);
      setRequired(req);
    }
  );

  return (
    <>
      <Title>証拠金維持率計算</Title>
      <Form onSubmit={onSubmit}>
        <FormContainer>
          <FieldContainer>
            <TextField
              inputRef={register({ required: true })}
              label="預入証拠金"
              name="depositeMargin"
              variant="outlined"
              type="number"
            />
            <ErrorContainer>
              {errors.depositeMargin && <div>数値を入力してください</div>}
            </ErrorContainer>
          </FieldContainer>

          <FieldContainer>
            <TextField
              inputRef={register({ required: true })}
              label="約定レート"
              name="execRate"
              variant="outlined"
              type="number"
              inputProps={{step: 0.001}}
            />
            <ErrorContainer>
              {errors.execRate && <div>数値を入力してください</div>}
            </ErrorContainer>
          </FieldContainer>

          <FieldContainer>
            <TextField
              inputRef={register({ required: true })}
              label="取引数量"
              name="quantity"
              variant="outlined"
              type="number"
              inputProps={{step: 0.001}}
            />
            <ErrorContainer>
              {errors.quantity && <div>数値を入力してください</div>}
            </ErrorContainer>
          </FieldContainer>

          <FieldContainer>
            <TextField
              inputRef={register({ required: true })}
              label="レバレッジ"
              name="leverage"
              variant="outlined"
              type="number"
            />
            <ErrorContainer>
              {errors.leverage && <div>数値を入力してください</div>}
            </ErrorContainer>
          </FieldContainer>
        </FormContainer>

        <FieldContainer>
          <FormLabel>ポジション</FormLabel>
          <Controller
            name="position"
            as={
              <RadioGroup row>
                {radioList.map((item) => (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={<Radio color="default" />}
                    label={item}
                  />
                ))}
              </RadioGroup>
            }
            control={control}
            defaultValue={radioList[0]}
          />
        </FieldContainer>

        <Button type="submit" variant="outlined" color="primary" size="large">
          計算
        </Button>
      </Form>

      <RequiredContainer>
        <RequiredText>取引必要証拠金</RequiredText>
        <RequiredNum>
          {required > 0 ? required.toLocaleString() : "-"} 円
        </RequiredNum>
      </RequiredContainer>

      <TableContainer>
        <TableContent rows={data} />
      </TableContainer>
    </>
  );
};

export default Margin;
