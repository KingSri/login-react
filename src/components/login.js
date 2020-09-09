import React, {useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

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

export default function Login(props) {
    //useState hook instead of state/setState for username and password
    const [usernameInput, setUsernameInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

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
        else{
            console.log("Email or Password Invalid. Please try again later");
        }
        //Ensures that username AND password input are equal to one of the three values listed above


    }
        return (
             <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div>
                    <Typography component="h1" variant="h5">
                        Welcome to ReleaseIQ. Please log in.
                    </Typography>
                    <form onSubmit={handleSubmit} noValidate>
                        <Input
                            onChange={handleChangeUsername}
                            type="username"
                            id="username"
                            name="username"
                            value={usernameInput}
                            placeholder = "username"
                            autoComplete= "username"
                            />

                        <Input
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
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </Container> 
          )
    }



//Notes:
//

// class Login extends Component{
    
//     state = {
//         username: '',
//         password: '',
//     }
//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     };

//     handleSubmit = (event) => {
//         event.preventDefault()
//     }


// export default (Login);