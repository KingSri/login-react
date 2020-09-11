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
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid'


class Home extends Component {
  constructor(props){
      super(props);
      this.state = {
          open: false,
          eData: employeeData,
          newData: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }
  showModal = () => {
    this.setState([{show: true}])
  }
  handleClickOpen = () =>{
    this.setState({open: true})
  }
  handleClose =() => {
    this.setState({ open:false})
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
           <div>
        <div>
          <Grid container alignItems="flex-start" justify="flex-end" direction="row">
      <Button variant="contained" align="right" color="warning" onClick={this.handleClickOpen}>
        +
      </Button>
      </Grid>

      <Dialog open={this.state.open} onClose={this.handleClose} onSubmit={this.handleSubmit} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Welcome</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Enter Relevant Employee Information Here.
          </DialogContentText>
          
          <TextField
            autoFocus
            margin="dense"
            label="ID"
            fullWidth
            onChange = {this.handleChange}
            type="id"
            id="id"
            name="id"
            value={this.state.id}
            placeholder = "ID"
            autoComplete= "id" 
          />
          <TextField
            margin="dense"
            label="Name"
            fullWidth
            autoFocus
            onChange = {this.handleChange}
            type="name"
            id="name"
            name="name"
            value={this.state.name}
            placeholder= "Name"
            autoComplete="name"
            
          />
          <TextField
            autoFocus
            margin="dense"
            label="Role"
            fullWidth
            onChange = {this.handleChange}
            type="role"
            id="role"
            name="role"
            value={this.state.role}
            placeholder = "Role"
            autoComplete= "role" 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="alert">
            Cancel
          </Button>
          <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={this.handleSubmit}
                      disabled={!this.state.id || !this.state.name|| !this.state.role}
                      >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Employee ID</TableCell>
                        <TableCell align="center">Employee Name</TableCell>
                        <TableCell align="center">Employee Role</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.eData.map((row) => (
                        <TableRow key={row}>
                           <TableCell align="center">{row.id}</TableCell>
                           <TableCell align="center">{row.name}</TableCell>
                          <TableCell align="center">{row.role}</TableCell>
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