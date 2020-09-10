import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { employeeData } from '../data/employee'

export default function Home() {


  return (
    <>
    <Button variant="contained" color="secondary" style={{float: 'right'}}> + </Button>
    
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee ID</TableCell>
            <TableCell align="center">Employee Name</TableCell>
            <TableCell align="right">Employee Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeData.map((row) => (
            <TableRow key={row}>
              <TableCell>{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="right">{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}