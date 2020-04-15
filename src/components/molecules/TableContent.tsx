import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>証拠金維持率</TableCell>
            <TableCell>レート</TableCell>
            <TableCell>損益額</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => {
            return (
              <TableRow key={row.marginRate}>
                <TableCell>{row.marginRate * 100} %</TableCell>
                <TableCell>{row.exchangeRate}</TableCell>
                <TableCell>{row.profitAndLoss}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableContent;
