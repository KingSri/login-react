import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Form extends Component {
    render() {
        return (
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
            </div>
        );
    }
}

export default Form;