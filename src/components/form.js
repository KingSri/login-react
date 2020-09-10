import React, { Component } from 'react';
// import { employeeData } from '../data/employee';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const employeeData = [
    {
        id: '1',
        name: 'abc',
        role: 'admin',

    },
    {
        id: '2',
        name: 'def',
        role: 'admin',

    },
    {
        id: '3',
        name: 'qwe',
        role: 'user',

    },
    {
        id: '4',
        name: 'pou',
        role: 'user',

    },
    {
        id: '5',
        name: 'hjk',
        role: 'admin',
    },

]

class form extends Component {
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
    }
    
    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     this.setState(prevState => {
    //         return{
    //             eData: [
    //                 ...prevState.eData, {id: prevState.newData, name: prevState.newData, role: prevState.newData}
    //             ],
    //             newData: '',
    //         }
    //     }
    // }

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
            </div>
            </>
        )
    }

}
export default form; 