import React, {useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import  {Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3,0,2),
    },
  })
  );


//login data-mimicking a json file
let one = {
    username: "one",
    password: 'One123',
}
let two = {
    username: 'two',
    password: 'Two123',
}
let three = {
    username: 'three',
    password: 'Three123',
}


//Main function
export default function Login(props) {
    //useState hook instead of state/setState for username and password
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const stylingClass = useStyles();

    // //using history via reactrouter
    const history = useHistory();

    //handleChangeUsername/password here updates the values as the user types

    function handleChangeUsername(e) {
        setUsernameInput(e.target.value)
    }
    function handleChangePassword(e){
        setPasswordInput(e.target.value)
    }
    //handlesubmit logs the current value of the input element when submitted/orevents HTML from browsing to a new page
    function handleSubmit(e) {
        e.preventDefault()
        //need to call variables to check whether or not form can go through (front end of routes/controllers)
        if (((usernameInput === one.username) && (passwordInput === one.password)) || ( (usernameInput === two.username) && (passwordInput === two.password)) || ((usernameInput === three.username) && (passwordInput === three.password)) ){
            history.push('/home');
        }
        else {
            alert("Username and/or password is incorrect. Please try again.")
        }
        //Ensures that username AND password input are equal to one of the three values listed above


    }
        return (
             <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={stylingClass.paper}>
                    <Typography component="h1" variant="h5">
                        Welcome to ReleaseIQ. Please log in.
                    </Typography>
                    <form onSubmit={handleSubmit} className={stylingClass.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            onChange={handleChangeUsername}
                            type="username"
                            id="username"
                            name="username"
                            value={usernameInput}
                            placeholder = "username"
                            autoComplete= "username"
                            autoFocus
                            />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            onChange={handleChangePassword}
                            type="password"
                            id="password"
                            name="password"
                            value={passwordInput}
                            placeholder="password"
                            autoComplete= "password"
                            
                            />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        disabled={!usernameInput || !passwordInput}
                        className={stylingClass.submit}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </Container> 
          )
    }
