import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './containers/LoginPage'
import ProfilePage from './containers/ProfilePage'
const TRAVELERS_API = "http://localhost:3000/travelers"
const LOGIN_API = "http://localhost:3000/login"


export default class App extends React.Component {

  state = {
    username: "",
    password: "",
    all_traveler_data: [],
    current_traveler_id: null,
    current_traveler: null,
    foundTraveler: ""
  }

  componentDidMount() {
    fetch(TRAVELERS_API)
    .then(response => response.json())
    .then(data => this.setState({all_traveler_data:data}))
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(LOGIN_API, {
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
      .then(data =>
        this.setCurrentTraveler(data),
      )
  }

  setCurrentTraveler = (data) => {
    localStorage.setItem("token", data.jwt)
    this.setState({
      current_traveler: data.traveler
  })
}


    render() {
      console.log(this.state)
      return (
        // <Router>
          <div>
            {this.state.current_traveler
              ?
              <ProfilePage current_traveler={this.state.current_traveler} all_traveler_data={this.state.all_traveler_data} />
              :
              <LoginPage handleSubmit={this.handleSubmit} handleChange={this.handleChange} />}
          </div>
       // </Router>
        )
    }
}
