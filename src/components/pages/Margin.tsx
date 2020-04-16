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

const Title = styled.h1`
  margin: 3rem auto;
  font-weight: 500;
`;

const Form = styled.form`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FieldContainer = styled.div`
  margin-right: 30px;
  margin-bottom: 30px;
`;

const ErrorContainer = styled.div`
  font-size: 12px;
  color: red;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TableContainer = styled.div`
  margin-bottom: 50px;
`;

type FormData = {
  depositeMargin: number;
  executionRate: number;
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
  executionRate: number,
  depositeMargin: number,
  quantity: number
) => {
  let exchangeRate: number;
  let profitAndLoss: number;

  if (position === radioList[0]) {
    exchangeRate =
      Math.round(
        ((1.0 + marginRate / leverage) * executionRate -
          depositeMargin / quantity) *
          100
      ) / 100;
    profitAndLoss = Math.floor((exchangeRate - executionRate) * quantity);
  } else {
    exchangeRate =
      Math.round(
        ((1.0 - marginRate / leverage) * executionRate +
          depositeMargin / quantity) *
          100
      ) / 100;
    profitAndLoss = Math.floor((executionRate - exchangeRate) * quantity);
  }

  return {
    exchangeRate,
    profitAndLoss,
  };
};

const Margin: React.FC = () => {
  const marginRateList = [0.3, 0.5, 1.0, 2.0];
  const [data, setData] = useState<Data[]>([]);
  const { register, handleSubmit, control, errors } = useForm<FormData>();
  const onSubmit = handleSubmit(
    ({ depositeMargin, executionRate, quantity, leverage, position }) => {
      const tmpData: Data[] = [];
      marginRateList.map((marginRate) => {
        const { exchangeRate, profitAndLoss } = calcExchangeRate(
          position,
          marginRate,
          leverage,
          executionRate,
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
            />
            <ErrorContainer>
              {errors.depositeMargin && <div>This field is required</div>}
            </ErrorContainer>
          </FieldContainer>

          <FieldContainer>
            <TextField
              inputRef={register({ required: true })}
              label="約定レート"
              name="executionRate"
              variant="outlined"
            />
            <ErrorContainer>
              {errors.executionRate && <div>This field is required</div>}
            </ErrorContainer>
          </FieldContainer>

          <FieldContainer>
            <TextField
              inputRef={register({ required: true })}
              label="取引数量"
              name="quantity"
              variant="outlined"
            />
            <ErrorContainer>
              {errors.quantity && <div>This field is required</div>}
            </ErrorContainer>
          </FieldContainer>

          <FieldContainer>
            <TextField
              inputRef={register({ required: true })}
              label="レバレッジ"
              name="leverage"
              variant="outlined"
            />
            <ErrorContainer>
              {errors.leverage && <div>This field is required</div>}
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

        <Button type="submit" variant="outlined" color="primary">
          計算
        </Button>
      </Form>

      <TableContainer>
        <TableContent rows={data} />
      </TableContainer>
    </>
  );
};

export default Margin;
