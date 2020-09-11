import React, { Component } from 'react';
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
import FormDialog from './modal';
import TextField from '@material-ui/core/TextField';


class Home extends Component {
  constructor(){
      super();
      this.state = {
          eData: employeeData,
          newData: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit = (event) => {
      event.preventDefault()
      const newId = this.state.id;
      const newName =this.state.name;
      const newRole = this.state.role;
      const newData = 
          {id: newId, name: newName, role:newRole}
      this.setState({
          eData: [...this.state.eData,newData],
      }, () => {
          console.log(this.state.eData)
      })
      // //storing localstorage to a new file-for future lookthrough
      // let fs = require('fs');
      // fs.writeFileSync('storeData.js', this.eData)
  }
  
  handleChange = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }
  render(){
      return(
          <>
          New Entry
          <div>
              <div>
                  <form onSubmit={this.handleSubmit}>
                      <TextField 
                      onChange = {this.handleChange}
                      type="id"
                      id="id"
                      name="id"
                      value={this.state.id}
                      placeholder = "id"
                      autoComplete= "id" 
                      />
                      <TextField 
                      onChange = {this.handleChange}
                      type="name"
                      id="name"
                      name="name"
                      value={this.state.name}
                      placeholder = "name"
                      autoComplete= "name" 
                      />
                      <TextField 
                      onChange = {this.handleChange}
                      type="role"
                      id="role"
                      name="role"
                      value={this.state.role}
                      placeholder = "role"
                      autoComplete= "role" 
                      />
                      <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={this.handleSubmit}
                      disabled={!this.state.id || !this.state.name|| !this.state.role}
                      >
                          Submit
                      </Button>

                  </form>
              </div>


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
        {this.state.eData.map((row) => (
          <TableRow key={row}>
            <TableCell>{row.id}</TableCell>
            <TableCell align="center">{row.name}</TableCell>
            <TableCell align="right">{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>




          </div>
          </>
      )
  }

}
export default Home;