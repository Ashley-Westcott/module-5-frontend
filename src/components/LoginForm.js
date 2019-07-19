import React from 'react'
const API = "http://localhost:3000/login"

export default class LoginForm extends React.Component {

  state = {
    username: "",
    password: "",
    current_traveler: ""
  }


  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(API, {
      method: 'POST',
      headers: {
        // Authorization: `Bearer <token>`
        "Content-Type": "application/json",
        "Accepts": "application/json"
        },
      body:
        JSON.stringify(this.state)
      })
      .then(response => response.json())
      .then(data => this.setState({
          current_traveler: data.traveler
    }))
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}
