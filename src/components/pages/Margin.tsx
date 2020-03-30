import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { 
  TextField,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button
 } from '@material-ui/core';
 import styled from 'styled-components';
 import Chart from '../molecules/Chart';

const Title = styled.h1`
  margin: 3rem auto;
`;

type FormData = {
  depositeMargin: number
  executionRate: number
  transactionQuantity: number
  leverage: number
  position: string
}

type Data = {
  currentRate: number
  marginMaintenanceRate: number
}

const radioList: string[] = ["買い", "売り"];

const Margin: React.FC = () => {
  const marginMaintenanceRateList = [0.3, 0.5, 1.0, 1.5, 2.0, 4.0, 5.0];
  const [data, setData] = useState<Data[]>([]);
  const { register, handleSubmit, control, errors } = useForm<FormData>();
  const onSubmit = handleSubmit(({
    depositeMargin,
    executionRate,
    transactionQuantity,
    leverage,
    position
  }) => {
    const tmpData: Data[] = [];
    let rate: number;
    marginMaintenanceRateList.map(marginMaintenanceRate => {
      if (position === radioList[0]) {
        rate = (1.0 + marginMaintenanceRate / leverage) * executionRate - depositeMargin / transactionQuantity;
      } else if (position === radioList[1]) {
        rate = (1.0 - marginMaintenanceRate / leverage) * executionRate + depositeMargin / transactionQuantity;
      } else {
        rate = 1.0;
      }
      tmpData.push({
        currentRate: rate,
        marginMaintenanceRate: marginMaintenanceRate
      });
    })
    
    setData(tmpData);
    console.log(tmpData);
  });

  return (
    <>
      <Title>証拠金維持率計算</Title>
      <Chart data={data} />
      <form onSubmit={onSubmit}>

        <div>
          <TextField inputRef={register({ required: true })} label="預入証拠金" name="depositeMargin" />
          {errors.depositeMargin && <div>This field is required</div>}
        </div>

        <div>
          <TextField inputRef={register({ required: true })} label="約定レート" name="executionRate" />
          {errors.executionRate && <div>This field is required</div>}
        </div>
        
        <div>
          <TextField inputRef={register({ required: true })} label="取引数量" name="transactionQuantity" />
          {errors.transactionQuantity && <div>This field is required</div>}
        </div>

        <div>
          <TextField inputRef={register({ required: true })} label="レバレッジ" name="leverage" />
          {errors.leverage && <div>This field is required</div>}
        </div>

        <div>
          <FormLabel>ポジション</FormLabel>
          <Controller
            name="position"
            as={
              <RadioGroup>
                {radioList.map(item => (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={<Radio />}
                    label={item}
                  />
                ))}
              </RadioGroup>
            }
            control={control}
            defaultValue={radioList[0]}
          />
        </div>

        <Button type="submit" variant="outlined" color="primary">
          計算
        </Button>
      </form>
    </>
  );
}

export default Margin;