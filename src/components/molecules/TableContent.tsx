import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import styled from "styled-components";
import { device } from "../../styles";

const StyledCell = styled(TableCell)`
  font-size: 14px;

  @media ${device.tablet} {
    font-size: 1rem;
  }
`;

interface Data {
  marginRate: number;
  exchangeRate: number;
  profitAndLoss: number;
}

type Props = {
  rows: Data[];
};

const TableContent: React.FC<Props> = (props: Props) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledCell>証拠金維持率</StyledCell>
            <StyledCell>レート</StyledCell>
            <StyledCell>損益額</StyledCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => {
            return (
              <TableRow key={row.marginRate}>
                <StyledCell>{row.marginRate * 100} %</StyledCell>
                <StyledCell>
                  {row.exchangeRate >= 0
                    ? row.exchangeRate.toLocaleString()
                    : "-"}
                </StyledCell>
                <StyledCell>
                  {row.exchangeRate >= 0
                    ? row.profitAndLoss.toLocaleString()
                    : "-"}
                </StyledCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableContent;
