import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './containers/LoginPage'
import ProfilePage from './containers/ProfilePage'
import SignupPage from './containers/SignupPage'


export default class App extends React.Component {

  state = {
    currentTraveler: null
  }

  componentDidMount(){
    const token = localStorage.getItem("token")
    if(token){
      fetch("http://localhost:3000/auto_login", {
        headers: {
          "Authorization": token
        }
      })
      .then (response => response.json())
      .then (response => {
          if (response.errors){
              localStorage.removeItem("traveler_id")
              alert("auto_login",response.errors)
              console.log("auto_login",response)
        } else {
        this.setState({
          currentTraveler: response
          })

        }
      })
    }
  }

  rerender = () => {
    const token = localStorage.getItem("token")
    if(token){
      fetch("http://localhost:3000/auto_login", {
        headers: {
          "Authorization": token
        }
      })
      .then (response => response.json())
      .then (response => {
          if (response.errors){
              localStorage.removeItem("traveler_id")
              alert("auto_login",response.errors)
              console.log("auto_login",response)
        } else {
        this.setState({
          currentTraveler: response
          })

        }
      })
    }
  }



  setCurrentTraveler = (data) => {
    this.setState({
      currentTraveler: data
  })
}

  logout = () => {
    this.setState({
      currentTraveler: null
    })
    this.props.history.push("/login")
  }

    render() {
      console.log(this.state)
      return (
        <div>
        <Switch>
              <Route path='/login' render={(routerProps) => {
                return <LoginPage setCurrentTraveler={this.setCurrentTraveler} {...routerProps} />}} />
                <Route path="/signup" render={(routerProps) => {
  							return <SignupPage setCurrentTraveler={this.setCurrentTraveler} {...routerProps}/>}} />
              <Route path='/travelers/:id' render={(routerProps) => {
                return <ProfilePage rerender= {this.rerender} currentTraveler={this.state.currentTraveler} logout={this.logout} {...routerProps}/>}} />
          </Switch>
        </div>
        )
    }
}
