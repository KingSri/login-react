import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




class FormDialog extends Component {
  render() {
    return (
      <div>
        <div>
      <Button variant="filled" color="alert" align="right" onClick={this.props.handleClickOpen}>
        +
      </Button>
      <Dialog open={this.props.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">WElcome</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Enter Relevant Company Info Here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            fullWidth
            onChange = {this.handleChange}
            type="id"
            id="id"
            name="id"
            value={this.props.id}
            placeholder = "id"
            autoComplete= "id" 
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="alert">
            Cancel
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
        
      </div>
    );
  }
}

export default FormDialog;

// export default function FormDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
    
//   );
// }