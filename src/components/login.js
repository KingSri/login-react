import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

//Need to convert this into a function to support stylistic changes via materialui template.
//Need to ensure that the data works with a json file as opposed to back end data
class Login extends Component{
    
    state = {
        username: '',
        password: '',
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault()
    }
    render() {
        
        return (
             <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div>
                    <Typography component="h1" variant="h5">
                        Welcome to CompanyTable. Please log in.
                    </Typography>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <Input
                            onChange={this.handleChange}
                            type="username"
                            id="username"
                            name="username"
                            value={this.state.username}
                            placeholder = "username"
                            autoComplete= "username"
                            />

                        <Input
                            onChange={this.handleChange}
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.password}
                            placeholder="password"
                            autoComplete= "password"
                            
                            />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.handleSubmit}
                        disabled={!this.state.username || !this.state.password}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </Container> 
          )
    }

}

export default (Login);