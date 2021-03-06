import React, { Component } from 'react';
import axios from 'axios'
import{BACKEND_URL} from '../config'

export default class CreateUser extends Component {

  constructor(props){
    super(props)

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: ""
    }
  }

  onChangeUsername(e){
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();

    const newUser = {
      username: this.state.username
    }

    console.log(newUser);
    // axios.post takes two arguments
    // first: the url to pst to as a string
    // Second: what we are posting
    axios.post(BACKEND_URL + 'users/add',newUser)
    .then((res) => {
        console.log(res.data)
    });

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
       <h3>Create New User</h3>
       <form onSubmit={this.onSubmit}>
         <div className="form-group">
          <label>Username: </label>
            <input 
            required
            type="text"
            className='form-control'
            value={this.state.username}
            onChange={this.onChangeUsername}
            />
          </div>  
          <div className="form-group">
            <input type="submit" value="create user" className="btn btn-primary"/>
          </div>
            
          






       </form>
      </div>
    )
  }
}